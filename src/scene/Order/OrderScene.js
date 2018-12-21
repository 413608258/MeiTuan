import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, StatusBar, ListView, FlatList, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
import RefreshListView, {RefreshState} from 'react-native-refresh-list-view';

import {screen} from "../../common";
import {Tip} from "../../widget/Text";

/**
 * @ClassName : OrderScene
 * @Description : TODO
 *
 * @author : Loushuai
 * @since : 2018-12-14
 **/

class OrderScene extends Component {
    static navigationOptions = ({navigation}: any)=>({
        headerTitle: (
            <View style={styles.headerStyle}>
                {/*<Text style={{fontSize: 18, color: '#333333'}}>订单</Text>*/}
                <Tip style={{fontSize: 18}}>订单</Tip>
            </View>
        ),
        headerStyle: {backgroundColor: 'white'},
    })
    constructor(props) {
        super(props);
        this.state = {
            title: 'OrderScene...',
            data: [],
            RefreshState: RefreshState.Idle,
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
    headerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    itemContainer: {
        flexDirection: 'row',
    },
});

export default OrderScene;
