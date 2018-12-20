import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

import {Heading3} from "../../widget/Text";
import {screen} from "../../common";

/**
 * @ClassName : HomeMenuItem
 * @Description : TODO
 *
 * @author : Loushuai
 * @since : 2018-12-20
 **/

class HomeMenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'HomeMenuItem',
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <TouchableOpacity style={styles.container}
                              onPress={this.props.onPress}>
                <Image source={this.props.icon} resizeMode='contain' style={styles.icon} />
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
        width: screen.width / 5,
        height: screen.width / 5,
    },
    icon: {
        width: screen.width / 9,
        height: screen.width / 9,
        margin: 5,
    }
});

export default HomeMenuItem;
