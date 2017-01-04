import {connect} from 'react-redux';
import Discover from './Discover';
import {getDiscoverGenres, getDiscoverCategories, getViewIsReady} from './selectors';

const mapStateToProps = state => {
    if (getViewIsReady(state)) {
        return {isReady: true, genres: getDiscoverGenres(state), categories: getDiscoverCategories(state)};
    } else {
        return {isReady: false};
    }
}
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);