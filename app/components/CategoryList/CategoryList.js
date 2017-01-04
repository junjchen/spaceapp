import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import CategoryThumbnail from './CategoryThumbnail';
import {styles as s} from "react-native-style-tachyons";

export default class CategoryList extends Component {

    render() {
        return (
            <ScrollView style={this.props.style}>
                {this
                    .props
                    .categories
                    .map((x, i) => {
                        return (<CategoryThumbnail
                            key={i}
                            title={x.name}
                            supportText={x.eng_name}
                            imgUri={x.thumbnail}
                            imgSize={this.props.imgSize}
                            style={s.mb2}/>)
                    })}
            </ScrollView>
        )
    }
}