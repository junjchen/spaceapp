import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';

import {updateEntity} from './entity';
import {changeNavTab} from './app';

export default combineReducers({
    entities: handleActions({
        UPDATE_ENTITY: updateEntity
    }, {
        posts: {},
        products: {},
        brands: {},
        views: {},
        categories: {},
        genres: {}
    }),
    app: handleActions({
        CHANGE_NAV_TAB: changeNavTab
    }, {currentTab: 0})
});