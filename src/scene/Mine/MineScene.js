import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, ScrollView, RefreshControl} from 'react-native';

import {Heading2, Heading3, Paragraph} from "../../widget/Text";
import {screen} from "../../common";
import Colors from "../../common/Colors";
//import DetailCell from "../../widget/DetailCell";
//import NavigationItem from "../../widget/NavigationItem";
//import SpacingView from "../../widget/SpacingView";
import {DetailCell, NavigationItem, SpacingView} from "../../widget";
import api from "../../api";

/**
 * @ClassName : MineScene
 * @Description : TODO
 *
 * @author : Loushuai
 * @since : 2018-12-14
 **/

class MineScene extends Component {
    static navigationOptions = ({navigation}: any) => ({
        headerRight: (
            <View style={{flexDirection: 'row'}}>
                <NavigationItem
                    icon={require('../../img/mine/icon_navigation_item_set_white.png')}
                    onPress={()=>{

                    }}
                />
                <NavigationItem
                    icon={require('../../img/mine/icon_navigation_item_message_white.png')}
                    onPress={()=>{

                    }}
                />
            </View>
        ),
        headerStyle:{
            backgroundColor: Colors.primary,
            elevation: 0,
            borderBottomWidth: 0,
        },
    })

    constructor(props) {
        super(props);
        this.state = {
            title: "MineScene...",
            isRefreshing: false,
            mineData: api.mineData,
        };
    }

    componentDidMount() {
    }

    onHeaderRefresh = ()=>{
        this.setState({
            isRefreshing: true,
        });

        setTimeout(()=>{
            this.setState({
                isRefreshing: false,
            });
        }, 2000);
    }

    renderCells = ()=>{
        let cells = [];
        /*let dataList = this.getDataList();
        for (let i = 0; i < dataList.length; i++) {
            let sublist = dataList[i]
            for (let j = 0; j < sublist.length; j++) {
                let data = sublist[j]
                let cell = <DetailCell image={data.image} title={data.title} subtitle={data.subtitle} key={data.title} />
                cells.push(cell)
            }
            cells.push(<SpacingView key={i} />)
        }*/

        this.state.mineData.map((value, key)=>{
            value.map((data, index)=>{
                let cell = <DetailCell image={data.image} title={data.title} subtitle={data.subtitle} key={key + ":" + index} onSelected={this._onSelected}/>
                cells.push(cell);
            });
            cells.push(<SpacingView key={key}/>)
        });

        return (
            <View style={{flex: 1}}>
                {cells}
            </View>
        )
    }

    _onSelected = (title)=>{
        alert(title);
    }
    //"我的"数据已从 api.js 文件中获取
    /*getDataList() {
        return (
            [
                [
                    {title: '我的钱包', subtitle: '办信用卡', image: require('../../img/mine/icon_mine_wallet.png')},
                    {title: '余额', subtitle: '￥95872385', image: require('../../img/mine/icon_mine_balance.png')},
                    {title: '抵用券', subtitle: '63', image: require('../../img/mine/icon_mine_voucher.png')},
                    {title: '会员卡', subtitle: '2', image: require('../../img/mine/icon_mine_membercard.png')}
                ],
                [
                    {title: '好友去哪', image: require('../../img/mine/icon_mine_friends.png')},
                    {title: '我的评价', image: require('../../img/mine/icon_mine_comment.png')},
                    {title: '我的收藏', image: require('../../img/mine/icon_mine_collection.png')},
                    {title: '会员中心', subtitle: 'v15', image: require('../../img/mine/icon_mine_membercenter.png')},
                    {title: '积分商城', subtitle: '好礼已上线', image: require('../../img/mine/icon_mine_member.png')}
                ],
                [
                    {title: '客服中心', image: require('../../img/mine/icon_mine_customerService.png')},
                    {title: '关于美团', subtitle: '我要合作', image: require('../../img/mine/icon_mine_aboutmeituan.png')}
                ]
            ]
        )
    }*/

    renderHeader = ()=>{
        return (
            <View style={styles.header}>
                <Image style={styles.avatar} source={require('../../img/mine/avatar.png')} />
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <Heading2 style={{color: 'white'}}>Lous</Heading2>
                        <Image style={{marginLeft: 4}} source={require('../../img/mine/beauty_technician_v15.png')} />
                    </View>
                    <TouchableOpacity
                        onPress={()=>{

                        }}
                        >
                        <Paragraph style={{color: 'white', marginTop: 4}}>个人信息 ></Paragraph>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: Colors.paper,}}>
                {/*renderHeader 背景颜色*/}
                <View style={{position: 'absolute', width: screen.width, height: screen.height/2, backgroundColor: Colors.primary}}></View>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={() => this.onHeaderRefresh()}
                            tintColor='gray'
                        />
                    }>
                    {this.renderHeader()}
                    <SpacingView />
                    {this.renderCells()}
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    icon: {
        width: 27,
        height: 27,
    },
    header: {
        backgroundColor: Colors.primary,
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#51D3C6'
    }
});

export default MineScene;
