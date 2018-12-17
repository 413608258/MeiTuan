import React, { Component } from 'react'; 
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import Colors from "../../Colors";
/**
 * @ClassName : HomeScene
 * @Description :
 *
 * @author : Loushuai
 * @since : 2018/12/14 10:05:13
 **/

class HomeScene extends Component {
    /*static navigationOptions = {
        title: "HomeScene...",
    }*/
   /* static navigationOptions = ()=>{
        return {
            headerStyle: {backgroundColor: Colors.primary},
            headerTitle: (
                <TouchableOpacity>
                    <AntDesign
                        name= {'search1'}
                        size= {25}
                        color= {Colors.primary}
                    />
                    <Text>搜索</Text>
                </TouchableOpacity>
            ),
        }
    }*/
    static navigationOptions = ()=>({
        headerStyle: {backgroundColor: Colors.primary},
        headerTitle: (
            <TouchableOpacity>
                <AntDesign
                    name= {'search1'}
                    size= {25}
                    color= {'#FFFFFF'}
                />
                <Text>搜索</Text>
            </TouchableOpacity>
        ),
    })
    constructor(props){
        super(props);
        this.state = {
            title: "HomeScene",
        };
    }
    
    render() {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>HomeScene</Text>
            </View>
        );
    }
	
}

export default HomeScene;