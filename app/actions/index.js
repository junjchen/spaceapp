import _ from 'lodash';
import {createAction} from 'redux-actions';

const fetchViewState = createAction('FETCH_VIEW_STATE');
const updateEntity = createAction('UPDATE_ENTITY');
const changeNavTab = createAction('CHANGE_NAV_TAB');

export {fetchViewState, updateEntity, changeNavTab};