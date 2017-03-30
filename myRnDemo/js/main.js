/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Navigator
} from 'react-native';

//import './common/httpBase'

import Icon  from 'react-native-vector-icons/SimpleLineIcons';

import TabNavigator from 'react-native-tab-navigator'
import Home from './view/home'
import HaiTao from './view/haiTao'
import HalfHours from './view/halfHours'
import http from './common/httpBase'

//将网络请求挂在到全局
global.$get = http.get;
global.$post = http.post;

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab : 'home'
        }
    }

    _renderNavBarItem(selectedTab,title,iconName,renderChild){
        return(
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={title}
                selectedTitleStyle={{color:'green'}}
                renderIcon={() => <Icon name={iconName} color= 'black' size={20} />}
                renderSelectedIcon={() => <Icon name={iconName} color= 'green' size={20} />}
                onPress={() => this.setState({ selectedTab: selectedTab })}>
                { renderChild }
            </TabNavigator.Item>
        )
    }

    _renderChild(selectedTab){
        let renderView;
        switch (selectedTab){
            case 'home':
                renderView = Home;
                break;
            case 'haiTao':
                renderView = HaiTao;
                break;
            case 'halfHours':
                renderView = HalfHours;
                break;
        }
        return (
                <Navigator
                    initialRoute={{name:selectedTab,component:renderView}}
                    configureScene = {(route)=>{
                        if(route.animationType){
                            let conf = route.animationType;
                            conf.gestures = null;
                            return conf;
                        }else return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route,navigator)=>{
                        let Component = route.component;
                        return <Component {...route.params} navigator = { navigator }/>
                        }
                    }
                />
            )
    }

    render() {
        return (
            <TabNavigator>
                { this._renderNavBarItem('home','首页','home',this._renderChild('home')) }
                { this._renderNavBarItem('haiTao','海淘','handbag',this._renderChild('haiTao')) }
                { this._renderNavBarItem('halfHours','半小时热搜','clock',this._renderChild('halfHours')) }
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
    },
});

export default Main;
