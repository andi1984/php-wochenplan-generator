<!DOCTYPE html>
<html class="has-navbar-fixed-top">
<head>
    <title>Wochenplan Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.css">
    <link rel="stylesheet" href="styles/form.css">
<body>
<section class="hero is-warning is-bold">
    <div class="hero-body">
        <div class="container">
            <h1 class="title is-1">
                Wochenplan
            </h1>
            <h2 class="subtitle is-2">
                Generator
            </h2>
        </div>
    </div>
</section>
<form action="generate.php" method="GET">
    <div id="dynamic-form" class="field">
        <nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <!-- navbar items, navbar burger... -->
                <div class="navbar-item">
                    <button class="button" type="button" v-on:click="addArea">Fach hinzufügen</button>
                </div>
            </div>
        </nav>
        <fieldset class="field">
            <legend class="subtitle is-3">Metadaten</legend>

            <label class="label" for="name">Name des Wochenplans</label>
            <div class="control">
                <input id="name" type="text" name="name"/>
            </div>
        </fieldset>
        <my-area v-for="area in areas" :area="area"/>
    </div>
    <button class="button is-large">PDF erzeugen</button>
    <noscript>Bitte JavaScript aktivieren!</noscript>
</form>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="./assets/src/formular.js"></script>
</body>
</html>
