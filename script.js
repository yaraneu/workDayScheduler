var currentTime = moment().hours();


// display current date

$("#currentDay").text(moment().format('MMMM DD, YYYY'));


function timeColorChange() {
    $(".time-block").each(function() {
        var eachHour = parseInt($(this).attr("id"));
        if(currentTime > eachHour) {
            $(this).addClass("past");
          }
          // if they are equal
          // then remove class "past" and add class "present"
          else if(currentTime === eachHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
          }
          // else
          // remove class "past", remove class "present", add class "future"
          else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
          }
          
        });
      }
    
      timeColorChange();
        // check if we've moved past this time
        // if the current hour is greater than the block hour
        // then add class "past"
        // if(currentHour > blockHour) {
        //   $(this).addClass("past");
