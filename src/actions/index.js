import firebase from 'firebase';

export const emailChanged = (text) => {
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

export const loginUser = ({ email, password }) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => console.log(user))

  return {
    type: '',
    payload: password
  }
};
