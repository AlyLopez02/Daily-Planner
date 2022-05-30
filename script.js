// Global Variable(s)
var timeBlocks = [
    document.getElementById("9"),
    document.getElementById("10"),
    document.getElementById("11"),
    document.getElementById("12"),
    document.getElementById("13"),
    document.getElementById("14"),
    document.getElementById("15"),
    document.getElementById("16"),
    document.getElementById("17")
];


// Initialization of the website when it is first opened so that the hours pop up
function init() {

    // displays current day
    var todaysDate = moment().format("MMMM Do, YYYY");
    $("#currentDay").text("Today is " + todaysDate);


    // calls the timeColor function when the page is first loaded
    timeColor();


    // recalls the timeColor function every certain amount of seconds
    var timeInterval = setInterval(timeColor, 300000);


    // load and displays local storage
    // loads textarea 9
    var text9 = document.getElementById("text9")
        text9.value = localStorage.getItem("9");

    // loads textarea 10
    var text10 = document.getElementById("text10")
        text10.value = localStorage.getItem("10");

    // loads textarea 11
    var text11 = document.getElementById("text11")
        text11.value = localStorage.getItem("11");
        
    // loads textarea 12
    var text12 = document.getElementById("text12")
        text12.value = localStorage.getItem("12");
        
    // loads textarea 13
    var text13 = document.getElementById("text13")
        text13.value = localStorage.getItem("13");
        
    // loads textarea 14
    var text14 = document.getElementById("text14")
        text14.value = localStorage.getItem("14");
        
    // loads textarea 15
    var text15 = document.getElementById("text15")
        text15.value = localStorage.getItem("15");
        
    // loads textarea 16
    var text16 = document.getElementById("text16")
        text16.value = localStorage.getItem("16");
    
    // loads textarea 17
    var text17 = document.getElementById("text17")
        text17.value = localStorage.getItem("17");
}


// Saves user input from textarea to local storage with the id of its parent
function saveButton() {
    var parentId = $(this).parent().attr("id");
    console.log(parentId);

    var userInput = $(this).siblings().eq(1).val();
    console.log(userInput);

    localStorage.setItem(parentId, userInput);

    console.log("this:", this);
}


// Changes time block background color based on whether or not it is in the past, present, or future
function timeColor() {
    var currentHour = parseInt(moment().format("H"));
    console.log(currentHour);

    for (var i = 0; i < timeBlocks.length; i++) {

        var timeBlockId = [parseInt($(timeBlocks[i]).attr("id"))];


        console.log(timeBlockId);

        if (timeBlockId == currentHour) {
            $(timeBlocks[i]).removeClass("future past").addClass("present");
        } else if (timeBlockId < currentHour) {
            $(timeBlocks[i]).removeClass("present future").addClass("past");
        } else {
            $(timeBlocks[i]).removeClass("past present").addClass("future");
        }
    };
}

// Calls the function to initialize the website
init();

// Calls the saveButton function when a save button is clicked on
$(".saveBtn").click(saveButton);