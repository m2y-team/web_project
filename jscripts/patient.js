var id = 1;

for (i=1; i<=1; i++){
    var item="#item"+i.toString();
    jqload(i, item);
    console.log(item)

}

function jqload(id, item){
            var request = $.ajax(
            "https://m2y-healthowl.herokuapp.com/patients/"+"582b82f2b99b5400044c62db",
            {
                method: "GET",
                dataType: "json",
                crossDomain:"true"
            });

            var data = $.ajax(
            "https://m2y-healthowl.herokuapp.com/patients",

            {
                method: "GET",
                dataType: "json",
                crossDomain:"true"
            });

            request.done(function( msg ) {
                var obj = msg[0];
                console.log(obj);
                $("#item1").text( obj.firstName );
                //$("#body").html(msg.body);
                //jqloadAuthor(msg.userId);
                //jqloadPhoto(id);
            });

            request.fail(function( jqXHR, textStatus ) {
                alert( "Request failed: " + textStatus );
                $("#status").addClass("error");
                $("#status").html("ERROR");
            });

        }


function jqloadAuthor(id){
            var request = $.ajax(
            "https://m2y-healthowl.herokuapp.com/patients/"+"582b82f2b99b5400044c62db",
            {
                method: "GET",
                dataType: "json",
                crossDomain:"true"
            });

            request.done(function( msg ) {
              console.log(msg[0]);
              var obj = msg[0];
              console.log(obj.firstName);
              //console.log(obj.firstName);
                $("#idid" ).text( msg.id );
                $("#title" ).text( msg.title );
                $("#descrip" ).text( obj.firstName );

            });

        }

$("#checkIds").on('click', function() {
    console.log('this is working!!!');
    var bla = $('#idSearch').val();
    console.log(bla);
    jqload(bla);
});
