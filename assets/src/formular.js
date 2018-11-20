Vue.component("MyArea", {
  props: [],
  template: `
        <fieldset>
            <legend>Fach</legend>
            <label>Name</label>
            <input type="text" name="areas[][name]"/>
        </fieldset>
    `
});

var app = new Vue({
  el: "#dynamic-form",
  data: {
    areas: [
      {
        id: 1
      }
    ]
  },
  methods: {
    addArea: function() {
      return this.areas.push({ id: 2 });
    }
    },
  
});
