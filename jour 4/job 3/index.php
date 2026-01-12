<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Job 03</title>
</head>
<body>

<form>
    <input type="text" id="id" placeholder="ID">
    <input type="text" id="nom" placeholder="Nom">

    <select id="type">
        <option value="">-- Type --</option>
        <option value="Fire">Fire</option>
        <option value="Water">Water</option>
        <option value="Grass">Grass</option>
    </select>

    <input type="button" id="filter" value="Filtrer">
</form>

<div id="result"></div>

<script src="script.js"></script>
</body>
</html>
