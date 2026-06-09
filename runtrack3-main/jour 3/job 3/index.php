<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 03 - Taquin La Plateforme_</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5; }
        h1 { margin-bottom: 10px; }
        p { margin-bottom: 20px; color: #666; }
        #taquin {
            display: grid;
            grid-template-columns: repeat(3, 150px);
            gap: 5px;
            margin: 20px 0;
            background: #333;
            padding: 5px;
            width: fit-content;
        }
        .carreau {
            width: 150px;
            height: 150px;
            background: white;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #ddd;
            overflow: hidden;
        }
        .carreau img { width: 100%; height: 100%; object-fit: cover; }
        .carreau.vide { background: #333; cursor: default; }
        #message { font-size: 24px; font-weight: bold; margin: 20px 0; }
        #btn-restart {
            padding: 10px 20px;
            font-size: 16px;
            background: #0984e3;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            display: none;
        }
        #btn-restart:hover { background: #2980b9; }
    </style>
</head>
<body>
    <h1>🧩 Taquin — La Plateforme_</h1>

    <p>Cliquez sur un carreau adjacent à la case vide pour le déplacer.<br>
    Reconstituez l'image pour gagner !</p>

    <div id="taquin"></div>

    <div id="message"></div>

    <button id="btn-restart">🔄 Recommencer</button>

    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="script.js"></script>
</body>
</html>