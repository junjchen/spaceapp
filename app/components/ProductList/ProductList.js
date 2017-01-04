import _ from 'lodash';
import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import {styles as s} from 'react-native-style-tachyons';
import ProductThumbnail from './ProductThumbnail';

const _productThumbnails = (products, {
    withBrand,
    imgSize
}, style) => products.map((x, i) => (<ProductThumbnail
    key={i}
    style={style}
    brandName={withBrand
    ? x.brand.name
    : null}
    name={x.name}
    imgUri={x.thumbnail}
    imgSize={imgSize}/>))

const _chunkToRows = ({products, itemsPerRow}) => _.chunk(products, itemsPerRow)

export default class ProductList extends Component {

    render() {
        const isVertical = !!this.props.itemsPerRow;
        if (isVertical) {
            return (
                <ScrollView showsVerticalScrollIndicator={false} style={this.props.style}>
                    {_chunkToRows(this.props).map((c, i) => (
                        <View key={i} style={[s.flx_row, s.jcsb, s.mb3]}>
                            {_productThumbnails(c, this.props)}
                        </View>
                    ))}
                </ScrollView>
            );
        } else {
            return (
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={[this.props.style, s.pl2]}>
                    {_productThumbnails(this.props.products, this.props, [s.mr2])}
                </ScrollView>
            );
        }
    }
}

ProductList.defaultProps = {
    withBrand: false,
    itemsPerRow: null
}