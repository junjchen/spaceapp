import {createSelector} from 'reselect';

const getViews = state => state.entities.views;
const getPosts = state => state.entities.posts;
const getProducts = state => state.entities.products;
const getBrands = state => state.entities.brands;
const getGenres = state => state.entities.genres;
const getCategories = state => state.entities.categories;
const getCurrentTab = state => state.app.currentTab;

export {
    getViews,
    getPosts,
    getProducts,
    getBrands,
    getGenres,
    getCategories,
    getCurrentTab
};
