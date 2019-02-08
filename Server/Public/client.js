$(document).ready(onReady);


function onReady(){
    console.log('jQuery is ready');


    $.ajax({
        url: '/players',
        method: 'GET'
    }).then(function(response) {
        console.log(response);
        $('#ulNames').empty();
        response.forEach((playerObject) => {
            $('#ulNames').append(`
             <li>${playerObject}</li>  
        `)
        });   
    })
    
    $('#addPlayerButton').on('click', addClick);
}


function addClick(){
    // let player = $('#playerName').val();
    $.ajax({
        url: '/new',
        method: 'POST',
        data: {
            player: $('#playerName').val()
        }
    }).then(function(){
        $.ajax({
            url: '/players',
            method: 'GET'
        }).then(function (response) {
            console.log(response);
            response.forEach((playerObject) => {
                $('#ulNames').append(`
             <li>${playerObject}</li>  
        `)
            });
        })
    })
}