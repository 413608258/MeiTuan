import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

/**
 * @ClassName : OrderScene
 * @Description : TODO
 *
 * @author : Loushuai
 * @since : 2018-12-14
 **/

class OrderScene extends Component {
    static navigationOptions = {
        title: `OrderScene...`,
    }
    constructor(props) {
        super(props);
        this.state = {
            title: OrderScene,
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>OrderScene</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {},
});

export default OrderScene;
