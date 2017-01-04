import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import GenreThumbnail from './GenreThumbnail';
import {styles as s} from "react-native-style-tachyons";

export default class GenreList extends Component {

    render() {
        return (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={this.props.style}>
                {this
                    .props
                    .genres
                    .map((x, i) => {
                        return (<GenreThumbnail
                            key={i}
                            style={s.mr2}
                            title={x.name}
                            imgUri={x.thumbnail}
                            imgSize={this.props.imgSize}/>);
                    })}
            </ScrollView>
        );
    }
}