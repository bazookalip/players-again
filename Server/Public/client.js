$(document).ready(onReady);


function onReady(){
    console.log('jQuery is ready');
    
    $('#addPlayerButton').on('click', function (){
        let player = $('#playerName').val();
        $('#ulNames').append(`
            <ul id="ulNames"></ul>
                <li>${player}</li>
        `)
        $('#playerName').val('');
    });

}