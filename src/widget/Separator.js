import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {screen} from "../common";
import Colors from "../common/Colors";

/**
 * @ClassName : Separator
 * @Description : TODO
 *
 * @author : Loushuai
 * @since : 2018-12-20
 **/

class Separator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Separator...',
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={[styles.line, this.props.style]}/>
        );
    }

}

const styles = StyleSheet.create({
    line: {
        width: screen.width,
        height: screen.onePixel,
        backgroundColor: Colors.border,
    },
});

export default Separator;
