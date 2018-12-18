import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

/**
 * @ClassName : NavigationItem
 * @Description : TODO
 *
 * @author : Loushuai
 * @since : 2018-12-18
 **/

class NavigationItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'NavigationItem',
        };
    }

    componentDidMount() {
    }

    render() {
        let icon = this.props.icon &&
            <Image style={[styles.icon, this.props.iconStyle]} source={this.props.icon}/>

        let title = this.props.title &&
            <Text style={[styles.title, this.props.titleStyle]}>{this.props.title}</Text>
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
                {icon}
                {title}
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 27,
        height: 27,
        margin: 8,
    },
    title: {
        fontSize: 15,
        color: '#333333',
        margin: 8,
    }
});

export default NavigationItem;
