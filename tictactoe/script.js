$(document).ready(function() {
    
    var turn = 'x';
    
    //hide the x's and o's
    for (i = 1; i <= 9; i++) {
        $('#' + i + "x").hide();
        $('#' + i + "o").hide();
    }
    
    $('#1').mousedown(function() {
        $('#1').hide();
        $('#1' + turn).show();
        if (turn == 'x') {
            turn = 'o';
        }
        else turn = 'x';
    })
    
    $('#2').mousedown(function() {
        $('#2').hide();
        $('#2' + turn).show();
        if (turn == 'x') {
            turn = 'o';
        }
        else turn = 'x';
    })
    
    $('#3').mousedown(function() {
        $('#3').hide();
        $('#3' + turn).show();
        if (turn == 'x') {
            turn = 'o';
        }
        else turn = 'x';
    })
    
    $('#4').mousedown(function() {
        $('#4').hide();
        $('#4' + turn).show();
        if (turn == 'x') {
            turn = 'o';
        }
        else turn = 'x';
    })
    
    $('#5').mousedown(function() {
        $('#5').hide();
        $('#5' + turn).show();
        if (turn == 'x') {
            turn = 'o';
        }
        else turn = 'x';
    })
    
    $('#6').mousedown(function() {
        $('#6').hide();
        $('#6' + turn).show();
        if (turn == 'x') {
            turn = 'o';
        }
        else turn = 'x';
    })
    
    $('#7').mousedown(function() {
        $('#7').hide();
        $('#7' + turn).show();
        if (turn == 'x') {
            turn = 'o';
        }
        else turn = 'x';
    })
    
    $('#8').mousedown(function() {
        $('#8').hide();
        $('#8' + turn).show();
        if (turn == 'x') {
            turn = 'o';
        }
        else turn = 'x';
    })
    
    $('#9').mousedown(function() {
        $('#9').hide();
        $('#9' + turn).show();
        if (turn == 'x') {
            turn = 'o';
        }
        else turn = 'x';
    })
    
    $('#reset').mousedown(function() {
        turn = 'x';
        for (i = 1; i <= 9; i++) {
            $('#' + i).show();
            $('#' + i + "x").hide();
            $('#' + i + "o").hide();
        }
    })
    
})