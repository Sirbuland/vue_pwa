import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBuzf5W69VdYGWdt7K-se1mPfBGWIEYXRk',
  authDomain: 'cropchat-b79de.firebaseapp.com',
  databaseURL: 'https://cropchat-b79de.firebaseio.com',
  projectId: 'cropchat-b79de',
  storageBucket: 'cropchat-b79de.appspot.com',
  messagingSenderId: '654148717088',
};
firebase.initializeApp(config);

export default {
  database: firebase.database(),
};
