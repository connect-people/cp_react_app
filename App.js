import 'react-native-gesture-handler';
import React, {Component} from 'react';
import StackManager from './src/navigators/StackManager'
import store from './src/redux/store'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <StackManager/>
      </Provider>  
    )
  }
}


export default App;
