import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {screen} from "../../common";
import Colors from "../../common/Colors";
import {Heading2, Heading3, Paragraph} from "../../widget/Text";
/**
 * @ClassName : GroupPurchaseCell
 * @Description : TODO
 *
 * @author : Loushuai
 * @since : 2018-12-18
 **/

class GroupPurchaseCell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'GroupPurchaseCell',
        };
    }

    componentDidMount() {
    }

    render() {
        let {info} = this.props;
        let imageUrl = info.imageUrl.replace('w.h', '160.0');
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.onPress(info)}>
                <Image source={{uri: imageUrl}} style={styles.icon} />

                <View style={styles.rightContainer}>
                    <Heading2>{info.title}</Heading2>
                    <Paragraph numberOfLines={0} style={{marginTop: 8}}>{info.subtitle}</Paragraph>
                    <View style={{flex: 1, justifyContent: 'flex-end'}}>
                        <Heading2 style={styles.price}>￥{info.price}</Heading2>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: screen.onePixel,
        borderColor: Colors.border,
        backgroundColor: 'white',
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 10,
    },
    price: {
        color: Colors.primary
    }
})

export default GroupPurchaseCell;
