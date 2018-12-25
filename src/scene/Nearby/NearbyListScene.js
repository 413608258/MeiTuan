import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, ListView, StatusBar} from 'react-native';
import RefreshListView, {RefreshState} from 'react-native-refresh-list-view';
import GroupPurchaseCell from "../GroupPurchase/GroupPurchaseCell";
import NearbyHeaderView from "./NearbyHeaderView";
import api from "../../api";


/**
 * @ClassName : NearbyListScene
 * @Description : TODO
 *
 * @author : Loushuai
 * @since : 2018-12-21
 **/

class NearbyListScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'NearbyListScene...',
            typeIndex: 0,
            data: [],
            refreshState: RefreshState.Idle,
        };
    }

    componentDidMount() {
        this.requestFirstPage();
    }

    requestFirstPage = async ()=>{
        try {
            this.setState({
                refreshState: RefreshState.HeaderRefreshing
            });
            let dataList = await this.requestData();

            this.setState({
                data: dataList,
                refreshState: RefreshState.Idle,
            })
        } catch (error) {
            this.setState({
                refreshState: RefreshState.Failure,
            })
        }
    }

    requestNextPage = async () => {
        try {
            this.setState({
                refreshState: RefreshState.FooterRefreshing,
            })
            let dataList = await this.requestData();

            this.setState({
                //TODO: 这个写法,有待研究...
                data: [...this.state.data, ...dataList],
                refreshState: this.state.data.length > 30 ? RefreshState.NoMoreData : RefreshState.Idle,
            })
        } catch (error) {
            this.setState({
                refreshState: RefreshState.Failure,
            })
        }
    }

    requestData = async ()=>{
        /*this.setState({
            typeIndex: index ? index: 0,
        });*/

        /*Promise.resolve()
            .then(()=>{
                this.setState({
                    typeIndex: index ? index: 0,
                });
            }).then(()=>{
                console.warn("index: " + index + " ,typeIndex: " + this.state.typeIndex);
            }).catch((error)=>{
                console.log(`${this.state.title}_renderHeader: ` + error);
            });*/
        var url = api.recommend;
        let response = await fetch(url);
        let json = await response.json();

        //console.log(JSON.stringify(json));

        let dataList = json.data.map((info)=>{
            return {
                id: info.id,
                imageUrl: info.squareimgurl,
                title: info.mname,
                subtitle: `[${info.range}]${info.title}`,
                price: info.price
            };
        });

        console.log("dataList: " + JSON.stringify(dataList));

        // 偷懒，用同一个测试接口获取数据，然后打乱数组，造成数据来自不同接口的假象 >.<
        dataList.sort(() => {return 0.5 - Math.random()});

        return dataList;
    }

    _onSelected = async (index)=>{
        try {
            if (index != this.state.typeIndex){
                this.setState({
                    refreshState: RefreshState.HeaderRefreshing,
                });
                //TODO: 去掉await,换成let dataList = this.requestData() 就会报错:Tried to get frame for out of range index NaN
                let dataList = await this.requestData();

                this.setState({
                    typeIndex: index,
                    data: dataList,
                    refreshState: RefreshState.Idle,
                })
            }
        } catch (error) {
            this.setState({
                refreshState: RefreshState.Failure,
            })
        }
        //下面这种方式(去掉await)会报错
        /*if (index != this.state.typeIndex){
            this.setState({
                typeIndex: index,
                refreshState: RefreshState.HeaderRefreshing
            });
            let dataList = this.requestData();
            this.setState({
                data: dataList,
                refreshState: RefreshState.Idle,
            });
        }*/
    }

    renderHeader = ()=>{
        return (
            <NearbyHeaderView
                titles={this.props.types}
                selectedIndex={this.state.typeIndex}
                onSelected={
                    this._onSelected
                    /*(index)=>{
                        if (index != this.state.typeIndex){
                            /!*Promise.resolve()
                                .then(()=>{
                                    this.setState({
                                        typeIndex: index,
                                    });
                                    this.requestData();
                                }).then(()=>{
                                    console.warn("index: " + index + " ,typeIndex: " + this.state.typeIndex);
                                }).catch((error)=>{
                                    console.log(`${this.state.title}_renderHeader: ` + error);
                                });*!/
                            this.setState({
                                typeIndex: index,
                            });
                            var list = this.requestData();
                            this.setState({
                                data: list,
                            });
                        }
                    }*/
                }
            />
        );
    }

    renderCell = (rowData: any)=>{
        return (
            <GroupPurchaseCell
                info={rowData.item}
                onPress={
                    ()=>{
                        this.props.navigation.navigate('GroupPurchase', {info: rowData.item});
                    }
                }
            />
        );
    }

    render() {
        return (
            //TODO: 带分页功能的 ListView
            <RefreshListView
                data={this.state.data}
                ListHeaderComponent={this.renderHeader}
                renderItem={this.renderCell}
                keyExtractor={(item, index) => index.toString()}
                refreshState={this.state.refreshState}
                onHeaderRefresh={this.requestFirstPage}
                onFooterRefresh={this.requestNextPage}
            />
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default NearbyListScene;
