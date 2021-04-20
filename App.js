import 'react-native-gesture-handler';
import React, {Component} from 'react';
import StackManager from './src/navigators/StackManager'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './src/redux/reducers';
import sagas from './src/redux/reducers/sagas'; 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* Saga Middleware */
const sagaMiddleware = createSagaMiddleware();

// 스토어 생성
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

/* run saga watchers */
sagaMiddleware.run(sagas);



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
