import firebase from 'firebase';

let userProfile = null;

export const checkUser = () => dispatch => {
  if (!userProfile) {
    dispatch('notAuthenticated');
  }
};

export const authUser = ({email, password}) => async dispatch => {
  if (!email || email.length === 0 || !password || password.length === 0) {
    dispatch('error', 'Email or password is empty');
  } else {
    try {
      userProfile = await firebase.auth().signInWithEmailAndPassword(email, password);
      dispatch('success');
    } catch (error) {
      dispatch('error', error.message);
    }
  }
};

export const createUser = ({email, password}) => async dispatch => {
  if (!email || email.length === 0 || !password || password.length === 0) {
    dispatch('error', 'Email or password is empty');
  } else {
    try {
      userProfile = await firebase.auth().createUserWithEmailAndPassword(email, password);
      dispatch('success');
    } catch (error) {
      dispatch('error', error.message);
    }
  }
};
