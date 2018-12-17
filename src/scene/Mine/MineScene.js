import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

/**
 * @ClassName : MineScene
 * @Description : TODO
 *
 * @author : Loushuai
 * @since : 2018-12-14
 **/

class MineScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: MineScene,
        };
    }

    componentDidMount() {
    }

    render() {
        return (
                <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <Text>MineScene</Text>
                </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {},
});

export default MineScene;
