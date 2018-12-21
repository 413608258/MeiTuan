import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {screen} from "../../common";
import Colors from "../../common/Colors";
import {Paragraph} from "../../widget/Text";

/**
 * @ClassName : NearbyHeaderView
 * @Description : TODO
 *
 * @author : Loushuai
 * @since : 2018-12-21
 **/

class NearbyHeaderView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'NearbyHeaderView',
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.titles.map((title, i)=>{
                        return (
                            <TouchableOpacity
                                key={i}
                                style={[{backgroundColor: this.props.selectedIndex==i ? `${Colors.pink}` : `${Colors.white}`}, styles.item]}
                                onPress={()=>this.props.onSelected(i)}
                            >
                                <Paragraph style={{color: this.props.selectedIndex == i ? 'white' : '#555555'}}>
                                    {title}
                                </Paragraph>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        width: screen.width / 4 - 10,
        marginLeft: 8,
        marginTop: 5,
        marginBottom: 5,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderWidth: screen.onePixel * 2,
        borderColor: Colors.border,
    },
});

export default NearbyHeaderView;
