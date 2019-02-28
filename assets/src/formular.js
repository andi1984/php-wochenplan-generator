Vue.component("Task", {
    props: ["areaId", "taskId"],
    template: `
    <fieldset class="field">
      <legend class="subtitle is-4">Aufgabe</legend>
      <label class="label" for="description">Beschreibung</label>
      <div class="control">
        <textarea class="textarea" type="text" id="description" :name="'areas[' + areaId + '][tasks][' + taskId + '][description]'"></textarea>
      </div>
      <label class="label" for="category">Kategorie</label>
      <div class="control">
          <select class="select" id="category" :name="'areas[' + areaId + '][tasks][' + taskId + '][category]'">
            <option value="mandatory">Pflicht</option>
            <option value="homework">Hausaufgabe</option>
            <option value="additional">Zusatz</option>
          </select>
      </div>
      <label class="label" for="social">Sozialform</label>
      <div class="control">
          <select class="select" id="social" :name="'areas[' + areaId + '][tasks][' + taskId + '][social]'">
            <option value="single">Einzelarbeit</option>
            <option value="partner">Partnerarbeit</option>
            <option value="group">Gruppenarbeit</option>
          </select>
      </div>
      <hr/>
    </fieldset>
  `
});
Vue.component("MyArea", {
    props: ["area"],
    template: `
        <div class="box">
            <fieldset class="field">
                <legend class="subtitle is-3">Fach</legend>
                <div class="control">
                    <select class="select" id="area-type" :name="'areas[' + area.id + '][type]'">
                      <option value="math">Mathe</option>
                      <option value="english">Englisch</option>
                      <option value="geo">Geologie</option>
                    </select>
                </div>
            </fieldset>
            <Task v-for="task in area.tasks" :area-id="area.id" :task-id="task.id"/>
            <div class="control">
                <button class="button" type="button" v-on:click="addTask">Aufgabe hinzufügen</button>
            </div>
        </div>
    `,
    methods: {
        addTask: function () {
            this.area.tasks.push({id: this.area.tasks.length});
        }
    }
});

var app = new Vue({
    el: "#dynamic-form",
    data: {
        areas: [{id: 0, tasks: [{id: 0}]}]
    },
    methods: {
        addArea: function () {
            return this.areas.push({id: this.areas.length, tasks: [{id: 0}]});
        }
    }
});
