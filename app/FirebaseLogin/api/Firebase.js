import firebase from "firebase";
import {Alert} from 'react-native';
var config = {
    apiKey: "AIzaSyB2inbzuH_x5xevuC8ZxYWw4vfrmqfgE6M",
    authDomain: "level-field.firebaseapp.com",
    databaseURL: "https://level-field.firebaseio.com",
    projectId: "level-field",
    storageBucket: "level-field.appspot.com",
    messagingSenderId: "806202871591"
  };
  firebase.initializeApp(config);

class Firebase {

  userLogin = (email, password) => {
    return new Promise(resolve => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
          switch (error.code) {
            case 'auth/invalid-email':
              Alert.alert('Invalid email address format.');
              break;
            case 'auth/user-not-found':
            case 'auth/wrong-password':
              Alert.alert('Invalid email address or password');
              break;
            default:
              Alert.alert('Check your internet connection');
          }
          resolve(null);
        }).then(user => {
        if (user) {
          resolve(user);
        }
      });
    })
  };

  createFirebaseAccount = (name, email, password) => {
    return new Promise(resolve => {
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
        switch (error.code) {
          case 'auth/email-already-in-use':
          Alert.alert('This email address is already taken');
            break;
          case 'auth/invalid-email':
          Alert.alert('Invalid e-mail address format');
            break;
          case 'auth/weak-password':
          Alert.alert('Password is too weak');
            break;
          default:
          Alert.alert('Check your internet connection');
        }
        resolve(false);
      }).then(info => {
        if (info) {
          firebase.auth().currentUser.updateProfile({
            displayName: name
          });
          resolve(true);
        }
      });
    });
  };

  sendEmailWithPassword = (email) => {
    return new Promise(resolve => {
      firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
          Alert.alert('Email with new password has been sent');
          resolve(true);
        }).catch(error => {
          switch (error.code) {
            case 'auth/invalid-email':
            Alert.alert('Invalid email address format');
              break;
            case 'auth/user-not-found':
            Alert.alert('User with this email does not exist');
              break;
            default:
            Alert.alert('Check your internet connection');
          }
          resolve(false);
        });
    })
  };

}

export default new Firebase();
