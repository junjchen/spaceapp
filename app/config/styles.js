import _ from 'lodash';
import DeviceInfo from 'react-native-device-info';
import {Dimensions} from 'react-native';

//const model = DeviceInfo.getModel(); //iPhone 6
const model = "iPhone 6";
//const model = "iPhone 5s";
const {height, width} = Dimensions.get('window');

const commonStyles = {
    viewPort: {
        width,
        height
    },
    colors: {
        black: '#222',
        white: '#fff',
        grey41: '#696969',
        grey75: '#bfbfbf',
        grey98: '#fafafa',
    }
}

const deviceStyles = {
    "iPhone 6": {
        fontSize: 18
    },
    "iPhone 5s": {
        fontSize: 16
    }
}

export default _.assign({}, commonStyles, deviceStyles[model]);
export {model, commonStyles, deviceStyles};