import {schema} from 'normalizr';

const post = new schema.Entity('posts');
const brand = new schema.Entity('brands', {products: [product]});
const product = new schema.Entity('products', {brand});
const genre = new schema.Entity('genres');
const category = new schema.Entity('categories');
const view = new schema.Entity('views', {
    posts: [post],
    brands: [brand],
    products: [product],
    genres: [genre],
    categories: [category]
})

export {post, brand, product, view};