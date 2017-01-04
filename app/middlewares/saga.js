import _ from 'lodash';
import {call, put, select, takeEvery} from 'redux-saga/effects';
import {normalize} from 'normalizr';
import {updateEntity} from '../actions';
import {getViews} from '../selectors';
import {request} from '../lib';
import {view as viewSchema} from '../config/schemas';

function _isFetchNeeded(item) {
    if (!item) {
        return true;
    } else if (item.isFetching) {
        return false;
    } else {
        return item.didInvalidate;
    }
}

const _toUpdateActions = (actionCreator, entities) => _.flatMap(entities, (x, schema) => _.map(x, v => actionCreator({schema, entity: v})));

function * _fetchViewState({payload}) {
    const {view: id} = payload;
    const views = yield select(getViews);
    if (_isFetchNeeded(views[id])) {
        yield put(updateEntity({
            schema: 'views',
            entity: {
                id,
                isFetching: true,
                fetchFailed: false
            }
        }));
        let result;
        try {
            response = yield call(request, `views/${id}`);

            const {entities} = normalize(response, viewSchema);
            const updateActions = _toUpdateActions(updateEntity, entities);

            yield _.map(updateActions, x => put(x));
            yield put(updateEntity({
                schema: 'views',
                entity: {
                    id,
                    isFetching: false,
                    fetchFailed: false
                }
            }));
        } catch (e) {
            console.error(e);
            yield put(updateEntity({
                schema: 'views',
                entity: {
                    id,
                    isFetching: false,
                    fetchFailed: true
                }
            }));
        }
    }
}

export default function * saga() {
    yield takeEvery('FETCH_VIEW_STATE', _fetchViewState);
}