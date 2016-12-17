var root = 'https://m2y-healthowl.herokuapp.com';

        function postPatient(){

          console.log("it works here");
          var form = $('#patient-form');
          console.log(form);
          var formData = JSON.stringify($("#patient-form").serializeArray());
          console.log(formData);

          var genderChoice;

          if ($("input[name='gender']:checked").length > 0){
               genderChoice = $('input:radio[name=gender]:checked').val();
           }
           else{
               alert("No button selected, try again!");
               return false;
           };

          var sendInfo = {
           firstName: $('#first-name').val(),
           lastName: $('#last-name').val(),
           gender: genderChoice,
           cellPhoneNumber: $('#phone').val(),
           healthInsuranceNumber: $('#ohip').val(),
           address: $('#address').val(),
           dateOfBirth: $('#dob').val()
       };
       console.log(sendInfo);

            $.ajax({
              type: 'POST',
              url: root + '/patients',
              dataType: "json",
              data: sendInfo,
              success: function (msg) {
               if (msg) {
                   alert("Somebody" + name + " was added in list !");
                   console.log("Somebody was added in list !");
                   //location.reload(true);
               } else {
                   console.log("Cannot add to list !");
               }
           }


         })
        };
