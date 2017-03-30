import React,{ Component,PropTypes} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

class NoData extends Component{

    static PropTypes = {
        text:PropTypes.string
    };

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}>加载中...</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container:{
       justifyContent:'center',
       alignItems:'center',
   },

    textStyle:{
       fontSize:20,
        color:'#0F0708'
    }
});

export default NoData;