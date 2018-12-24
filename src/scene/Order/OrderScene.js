import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, StatusBar, ListView, FlatList, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';
import RefreshListView, {RefreshState} from 'react-native-refresh-list-view';

import {screen} from "../../common";
import {Tip} from "../../widget/Text";
import GroupPurchaseCell from "../GroupPurchase/GroupPurchaseCell";
import api from "../../api";
import DetailCell from "../../widget/DetailCell";
import OrderMenuItem from "./OrderMenuItem";
import SpacingView from "../../widget/SpacingView";

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
        this.requestData();
    }

    requestData = async () => {
        try {
            this.setState({
                refreshState: RefreshState.HeaderRefreshing,
            });

            let response = await fetch(api.recommend);
            let json = await response.json();

            console.log(JSON.stringify(json));

            let dataList = json.data.map((info) => {
                return {
                    id: info.id,
                    imageUrl: info.squareimgurl,
                    title: info.mname,
                    subtitle: `[${info.range}]${info.title}`,
                    price: info.price
                }
            })

            // 偷懒，用同一个测试接口获取数据，然后打乱数组，造成数据来自不同接口的假象 >.<
            dataList.sort(() => {return 0.5 - Math.random()})

            this.setState({
                data: dataList,
                refreshState: RefreshState.NoMoreData,
            })
        } catch (error) {
            this.setState({
                refreshState: RefreshState.Failure,
            })
        }
    }

    renderCell = (rowData: any) => {
        return (
            <GroupPurchaseCell
                info={rowData.item}
                onPress={() => {
                    StatusBar.setBarStyle('default', false)
                    this.props.navigation.navigate('GroupPurchase', {info: rowData.item})
                }}
            />
        )
    }

    keyExtractor = (item: Object, index: number) => {
        return item.id
    }

    renderHeader = () => {
        return (
            <View style={styles.container}>
                <DetailCell title='我的订单' subtitle='全部订单' style={{height: 38}} />

                <View style={styles.itemContainer}>
                    <OrderMenuItem title='待付款' icon={require('../../img/order/order_tab_need_pay.png')} onMenuSelected={this.onMenuSelected}/>
                    <OrderMenuItem title='待使用' icon={require('../../img/order/order_tab_need_use.png')} onMenuSelected={this.onMenuSelected}/>
                    <OrderMenuItem title='待评价' icon={require('../../img/order/order_tab_need_review.png')} onMenuSelected={this.onMenuSelected}/>
                    <OrderMenuItem title='退款/售后' icon={require('../../img/order/order_tab_needoffer_aftersale.png')} onMenuSelected={this.onMenuSelected}/>
                </View>

                <SpacingView/>

                <DetailCell title='我的收藏' subtitle='查看全部' style={{height: 38}} />
            </View>
        )
    }

    onMenuSelected = (index)=>{
        alert(index);
        //跳转到相应页面
        // this.props.navigation.navigate('');
    }

    render() {
        return (
            <View style={styles.container}>
                <RefreshListView
                    data={this.state.data}
                    ListHeaderComponent={this.renderHeader}
                    renderItem={this.renderCell}
                    keyExtractor={this.keyExtractor}
                    refreshState={this.state.refreshState}
                    onHeaderRefresh={this.requestData}
                />
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
