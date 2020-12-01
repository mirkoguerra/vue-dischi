const app = new Vue ({
  el: '.vue-coll',
  data: {
    cdArray: "",
    genere: "",
    filteredCdArray: ''
  },
  mounted: function() {
      axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then( (result) => this.cdArray = result.data.response)
  },
  methods: {
    filter: function() {
      this.filteredCdArray = this.cdArray.filter(cd => cd.genre == this.genere)
    }
  }
});
