$(document).ready(function(){

  $('.send').click(function(e){
    var name = $('#user').val();
    var year = $('#inputyear').find(":selected").text();
    var country = $('#inputcountry').find(":selected").text();
    var stadium = $('#inputstadium').find(":selected").text();
    var experience = $('#experience').val();
    $.ajax({
         data: {
           "name": name,
           "year": year,
           "country": country,
           "stadium": stadium,
           "experience": experience,
           "functionname": "push"
       },
         type: "POST",
         url: "./control.php",
         success: function(data){
              console.log('data inserted');
         },
         error:function(error){
          console.log(error);
        }
       });
        e.preventDefault();
  });

  $('.view').click(function(e){
    console.log('he');
    var name = $(this).closest(".btn-warning").attr("id");
    $.ajax({
         data: {
           "functionname": "fetch",
           "name" : name
       },
         type: "POST",
         url: "./control.php",
         success: function(data){
              console.log(data);
         },
         error:function(error){
          console.log(error);
        }
       });
        e.preventDefault();
  });

});
