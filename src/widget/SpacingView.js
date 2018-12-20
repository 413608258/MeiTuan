import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Colors from "../common/Colors";

/**
 * @ClassName : SpacingView
 * @Description : TODO
 *
 * @author : Loushuai
 * @since : 2018-12-20
 **/

class SpacingView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'SpacingView...',
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        height: 14,
        backgroundColor: Colors.paper,
    },
});

export default SpacingView;
