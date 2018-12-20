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
                    key={info.title}
                    title={info.title}
                    icon={info.icon}
                    onPress={() => {
                        onMenuSelected && onMenuSelected(i)
                    }}
                />
            )
        )

        let menuViews = []
        let pageCount = Math.ceil(menuItems.length / 10)

        for (let i = 0; i < pageCount; i++) {
            let items = menuItems.slice(i * 10, i * 10 + 10)

            let menuView = (
                <View style={styles.itemsView} key={i}>
                    {items}
                </View>
            )
            menuViews.push(menuView)
        }
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    onScroll={(e) => this.onScroll(e)}
                >
                    <View style={styles.menuContainer}>
                        {menuViews}
                    </View>
                </ScrollView>

                <PageControl
                    style={styles.pageControl}
                    numberOfPages={pageCount}
                    currentPage={this.state.currentPage}
                    hidesForSinglePage
                    pageIndicatorTintColor='gray'
                    currentPageIndicatorTintColor={Colors.primary}
                    indicatorSize={{width: 8, height: 8}}
                />
            </View>
        );
    }

    onScroll(e: any) {
        let x = e.nativeEvent.contentOffset.x
        let currentPage = Math.round(x / screen.width)

        console.log('onScroll  ' + e.nativeEvent.contentOffset.x + '  page ' + currentPage + '  current ' + this.state.currentPage)
        if (this.state.currentPage != currentPage) {
            this.setState({
                currentPage: currentPage
            })
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
