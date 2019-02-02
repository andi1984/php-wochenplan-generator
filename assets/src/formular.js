Vue.component("Task", {
  props: ["areaId", "taskId"],
  template: `
    <fieldset>
      <legend>Aufgabe</legend>
      <label for="description">Beschreibung</label>
      <textarea type="text" id="description" :name="'areas[' + areaId + '][tasks][' + taskId + '][description]'"></textarea>
      <label for="category">Kategorie</label>
      <select id="category" :name="'areas[' + areaId + '][tasks][' + taskId + '][category]'">
        <option value="mandatory">Pflicht</option>
        <option value="homework">Hausaufgabe</option>
        <option value="additional">Zusatz</option>
      </select>
      <label for="social">Sozialform</label>
      <select id="social" :name="'areas[' + areaId + '][tasks][' + taskId + '][social]'">
        <option value="single">Einzelarbeit</option>
        <option value="partner">Partnerarbeit</option>
        <option value="group">Gruppenarbeit</option>
      </select>
    </fieldset>
  `
});
Vue.component("MyArea", {
  props: ["area"],
  template: `
        <fieldset>
            <legend>Fach</legend>
            <select id="area-type" :name="'areas[' + area.id + '][type]'">
              <option value="math">Mathe</option>
              <option value="english">Englisch</option>
              <option value="geo">Geologie</option>
            </select>
            <div v-show="area.tasks.length">
              <Task v-for="task in area.tasks" :area-id="area.id" :task-id="task.id"/>
            </div>
            <button type="button" v-on:click="addTask">Aufgabe hinzufügen</button>
        </fieldset>
    `,
  methods: {
    addTask: function() {
      this.area.tasks.push({ id: this.area.tasks.length });
    }
  }
});

var app = new Vue({
  el: "#dynamic-form",
  data: {
    areas: [{ id: 0, tasks: [{ id: 0 }] }]
  },
  methods: {
    addArea: function() {
      return this.areas.push({ id: this.areas.length, tasks: [{ id: 0 }] });
    }
  }
});
