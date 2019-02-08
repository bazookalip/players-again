$(document).ready(onReady);


function onReady(){
    console.log('jQuery is ready');


    $.ajax({
        url: '/players',
        method: 'GET'
    }).then(function(response) {
        console.log(response);
        $('#ulNames').empty();
        for (let i = 0; i < response.length; i++) {
            let players = response[i];
            $('#ulNames').append(`
            
            <li>${players.name}</li>      
            `); 
        }
           
    })
    
    $('#addPlayerButton').on('click', addClick);
}


function addClick(){
    $.ajax({
        url: '/new',
        method: 'POST',
        data: {
            name: $('#playerName').val()
        }
    }).then(function(){
        $.ajax({
            url: '/players',
            method: 'GET'
        }).then(function (response) {
            console.log(response);
            $('#ulNames').empty();

            response.forEach((players) => {
                $('#ulNames').append(`
             <li>${players.name}</li>  
        `)
            });
        })
    })
}