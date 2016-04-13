/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

var HomeComponent = require("./app/ios/views/HomeComponent");
import React, {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  AlertIOS,
  StatusBarIOS,
  TouchableHighlight,
  Navigator,
} from 'react-native';

class myjoking extends React.Component {
  render() {

    var defaultName = 'HomeComponent';
    var defaultComponent = HomeComponent;
    return (
      <Navigator
            initialRoute={{name: defaultName, component: defaultComponent}}
            configureScene={(route) => {
              return Navigator.SceneConfigs.VerticalDownSwipeJump;
            }}
            renderScene={(route, navigator) => {
              let Component = route.component;
              return <Component {...route.params} navigator={navigator} />
            }}/>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    marginBottom: 15,
    marginTop:25,
  },
  button: {
    backgroundColor: '#eeeeee',
    padding: 10,
    borderRadius: 5,
  },
});

AppRegistry.registerComponent('myjoking', () => myjoking);
