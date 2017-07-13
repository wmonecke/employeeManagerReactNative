import React, { Component } from 'react';
import firebase  from 'firebase';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAB7Ev0ZWUnRlSRsc5qP2VHPh2AKl094IE",
      authDomain: "employeemanager-25c9d.firebaseapp.com",
      databaseURL: "https://employeemanager-25c9d.firebaseio.com",
      projectId: "employeemanager-25c9d",
      storageBucket: "employeemanager-25c9d.appspot.com",
      messagingSenderId: "1047566150965"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm></LoginForm>
      </Provider>
    );
  }
}

export default App;
