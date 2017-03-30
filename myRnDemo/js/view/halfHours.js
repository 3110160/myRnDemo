import React,{ Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

export default class HalfHours extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>半小时</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'blue'
    }
});