import firebase from '../service/firebase';

const storeFile = {
  methods: {
    storeFile(blob) {
      const storageRef = firebase.storage.ref().child(`images/picture-${new Date().getTime()}`).put(blob);
      storageRef.then((snapshot) => {
        // Upload completed successfully, now we can get the download URL
        snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log('File available at', downloadURL);
          this.postCat(downloadURL, 'Hello');
          this.$router.go(-1);
        });
      });
    },
  },
};

export default storeFile;
