import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {screen} from "../../common";
import {Heading3} from "../../widget/Text";

/**
 * @ClassName : OrderMenuItem
 * @Description : TODO
 *
 * @author : Loushuai
 * @since : 2018-12-21
 **/

class OrderMenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'OrderMenuItem',
        };
    }

    render() {
        return (
            <TouchableOpacity style={styles.container}
                 onPress={this.props.onPress}
                >
                <Image source={this.props.icon} resizeMode='contain' style={styles.icon}/>
                <Heading3>
                    {this.props.title}
                </Heading3>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screen.width / 4,
        height: screen.width / 5,
    },
    icon: {
        width: 30,
        height: 30,
        margin: 5,
    }
});

export default OrderMenuItem;
