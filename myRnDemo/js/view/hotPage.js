import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    ListView,
    TouchableOpacity,
    Dimensions
} from 'react-native';

import {PullList} from 'react-native-pull';
import ListRow from '../common/listCell'
import Header from '../common/header'

const {width}  = Dimensions.get('window');

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        };
        this.fetchData = this.fetchData.bind(this);
    }

    onPullRelease(resolve) {
        //do something
        setTimeout(() => {
            resolve();
        }, 3000);
    }

    _renderCenter(){
        return(
            <Text style={{marginLeft:50}}>半小时热搜</Text>
        )
    }

    _renderRight(){
        return(
            <TouchableOpacity>
                <Text style={{marginRight:20}}>关闭</Text>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Header
                    centerItem = {()=>this._renderCenter()}
                    rightItem = {()=>this._renderRight()}
                />
                <PullList
                    style={styles.listView}
                    onPullRelease={this.onPullRelease}
                    renderHeader={this.renderHeader}
                    dataSource={this.state.list}
                    renderRow={this.renderRow}
                    onEndReached={this.loadMore}
                    renderFooter={this.renderFooter}
                />
            </View>
        );
    }

    renderHeader() {
        return (
            <View style={{height: 50, backgroundColor: '#eeeeee', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontWeight: 'bold'}}>没5分钟刷新一次</Text>
            </View>
        );
    }


    renderRow(rowData,sectionID, rowID, highlightRow){
        return(
            <ListRow
                img={ rowData.image }
                text = { rowData.title }
            />
        )
    }

    renderFooter() {
        return (
            <View style={{height: 100}}>
                <ActivityIndicator />
            </View>
        );
    }
    fetchData(){
        $get('http://guangdiu.com/api/gethots.php')
            .then((responseData) => {
                this.setState({
                    list: this.state.list.cloneWithRows(responseData.data)
                });
                /*if (resolve !== undefined){
                 setTimeout(() => {
                 resolve();  // 关闭动画
                 }, 1000);
                 }*/
            })
            .catch((error) => {

            })
    }
    loadMore() {

    }
    componentDidMount() {
        this.fetchData();
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems:'center'
    },

    listView:{
        marginLeft:15,
        marginRight:15
    }
});