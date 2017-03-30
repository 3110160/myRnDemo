import React,{ Component } from 'react'
import {
    Navigator
} from 'react-native'
/*
* 对Navigator 进行简易封装
* */
class NavigatorCom extends Component{
    render(){
        return(
            <Navigator
                initialRoute = {{ name:this.props.name,component:this.props.component }}
                configureScene = {(route)=>{
                    return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
                }}
                renderScene={(route,navigator)=>{
                    let Component = route.Component;
                    return <Component { ... route.passProps } navigator = { navigator }/>
                }}
            />
        )
    }
}

export default NavigatorCom;