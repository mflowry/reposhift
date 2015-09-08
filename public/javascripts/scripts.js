var source;

function getUsers(){
    $('#getusers').on('click', function(){
        $.ajax({
            type: "GET",
            datatype: "json",
            url: "/users"
        }).done(function(data){
            console.log(data);
            displayUsers(data);

        })
    });
}

function displayUsers(users){
    var template = Handlebars.compile(source);
    $('#users').append(template(users,{"users":users}));
}

$('#users').on('click', '.delete', function(){
    var id={
        id: $(this).attr("id")
    };
    console.log(id);

    var $deleteButton = $(this);

    $.ajax({
        type: "DELETE",
        datatype: "json",
        url: "/users",
        data: id
    }).done(function(data){
        displayUsers(data);

    }).success(function(data){
        $deleteButton.parent().remove();
    })
});

$(document).ready(function(){

    source = $('#userTemplate').html();
    getUsers();




});
