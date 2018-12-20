import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, InteractionManager, WebView} from 'react-native';

/**
 * @ClassName : WebScene
 * @Description : TODO
 *
 * @author : Loushuai
 * @since : 2018-12-20
 **/

class WebScene extends Component {
    static navigationOptions = ({navigation}: any)=>({
        headerStyle: {backgroundColor: 'white'},
        title: navigation.state.params.title,
    })

    constructor(props) {
        super(props);
        this.state = {
            title: 'WebScene...',
            source: {},
        };
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(()=>{
            this.props.navigation.setParams({title: '加载中'});
            this.setState({
                source: {uri: this.props.navigation.state.params.url},
            });
        });
    }

    onLoadEnd = (e: any)=>{
        if (e.nativeEvent.title.length > 0){
            this.props.navigation.setParams({title: e.nativeEvent.title});
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <WebView
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={this.state.source}
                    onLoadEnd={(e)=> this.onLoadEnd(e)}
                    scalesPageToFit
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C3E50',
    },
    webView: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default WebScene;
