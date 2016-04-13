var React = require('react-native');

var {
    View,
    Picker,
    TouchableHighlight,
    StyleSheet,
    Text
} = React;
var styles = StyleSheet.create({
    buttonred: {
        color: '#00f',
        padding: 10,
        marginTop:20,
    }
});
class PickerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'java',
            services: ['a', 'b', 'c', 'd', 'e'],
        };
    }
    goBack() {
        this.props.navigator.pop();
    }
    render() {
        return (
            <View>
                <TouchableHighlight
                  onPress={this.goBack.bind(this)}
                  >
                    <Text style={styles.buttonred}>返回</Text>
                </TouchableHighlight>
                <Picker
                  selectedValue={this.state.language}
                  onValueChange={(lang) => this.setState({language: lang})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
        );
    }
}
module.exports = PickerComponent;
