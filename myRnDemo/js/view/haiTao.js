import React,{ Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

export default class HaiTao extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>海淘</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'green'
    }
});