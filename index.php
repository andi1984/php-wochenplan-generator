<!DOCTYPE html>
<html>
    <head>
        <title>Wochenplan Generator</title>
    </head>
    <body>
        <h1>Wochenplan Generator</h1>
        <form action="generate.php" method="GET">
            <fieldset>
                <legend>Metadaten</legend>

                <label for="name">Name des Wochenplans</label>
                <input id="name" type="text" name="name"/>
            </fieldset>
            <div id="dynamic-form">
                <button type="button" v-on:click="addArea">Fach hinzufügen</button>
                <div v-show="areas.length">
                    <my-area v-for="area in areas"/>
                </div>
                <noscript>Bitte JavaScript aktivieren!</noscript>
            </div>
            <button>PDF erzeugen</button>
        </form>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script src="./assets/src/formular.js"></script>
    </body>
</html>
