import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

/**
 * @ClassName : NearbyScene
 * @Description : TODO
 *
 * @author : Loushuai
 * @since : 2018-12-14
 **/

class NearbyScene extends Component {
    static navigationOptions = {
        title: `NearbyScene...`,
    }
    constructor(props) {
        super(props);
        this.state = {
            title: NearbyScene,
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>NearbyScene</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {},
});

export default NearbyScene;
