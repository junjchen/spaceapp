import {connect} from 'react-redux';
import App from './App';
import {changeNavTab, fetchViewState} from '../../actions';
import {getCurrentTab} from '../../selectors';

const mapStateToProps = state => {
    return ({page: getCurrentTab(state)});
}
const mapDispatchToProps = dispatch => ({
    onChangeTab: ({i}) => {
        dispatch(changeNavTab({to: i}));
    },
    onInit: () => {
        dispatch(fetchViewState({view: 'featured'}));
        dispatch(fetchViewState({view: 'discover'}));
        dispatch(changeNavTab({to: 0}));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);