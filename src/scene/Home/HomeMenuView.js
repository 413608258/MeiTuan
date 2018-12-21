import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import PageControl from 'react-native-page-control';

import {screen} from "../../common";
import Colors from "../../common/Colors";
import HomeMenuItem from "./HomeMenuItem";

/**
 * @ClassName : HomeMenuView
 * @Description : TODO
 *
 * @author : Loushuai
 * @since : 2018-12-20
 **/

class HomeMenuView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'HomeMenuView...',
            currentPage: 0,
        };
    }

    componentDidMount() {
    }

    render() {
        let {menuInfos, onMenuSelected} = this.props;

        let menuItems = menuInfos.map(
            (info, i) => (
                <HomeMenuItem
                    key={i}
                    title={info.title}
                    icon={info.icon}
                    onPress={() => {
                        onMenuSelected && onMenuSelected(`${i}：${info.title}`);
                    }}
                />
            )
        )

        let menuViews = [];
        //Math.ceil() 向上取整
        let pageCount = Math.ceil(menuItems.length / 10);

        for (let i = 0; i < pageCount; i++) {
            //数组.slice(start, end) 数组截取,不包括end下标元素
            let items = menuItems.slice(i * 10, i * 10 + 10);

            let menuView = (
                <View style={styles.itemsView} key={i}>
                    {items}
                </View>
            )
            menuViews.push(menuView);
        }
        return (
            <View style={styles.container}>
                <ScrollView
                    //子视图"是否横向"排列, 默认为 false
                    horizontal={true}
                    //是否显示"水平方向"的滚动条
                    showsHorizontalScrollIndicator={false}
                    //当值为true时，滚动条会停在滚动视图的尺寸的整数倍位置。这个可以用在水平分页上。默认值为false。
                    pagingEnabled={true}
                    onScroll={(e) => this.onScroll(e)}
                >
                    <View style={styles.menuContainer}>
                        {menuViews}
                    </View>
                </ScrollView>

                <PageControl
                    style={styles.pageControl}
                    //总页数
                    numberOfPages={pageCount}
                    //当前页
                    currentPage={this.state.currentPage}
                    //只有一个页面时,是否隐藏PageControl 控件
                    hidesForSinglePage={true}
                    //色调颜色
                    pageIndicatorTintColor='gray'
                    //当前页指示器色调
                    currentPageIndicatorTintColor={Colors.primary}
                    //当前页指示器样式
                    //currentIndicatorStyle={{width: 16, height: 4}}
                    //页面指示器样式
                    //indicatorStyle={{width:16, height: 4}}
                    //页面指示器大小
                    indicatorSize={{width: 8, height: 8}}
                />
            </View>
        );
    }

    onScroll(e: any) {
        let x = e.nativeEvent.contentOffset.x;
        let currentPage = Math.round(x / screen.width);

        console.log('onScroll  ' + e.nativeEvent.contentOffset.x + '  page ' + currentPage + '  current ' + this.state.currentPage);
        if (this.state.currentPage != currentPage) {
            this.setState({
                currentPage: currentPage,
            });
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    menuContainer: {
        flexDirection: 'row',
    },
    itemsView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: screen.width,
    },
    pageControl: {
        margin: 10,
    }
});

export default HomeMenuView;
