import React ,{ Component,PropTypes } from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
    Image,
    Text,
    PixelRatio,
    TouchableOpacity
} from 'react-native'

import Icon  from 'react-native-vector-icons/FontAwesome';
// listRow

const {width,height} = Dimensions.get('window');

export default class ListRow extends Component{

    static PropTypes = {
        img:PropTypes.string,
        text:PropTypes.string
    };

    render(){
        return(
        <TouchableOpacity>
            <View style={styles.container}>
                <View>
                    <Image style={styles.imageStyle} source={{uri:this.props.img == null ? 'http://himg.bdimg.com/sys/portrait/item/fad561783634383031353832c01c.jpg' : this.props.img}}/>
                </View>
                <View>
                    <Text style={styles.textStyle} numberOfLines={3} >{this.props.text}</Text>
                </View>
                <View>
                    <Icon style={{marginRight:60}} name='angle-right' size={30} color="gray"/>
                </View>
            </View>
        </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:width,
        height:100,
        backgroundColor:'#fff',
        borderBottomColor:'gray',
        borderBottomWidth:1/PixelRatio.get()
    },

    imageStyle:{
        width:60,
        height:60,
    },

    textStyle:{
        width:width*0.6,
        fontSize:18
    }
});