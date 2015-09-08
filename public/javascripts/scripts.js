$(document).ready(function(){
    $('#getusers').on('click', function(){
        $.ajax({
            type: "GET",
            datatype: "JSON",
            url: "/users"
        }).done(function(data){
           console.log(data);
        })
    })




});
