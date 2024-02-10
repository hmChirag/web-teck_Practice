<!DOCTYPE html>
<html>
    <head>
    <title>Chessboard</title>
    <style>
        .chessboard { 
            width: 240px; 
            height: 240px; 
            display: grid;
            grid-template-columns: repeat(8, 30px); 
            grid-template-rows: repeat(8, 30px);
        }


        .cell {
            width: 30px; 
            height: 30px;
            text-align: center; 
            line-height: 30px; 
            font-weight: bold;
        }


        .white {
            background-color: #f0d9b5;
        }


        .black {
            background-color: black;
            color: white;
        }
    </style>
    </head>
    <body>   
        <h2>Chessboard</h2>
        <div class="chessboard">
            <?php
                $isWhite = true;
                for ($row = 1; $row <= 8; $row++){ 
                    for ($col = 1; $col <= 8; $col++){
                        $cellClass = $isWhite ? "white" : "black";
                        echo "<div class='cell $cellClass'>$row, $col</div>";
                        $isWhite = !$isWhite;
                    }
                $isWhite = !$isWhite;
                }
            ?>
        </div>
    </body>
</html>
