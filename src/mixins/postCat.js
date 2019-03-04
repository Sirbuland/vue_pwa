const postCat = {
  methods: {
    postCat(catUrl, title) {
      const postUrl = this.catUrl || catUrl;
      const postTitle = this.title || title;
      this.$root.$firebaseRefs.cat.push({
        url: postUrl,
        comment: postTitle,
        info: 'Posted by Charles on Tuesday',
        created_at: -1 * new Date().getTime(),
      }).then(
        this.$router.go(-1),
      );
    },
  },
};

export default postCat;
