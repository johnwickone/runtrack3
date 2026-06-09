<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Job 02</title>
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<style>
#container, #result {
    display:flex;
}
img { width:100px; cursor:pointer; }
#message { font-weight:bold; }
</style>
</head>
<body>

<button id="shuffle">Mélanger</button>

<div id="container">
    <img src="imagesj/arc1.png" data-order="1">
    <img src="imagesj/arc2.png" data-order="2">
    <img src="imagesj/arc3.png" data-order="3">
    <img src="imagesj/arc4.png" data-order="4">
    <img src="imagesj/arc5.png" data-order="5">
    <img src="imagesj/arc6.png" data-order="6">
</div>

<div id="result"></div>

<p id="message"></p>

<script src="script.js"></script>
</body>
</html>
