import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (text) => {
  console.log('text', text);
  return {
    type: 'email_changed',
    payload: text
  }
};

export const passwordChanged = (password) => {
  return {
    type: 'password_changed',
    payload: password
  }
};

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch({ type: 'login_user'});

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      dispatch({
        type: 'login_user_success',
        payload: user
      })

      Actions.main();
    })
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => {
          dispatch({
            type: 'login_user_success',
            payload: user
          })

          Actions.main();
        })
        .catch(() => {
          dispatch({
            type: 'login_user_fail'
          })
        });
    });
  };
};
