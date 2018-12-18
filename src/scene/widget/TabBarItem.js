import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

/**
 * @ClassName : TabBarItme
 * @Description : TODO
 *
 * @author : Loushuai
 * @since : 2018-12-14
 **/

class TabBarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: TabBarItem,
        };
    }

    componentDidMount() {
    }

    render() {
        //let {normalImage, selectedImage, focused, tintColor} = this.props;
        let selectedImage = this.props.selectedImage ? this.props.selectedImage : this.props.normalImage;
        return (
            <Image
                source={this.props.focused ? selectedImage : this.props.normalImage}
                style={{width: 25, height: 25, tintColor: this.props.tintColor}}
            />
        );
    }

}

const styles = StyleSheet.create({
    container: {},
});

export default TabBarItem;
