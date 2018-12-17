import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

/**
 * @ClassName : TabBarItme
 * @Description : TODO
 *
 * @author : Loushuai
 * @since : 2018-12-14
 **/

class TabBarItme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: TabBarItme,
        };
    }

    componentDidMount() {
    }

    render() {
        let {normalImage, selectedImage, focused, tintColor} = this.props;
        return (
            <Image
                source={focused ? selectedImage : normalImage}
                style={{width: 25, height: 25, tintColor: tintColor}}
            />
        );
    }

}

const styles = StyleSheet.create({
    container: {},
});

export default TabBarItme;
