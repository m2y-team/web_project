/*var id = 1;

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
*/

//var root = 'https://jsonplaceholder.typicode.com';
var root = 'https://m2y-healthowl.herokuapp.com';
    var posts = null;
    var noPosts = 0;
    var current = 1;




function printPost(id){
        if(id != null && noPosts>0){

          console.log(id)
        var el = posts[id];
        console.log(el);
        let ctnt =
                "<div class='pannel'>\
                <div class='panel-heading' id='"+el._id+"'>"+el.firstName+" "+el.lastName+"</div>\
                <div class='pannel-body' id='pannel"+el._id+"'>\
                "+"<p>DOB: <b>"+el.dateOfBirth+"</b></p>\
                <p>Gender: <b>"+el.gender+"</b></p>\
                <p>Insurance: <b>"+el.healthInsuranceNumber+"</b></p>\
                <p>Cellphone: <b>"+el.cellPhoneNumber+"</b></p>\
                <p>Address: <b>"+el.address+"</b></p>\
                </div></div>";

            $("#posts").html(ctnt);
            current = el._id;
            //getAuthor(el.id, el.userId);
        }

    }
function getAuthor(post, id){
        $.ajax({
            url: root + '/users/'+id,
            method: 'GET'
            }).then(function(data) {
                console.log(data);
                var auth = "<div>"+data.name+"<br><a href='mailto:"+data.email+"'>"+data.email+"</div>";
                $("#pannel"+post).append(auth);
        });
    }


$( document ).ready(function() {

    function getAllPosts(){

        $.ajax({
        url: root + '/patients',
        method: 'GET'
        }).then(function(data) {
            posts = data;
            console.log(posts.length)
            noPosts = posts.length;
            var ct = "";
            console.log(posts);
            console.log(posts[1]);
            var countId = 0;
            data.forEach(function(el) {
              console.log(el._id);

                ct +=
                "<a href='#"+el._id+"'><div class='post' onClick='printPost("+countId+")'>"+" "+el.firstName+" "+el.lastName+"</div></a>";
                countId ++;
                console.log(countId);
                //"<h2 class=''><a href='#'>"+" "+el.firstName+" "+el.lastName+"</a></h2>";

            });
            console.log(ct);
            $("#list").append(ct);
            console.log(posts[0]._id)
            printPost(0);
            current=1;
        });
    };

    getAllPosts();

});
/*$("#btnNext").click(function(){
        if(noPosts>0 && current<noPosts){
            current++;
            printPost(current-1);
        }
    });
*/
/*
$("#btnPrev").click(function(){

        if(noPosts>0 && current>0){
            current--;
            printPost(current-1);
        }
    });*/
