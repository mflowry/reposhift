var $users = $('#users');

$(document).ready(function(){
    $('#genUsers').on('click', function(){
        generateUsers();
    });

    $users.on('click', '.delete', function(){
        var id = $(this).data('id');
        $(this).parent().remove();
        $.ajax({
            url: '/' + id,
            type: 'DELETE'
        }).done(function(response, textStatus, jqXHR){
            console.log('Deleted user!');
        }).fail(function( jqXHR, textStatus, errorThrown ) {
            console.log(jqXHR, textStatus, errorThrown);
        }).always(function(){
            console.log('Ajax complete');
        });
    });
});


function generateUsers() {
    $.ajax({
        type: 'GET',
        url: '/generate'
    }).always(function () {
        console.log('Users generated and added to database.');
    }).done(function (data, textStatus, jqXHR) {
        getUsers();
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log('Ajax failed: ', textStatus);
    });
}

function getUsers(){
    $.ajax({
        type: 'GET',
        url: '/update'
    }).always(function () {
        console.log('Ajax attempt complete.');
    }).done(function (data, textStatus, jqXHR) {
        console.log("users" + data);
        $users.empty();
        var source = $('#handlebars').html();
        var template = Handlebars.compile(source);
        $users.append(template(data));
    }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log('Ajax failed: ', textStatus);
    });
}