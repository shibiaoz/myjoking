// "use strict";
var React = require('react-native');
var DemoActivityIndicator = require("./demoActivityIndicator");
var {
    View,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    StyleSheet,
} = React;
var styles = StyleSheet.create({
  buttonred: {
    color: '#00f',
    padding: 10,
    marginTop:20,
  }
});
class SecondComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    _goBack() {
        const {navigator} = this.props;
        console.log('-----');
        if (navigator) {
            navigator.pop();
        }
    }
    goDemo(type) {
        const {navigator} = this.props;
        let targetType = type;
        switch(type) {
            case 'activity_indicator_ios':
                navigator.push({
                    name: 'activity_indicator_ios',
                    component: DemoActivityIndicator
                });
                break;

            default:
                break;
        }
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this._goBack.bind(this)}>
                    <Text style={styles.buttonred}>点我跳回去</Text>
                </TouchableOpacity>
                <Text>Page Two Component4444</Text>
                <TouchableOpacity onPress={this.goDemo.bind(this, 'activity_indicator_ios')}>
                    <Text style={styles.buttonred}>ActivityIndicatorIOS</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
module.exports = SecondComponent;
