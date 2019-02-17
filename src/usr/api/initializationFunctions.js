import firebase from 'firebase';

export const initSignUpForm = () => dispatch => {
  dispatch('titles', {formTitle: 'Create New Account', submitButtonTitle: 'Create'});
  dispatch('goToLabel', 'Back To Login');
};

export const initLoginForm = () => dispatch => {
  dispatch('titles', {formTitle: 'Login', submitButtonTitle: 'Submit'});
  dispatch('goToLabel', 'Create new account');
};

export const initApplication = () => dispatch => {
  // Initialize Firebase
  let config = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SEND_ID"
  };
  firebase.initializeApp(config);
};