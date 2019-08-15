import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB1O-t3LGG_Fv-j5vKVawqH2muZfYCyd-4",
    authDomain: "tomashanzlik-5b3ed.firebaseapp.com",
    databaseURL: "https://tomashanzlik-5b3ed.firebaseio.com",
    projectId: "tomashanzlik-5b3ed",
    storageBucket: "",
    messagingSenderId: "847842653764",
    appId: "1:847842653764:web:300f1bacb37ea240"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error);
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GithubAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;