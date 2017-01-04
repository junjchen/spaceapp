import {connect} from 'react-redux';
import Featured from './Featured';
import {getFeaturedBrand, getFeaturedPosts, getFeatureBrandsdProducts, getFeaturedProducts, getViewIsReady} from './selectors';

const mapStateToProps = state => {
    if (getViewIsReady(state)) {
        return {isReady: true, posts: getFeaturedPosts(state), brand: getFeaturedBrand(state), brandProducts: getFeatureBrandsdProducts(state), products: getFeaturedProducts(state)};
    } else {
        return {isReady: false};
    }
}
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Featured);