import _ from 'lodash';
import {createSelector} from 'reselect';
import {getBrands, getPosts, getProducts} from '../../selectors';

const featuredView = state => state.entities.views.featured;

const getFeaturedBrand = createSelector([
    featuredView, getBrands
], (fv, brands) => brands[fv._brand]);

const getFeaturedPosts = createSelector([
    featuredView, getPosts
], (fv, posts) => _(posts).pick(fv._posts).values().value());

const getFeatureBrandsdProducts = createSelector([
    featuredView, getProducts
], (fv, products) => _(products).pick(fv._products_from_brand).values().value());

const getFeaturedProducts = createSelector([
    featuredView, getProducts, getBrands
], (fv, products, brands) => _(products).pick(fv._products).values().map(p => ({
    ...p,
    brand: brands[p.brand]
})).value());

const getViewIsReady = createSelector([featuredView], fv => fv && fv.isFetching === false);

export {getFeaturedBrand, getFeaturedPosts, getFeatureBrandsdProducts, getFeaturedProducts, getViewIsReady};