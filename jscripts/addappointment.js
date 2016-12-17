/*var root = 'https://m2y-healthowl.herokuapp.com';

        function postAppointment(){

          console.log("it works here");
          var form = $('#appointment-form');
          console.log(form);
          var formData = JSON.stringify($("#appointment-form").serializeArray());
          console.log(formData);

          var sendInfo = {
           patientName: $('#patient-name').val(),
           patientId: $('#patient-id').val(),
           date: $('#date').val(),
           time: $('#time').val(),
           comments: $('#comments').val()
       };
       console.log(sendInfo);
            $.ajax({
              type: 'POST',
              url: root + '/appointments',
              dataType: "json",
              data: sendInfo,
              success: function (msg) {
               if (msg) {
                   alert("The appointment on " + date + " at "+ time + " was added!");
                   console.log("An appointment was added in list !");

               } else {
                   console.log("Cannot add the appointment to the list !");
               }
             }


         })
        };
*/
var root = 'https://m2y-healthowl.herokuapp.com';

        function postAppointment(){

          console.log("it works here");
          var form = $('#appointment-form');
          console.log(form);
          var formData = JSON.stringify($("#appointment-form").serializeArray());
          console.log(formData);

          var sendInfo = {
           patientName: $('#patient-name').val(),
           patientId: $('#patient-Id').val(),
           date: $('#date').val(),
           time: $('#time').val(),
           comments: $('#comments').val()


       };
       console.log(sendInfo);

            $.ajax({
              type: 'POST',
              url: root + '/appointments',
              dataType: "json",
              data: sendInfo,
              success: function (msg) {
               if (msg) {
                   alert("Success!");
                   console.log("Somebody was added in list !");
                   //location.reload(true);
               } else {
                   console.log("Cannot add to list !");
               }
           }


         })
        };
