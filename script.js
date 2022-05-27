var todaysDate = moment().format("MMMM Do, YYYY");
$("#currentDay").text("Today is " + todaysDate);

// function setColor {
//     if (){
        
//     }
//     moment().format("H");
// }


function saveButton() {
    var parentId = $(this).parent().attr("id");
    var userInput = $(this).siblings("textarea").value;
    console.log(userInput);

}

$(".saveBtn").click(saveButton);