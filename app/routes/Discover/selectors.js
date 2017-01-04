import _ from 'lodash';
import {createSelector} from 'reselect';
import {getGenres, getCategories} from '../../selectors';

const discoverView = state => state.entities.views.discover;

const getDiscoverGenres = createSelector([
    discoverView, getGenres
], (dv, genres) => _(genres).pick(dv._genres).values().value());

const getDiscoverCategories = createSelector([
    discoverView, getCategories
], (dv, categories) => _(categories).pick(dv._categories).values().value());

const getViewIsReady = createSelector([discoverView], dv => dv && dv.isFetching === false);

export {getDiscoverGenres, getDiscoverCategories, getViewIsReady};