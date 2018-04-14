$(document).ready(function(){

  $('.send').click(function(e){
    var name = $('#user').val();
    var year = $('#inputyear').find(":selected").text();
    var country = $('#inputcountry').find(":selected").text();
    if(country=='Choose'){
      country = '';
    }
    var stadium = $('#inputstadium').find(":selected").text();
    if(stadium=='Choose'){
      stadium = '';
    }
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
            //  console.log('data inserted');
            alert('Experience added!!');
         },
         error:function(error){
          console.log(error);
        }
       });
        e.preventDefault();
  });
});
