var React = require('react-native');
var PickerComponent = require('./PickerComponent')
var {
    View,
    Text,
    ActivityIndicatorIOS,
    TouchableHighlight,
    StyleSheet,
    DatePickerIOS,
    AlertIOS,
    ListView
} = React;
var styles = StyleSheet.create({
    indicator: {
        marginTop:20,
        marginLeft:120
    },
    buttonred: {
        color: '#00f',
        padding: 10,
        marginTop:20,
    },
    list: {
        height: 300,
        backgroundColor:'#0025FF'
    },
    item: {
        padding: 10,
        color: '#821B30',
        marginTop:10,
        backgroundColor:'#0F5'
    }
});


class DemoActivityIndicator extends React.Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        var dataList = [1,2,3,4,5,6,7,8,9,10,11,12].map(function  (value,index) {
            return 'list-' + value;
        });
        this.state = {
            loading:true,
            date: new Date(),
            dataSource: ds.cloneWithRows(dataList),
        }
    }
    componentDidMount() {
        setTimeout(function () {
            this.setState({
                loading:false
            });
        }.bind(this),4000)
    }
    goBack() {
        this.props.navigator.pop();
    }
    goPicker() {
        this.props.navigator.push({
            name: 'route-picer',
            component: PickerComponent
        })
    }
    onDateChange(date) {
        AlertIOS.alert(
          'select Date',
           date.toString(),
          [
            {text: 'Sure', onPress: () => console.log('Foo Pressed!')},
            {text: 'Cancel', onPress: () => console.log('Bar Pressed!')},
          ]
        )
    }
    render() {
        return (
            <View>
                <TouchableHighlight
                  onPress={this.goBack.bind(this)}
                  >
                    <Text style={styles.buttonred}>返回</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={this.goPicker.bind(this)}
                  >
                    <Text style={styles.buttonred}>picker</Text>
                </TouchableHighlight>
                <View>
                    <ActivityIndicatorIOS
                      style={styles.indicator}
                      animating={this.state.loading}
                      color={'#821B30'}
                      size={'small'} />
                      <ListView
                           style={styles.list}
                          dataSource={this.state.dataSource}
                          renderRow={(rowData) => (<Text style={styles.item}>{rowData}</Text>)}
                        />
                </View>

                <View>
                    <DatePickerIOS
                      date={this.state.date}
                      mode="datetime"
                      onDateChange={this.onDateChange.bind(this)}
                    />
                </View>
                <View>
                    <ActivityIndicatorIOS
                      style={styles.indicator}
                      animating={this.state.loading}
                      color={'#821B30'}
                      size={'small'} />
                      <ListView
                           style={styles.list}
                          dataSource={this.state.dataSource}
                          renderRow={(rowData) => (<Text style={styles.item}>{rowData}</Text>)}
                        />
                </View>
            </View>

            )
    }
}
module.exports = DemoActivityIndicator;
