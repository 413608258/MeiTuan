import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {Heading3, Paragraph} from "./Text";
import Separator from "./Separator";

/**
 * @ClassName : DetailCell
 * @Description : TODO
 *
 * @author : Loushuai
 * @since : 2018-12-20
 **/

class DetailCell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'DetailCell',
        };
    }

    componentDidMount() {
    }

    render() {
        let icon = this.props.image && <Image style={styles.icon} source={this.props.image}/>
        let {onSelected} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=>{
                        onSelected && onSelected(this.props.title)
                    }}
                    >
                    <View style={[styles.content, this.props.style]}>
                        {icon}
                        <Heading3>{this.props.title}</Heading3>
                        <View style={{flex: 1, backgroundColor: 'blue'}}></View>
                        <Paragraph style={{color: '#999999'}}>{this.props.subtitle}</Paragraph>
                        <Image style={styles.arrow} source={require('../img/public/cell_arrow.png')}/>
                    </View>

                    <Separator/>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    content: {
        height: 44,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingRight: 10,
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    subtitleContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    arrow: {
        width: 14,
        height: 14,
        marginLeft: 5,
    },
});

export default DetailCell;
