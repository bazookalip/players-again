$(document).ready(onReady);


function onReady(){
    getPlayers();
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
       getPlayers();
    })
    $('#playerName').val('');
}

function getPlayers() {
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
}