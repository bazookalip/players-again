$(document).ready(onReady);


function onReady(){
    console.log('jQuery is ready');
    
    $('#addPlayerButton').on('click', function (){
        let player = $('#playerName').val();
        $('#ulNames').append(`
            <li>${player}</li>
        `)
        $('#playerName').val('');
    });

}