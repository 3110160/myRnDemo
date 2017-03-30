import React,{ Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ListView,
    Navigator,
    ActivityIndicator
} from 'react-native'
import {PullList} from 'react-native-pull';
import Icon  from 'react-native-vector-icons/SimpleLineIcons';
import http from '../common/httpBase'

import Header from '../common/header'
import ListRow from '../common/listCell'
import NoDataView from '../common/noData'
import HotPage from './hotPage'
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            dataSource:new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2}),
            loading:true
        };
        this.fetchData = this.fetchData.bind(this);
    }

    _renderLeft(){
        return(
            <TouchableOpacity
                onPress={()=>{this._goHotPage()}}
            >
                <Icon style={{marginLeft:20}} name='fire' size={20} color="red"/>
            </TouchableOpacity>
        )
    }

    _renderCenter(){
        return(
            <Text>首页</Text>
        )
    }

    _renderRight(){
        return(
            <TouchableOpacity>
                <Icon style={{marginRight:20}} name='magnifier' size={20} color="#ccc"/>
            </TouchableOpacity>
        )
    }

    _renderRow(rowData,sectionID, rowID, highlightRow){
        return(
            <ListRow
                img={ rowData.image }
                text = { rowData.title }
            />
        )
    }


    _renderFooter(){
        return(
            <View>
                 <ActivityIndicator/>
            </View>
        )
    }

    _goHotPage() {
        this.props.navigator.push({
            name:'HotPage',
            component:HotPage,
            //animationType:Navigator.SceneConfigs.FloatFromBottom
        })
    }

    fetchData(resolve){
        http.get('http://guangdiu.com/api/gethots.php')
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.data),
                    loading:false
                });
                if (resolve !== undefined){
                     setTimeout(() => {
                            resolve();  // 关闭动画
                     }, 1000);
                 }
            })
            .catch((error) => {

            })
    }

    _renderList(){
        if(this.state.loading){
            return (
                <NoDataView />
            )
        }else {
             return (
                <PullList
                    onPullRelease={(resolve)=>{this.fetchData(resolve)}}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    showsHorizontalScrollIndicator={false}
                    style={styles.listView}
                    renderFooter={this._renderFooter}
                />
            )
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    render(){
        return(
            <View style={styles.container}>
                <Header
                    leftItem = {()=>this._renderLeft()}
                    centerItem = {()=>this._renderCenter()}
                    rightItem = {()=>this._renderRight()}
                />
                {this._renderList()}
            </View>
        )
    }


}
const styles = StyleSheet.create({
   container:{
       flex: 1,
       flexDirection: 'column',
       backgroundColor: '#fff',
   },

    listView:{
       marginLeft:15,
       marginRight:15
    },

    loading:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
    }
});