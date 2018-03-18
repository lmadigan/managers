import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import firebase from 'firebase';
import reducer from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
        apiKey: 'AIzaSyBcjTpVCtVLChjelxq2YOlHF3fBpldPcwE',
        authDomain: 'manager-1801f.firebaseapp.com',
        databaseURL: 'https://manager-1801f.firebaseio.com',
        projectId: 'manager-1801f',
        storageBucket: '',
        messagingSenderId: '1013640025257'
      };
      firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View>
          <LoginForm/>
        </View>
      </Provider>
    );
  }
}

export default App;
