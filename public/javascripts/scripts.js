$(document).ready(function(){
    $('#genUsers').on('click', function(){
        getUsers();
    });

    $('#users').on('click', '.delete', function(){
        var id = $(this).data('id');
        $(this).parent().remove();
        $.ajax({
            url: '/' + id,
            type: 'DELETE',
        }).done(function(response, textStatus, jqXHR){
            console.log('Deleted user!');
        }).fail(function( jqXHR, textStatus, errorThrown ) {
            console.log(jqXHR, textStatus, errorThrown);
        }).always(function(){
            console.log('Ajax complete');
        });
    });
});


function getUsers() {
    $.ajax({
        type: 'GET',
        url: '/generate'
    }).always(function () {
        console.log('Ajax attempt complete.');
    }).done(function (data, textStatus, jqXHR) {
        console.log(data);
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log('Ajax failed: ', textStatus);
    });
}