$(document).ready(function(){
    $('#genUsers').on('click', function(){
        getUsers();
    });

    $('#users').on('click', '.delete', function(){
       console.log($(this).data('id'))
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