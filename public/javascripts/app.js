$(document).ready(function(){
    $('#genUsers').on('click', function(){
        generateUsers();
    });

    $('#users').on('click', '.delete', function(){
       var id = $(this).data('id');
        $(this).parent().remove();
        $.ajax({
            type: 'DELETE',
            url: '/users/' + id,
        }).done...g(function(response, textStatus, jqXHR){
            console.log('Deleted user!');
        }).fail(function( jqXHR, textStatus, errorThrown ) {
            console.log(jqXHR, textStatus, errorThrown);
        }).always(function(){
            console.log('Ajax complete');
        });
    });

});

function generateUsers(){
    $.ajax({
        type: 'GET',
        url: '/users/generate'
    }).done(function(response, textStatus, jqXHR){
        console.log('Generated 20 users!');
        getUsers();
    }).fail(function( jqXHR, textStatus, errorThrown ) {
        console.log(jqXHR, textStatus, errorThrown);
    }).always(function(){
        console.log('Ajax complete');
    });
};

function getUsers(){
    $.ajax({
        type: 'GET',
        url: '/users/update'
    }).always(function () {
        console.log('Ajax attempt complete.');
    }).done(function (data, textStatus, jqXHR) {
        $('#users').empty();
        var source = $('#handlebars').html();
        var template = Handlebars.compile(source);
        $('#users').append(template(data));
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log('Ajax failed: ', textStatus);
    });
}