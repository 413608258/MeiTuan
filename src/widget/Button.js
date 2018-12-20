import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

/**
 * @ClassName : Button
 * @Description : TODO
 *
 * @author : Loushuai
 * @since : 2018-12-20
 **/

class Button extends Component {

    static defaultProps = {
        onPress: ()=>{},
        disabled: false,
        activeOpacity: 0.8,
    }

    constructor(props) {
        super(props);
        this.state = {
            title: 'Button...',
        };
    }

    componentDidMount() {
    }

    render() {
        let {onPress, disabled, style, titleStyle, title, activeOpacity} = this.props;
        return (
            <TouchableOpacity
                style={[styles.container, style]}
                onPress={onPress}
                disabled={disabled}
                activeOpacity={activeOpacity}
                >
                <Text style={titleStyle}>
                    {title}
                </Text>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Button;
