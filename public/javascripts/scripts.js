$(document).ready(function(){
    $('#getusers').on('click', function(){
        $.ajax({
            type: "GET",
            datatype: "JSON",
            url: "/users"
        }).done(function(data){
           //console.log(data);
        })
    })

    $('body').on('click', '.delete', function(){
        console.log("entered", $(this).attr('id'));
        $.ajax({
            type: 'DELETE',
            url: '/users/'+ $(this).attr('id'),
        }).done(function(res, err){

            if(err){
                    throw err;
                }else{
                    res.status(200);

                }
            $(this).parent().remove();

        }).fail(function(err){

            console.log(err);

        }).always(function(){

            console.log("success!");

        })
    });



});
