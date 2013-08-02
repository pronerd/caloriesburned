var value;
var arr= new Array();
var calories;

$(document).on('pagebeforeshow', '#page1', function(){ 
        $(document).on('change', '[name="exercise_type"]', function(){ 
           value = $('input[name=exercise_type]:checked').val();
           // if (val==true) val=1;
            //else val=0;
            var mySelect = $('#intensity');
            if(value=="walking"){
                arr=[1.75,2,2.5,3,4,5];
                mySelect.empty();
           //     alert("Walking selected");
                mySelect.append('<option value="1"> <2 mph, very slow </option>');
                mySelect.append('<option value="2"> 2 mph, slow </option>');
                mySelect.append('<option value="3"> 2.5 mph </option>');
                mySelect.append('<option value="4"> 3 mph, moderate </option>');
                mySelect.append('<option value="5"> 4 mph, very brisky</option>');
                mySelect.append('<option value="6"> 5 mph</option>');
                
          //      $('#intensity').selectmenu('refresh',true);
		
                
            }
            else if(value=='running'){
                mySelect.empty();
             //   alert("Running ...");
                arr = [5,6,7,8,9];
                mySelect.append('<option value="1"> 5 mph (12 min mile) </option>');
                mySelect.append('<option value="2"> 6 mph (10 min mile) </option>');
                mySelect.append('<option value="3"> 7 mph (8.5 min mile) </option>');
                mySelect.append('<option value="4"> 8 mph (7.5 min mile) </option>');
                mySelect.append('<option value="5"> 9-10 mph, (6 min mile)</option>');
              //  mySelect.append('<option value="6"> 5 mph</option>');
            }
            else if(value=='cycling'){
               arr=[0.03025641,0.04551282,0.060641,0.07576923,0.090897];
                mySelect.empty();
              //   alert("Cycling selected");
                
                mySelect.append('<option value="1"> <10 mph, pleasure riding </option>');
                mySelect.append('<option value="2"> 10-12 mph, light </option>');
                mySelect.append('<option value="3"> 12-14 mph, moderate </option>');
                mySelect.append('<option value="4"> 14-16 mph, vigorous</option>');
                mySelect.append('<option value="5"> 16-19 mph, racing</option>');
               // mySelect.append('<option value="6"> 5 mph</option>');
            }
          /*  else if(value=='swimming'){
                mySelect.empty();
                alert("swimming selected");
                
                mySelect.append('<option value="1"> laps,freestyle,fast </option>');
                mySelect.append('<option value="2"> laps,freestyle,slow </option>');
                mySelect.append('<option value="3"> leisurely, not laps </option>');
                mySelect.append('<option value="4"> sidestroke</option>');
                mySelect.append('<option value="5"> breaststroke</option>');
                mySelect.append('<option value="6"> backstroke</option>');
            } */
            else
                alert("Code error");
            
           // $("#intensity").val($("#intensity option:first").val());
               // $("#exercise_type")[0].selectedIndex = 0;
		//$('#exercise_type').find('option:first').attr('selected','selected');
		//  $('select').val('');
                     $("#intensity")[0].selectedIndex = 10; 
		     //$("select option[value='1']").attr("selected","selected");
           
        });
    });

    /* $("#submit").on('click',  function(){
         alert("Yeah, Submit button is working.");
     }); */

$(document).ready(function(){
   
$('form').submit(function(){
    var weight = document.form.weight.value;
    var duration = document.form.duration.value;
    var option = document.form.intensity.value;
     //  alert("priliminary check");
    
    //        alert(weight);
    //alert(duration);
  //  alert(option);
   // var calories = 0;
    
    if(value=='running'){
        
         calories = weight*0.63*arr[option-1];
        //alert("You've burned "+Math.round(calories)+ " calories" );
    }
    
    else if(value=='walking'){
        var KPH = arr[option-1]*1.60934;
        var WKG = weight/2.20462;
        var T = duration/60;
      //  alert(mph); //works till here
         calories = [0.0215 * KPH*KPH*KPH - 0.1765 * KPH*KPH + 0.8710 * KPH + 1.4577] * WKG * T;
        
       // alert(calories);
        
        //alert("You've burned "+Math.round(calories)+ " calories" );
    }
    
    else if(value=='cycling'){
         calories = arr[option-1]*weight*duration;
        // alert("You've burned "+Math.round(calories)+ " calories" );
    }
   // alert(option); //comment
    //var success=true;
    if(isNaN(calories)){
      alert("Please select the intensity from dropdown menu! try again!");
     // success=false;
    }
    else 
      alert("You've burned "+Math.round(calories)+ " calories" );
   // $("form")[0].reset();
   
    window.location.reload(function(){
    
     document.form.weight=0;
     document.form.duration=0;
    });
   });
});