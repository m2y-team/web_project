
var root = 'https://m2y-healthowl.herokuapp.com';
    var posts = null;
    var noPosts = 0;
    var current = 1;




function AppointmentPost(id){
        if(id != null && noPosts>0){

        console.log(id)
        var el = posts[id];
        console.log(el);
        let ctnt =
                "<div class='pannel'>\
                <div class='panel-heading' id='"+el._id+"'>"+el.patientName+" </div>\
                <div class='pannel-body' id='pannel"+el._id+"'>\
                "+"<p>ID: <b>"+el.patientId+"</b></p>\
                <p>Date: <b>"+el.date+"</b></p>\
                <p>Time: <b>"+el.time+"</b></p>\
                <p>Comments: <b>"+el.comments+"</b></p>\
                </div></div>";

            $("#posts").html(ctnt);
            current = el._id;
            //getAuthor(el.id, el.userId);
        }

    }

$( document ).ready(function() {

    function getAllPosts(){

        $.ajax({
        url: root + '/appointments',
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
                "<a href='#'><div class='post'><div class='name'><b>"+" "+el.patientName+"</b> - "+el.patientId+"</div>\
                <div><u>"+el.date+" "+el.time+"</u></div>\
                <div class='comment'>"+el.comments+"</div></div></a>";

                countId ++;
                console.log(countId);
               // "<h2 class=''><a href='#'>"+" "+el.firstName+" "+el.lastName+"</a></h2>";

            });
            console.log(ct);
            $("#list").append(ct);
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
