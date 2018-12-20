
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import {screen} from "../../common";
import Colors from "../../common/Colors";
import HomeGridItem from "./HomeGridItem";

/**
 * @ClassName : HomeGridView
 * @Description : TODO
 *
 * @author : Loushuai
 * @since : 2018-12-20
 **/

class HomeGridView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'HomeGridView',
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.infos.map((info, index) => (
                    <HomeGridItem
                        info={info}
                        key={index}
                        onPress={() => this.props.onGridSelected(index)}
                    />
                ))}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        borderTopWidth: screen.onePixel,
        borderLeftWidth: screen.onePixel,
        borderColor: Colors.border
    },
});

export default HomeGridView;
