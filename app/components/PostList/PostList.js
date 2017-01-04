import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {styles as s} from 'react-native-style-tachyons';
import PostThumbnail from './PostThumbnail';

export default class PostList extends Component {

    render() {
        return (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={this.props.style}>
                {this
                    .props
                    .posts
                    .map((x, i) => {
                        return <PostThumbnail
                            key={i}
                            style={i === this.props.posts.length - 1
                            ? null
                            : s.mr3}
                            imgUri={x.thumbnail}
                            imgSize={this.props.imgSize}
                            title={x.title}
                            excerpt={x.excerpt}/>
                    })}
            </ScrollView>
        );
    }
}
