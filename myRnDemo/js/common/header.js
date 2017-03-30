import React ,{ Component,PropTypes } from 'react'
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native'

// 公用头部组件

const {width,height} = Dimensions.get('window');

export default class Header extends Component{
    static PropTypes = {
        leftItem : PropTypes.func,
        centerItem : PropTypes.func,
        rightItem : PropTypes.func
    };

    _renderLeftItem(){
        if(this.props.leftItem === undefined) return;
        return this.props.leftItem();
    }

    _renderCenterItem(){
        if(this.props.centerItem === undefined) return;
        return this.props.centerItem();
    }

    _renderRightItem(){
        if(this.props.rightItem === undefined) return;
        return this.props.rightItem();
    }

    render(){
      return(
          <View style={styles.container}>
              <View>
                  {this._renderLeftItem()}
              </View>
              <View>
                  {this._renderCenterItem()}
              </View>
              <View>
                  {this._renderRightItem()}
              </View>
          </View>
      )
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:width,
        height:64,
        backgroundColor:'#fff',
        paddingTop:0
    },

});