// "use strict";
var React = require('react-native');
var SecondPageComponent = require("./SecondComponent");
import TabBarExample from './TabBarExample.js'
var {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
  TouchableOpacity,
} = React;
var styles = StyleSheet.create({
  button: {
    marginTop:20,
    backgroundColor: '#eeeeee',
    padding: 10,
    borderRadius: 5,
  },
  buttonred: {
    color: '#00f',
    padding: 10,
    marginTop:20,
  }
});
var HomeComponent = React.createClass({
    _goForward: function () {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: SecondPageComponent,
            });
        }
    },
    _goForwardTabBar: function  () {
        const {navigator} = this.props;
        if (navigator) {
          navigator.push({
            name: 'TabBarExample',
            component: TabBarExample,
          });
        }
    },
    render: function () {
        return (
            <View style={styles.button}>
                <Text>Page One Component</Text>
                <TouchableOpacity onPress={this._goForward}>
                    <Text style={styles.buttonred}>点我跳到Second Component</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this._goForwardTabBar}>
                    <Text style={styles.buttonred}>TabBarExample Component</Text>
                </TouchableOpacity>
            </View>
        );
    }
});
module.exports = HomeComponent;
