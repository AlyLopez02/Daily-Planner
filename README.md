# Daily-Planner
## Description:
The files found with this README file come together to create a daily planner. Some code was given, including the entirety of the CSS file. 

### HTML
In the HTML file, I did multiple things. I:

- Used Bootstrap to create:
    - time blocks (rows) and gave them the appropriate classes and id.
    - a column in each time block for:
        - each hour I wanted represented on the planner and gave them the appropriate classes and text content.
        - a textarea element to enable the user to input what events that want for that hour. I gave the appropriate classes and added an id for each one.
        - a save button and added the appropriate classes for them.
- Used font awesome to input a save icon into the save button.

### CSS
In the CSS file, I did not change anything. Everything in this file was given to me as it is.

## Javascript
In the Javascript file, I did multiple things. I:
- Created an array with the time blocks.
- Created a function that was called on the initialization of the page. This:
    - ensured that saved user inputs would render when the page first displayed. 
    - put the date at the top of the page.
    - called the timeColor function to show which time block was in the past, present, or future.
    - recalls the timeColor function ever certain amount of seconds via a time interval to update whether a time block was in the past, present, or future
- Created a save function to store user input from the textareas to local storage with the id of its parent as the key 
- Created a function to show which time block was in the past, present, and future by comparing their id's to the current hour.
- Called the initialization function.
- Created an event listener to start the save function when clicked.

## Some Problem(s)/Explanation(s)
I feel the need to explain some thing(s) so I have done so below:

- I apologize for submitting this late! I missed a day of class because of my graduation and fell behind on homework because of it. I will do my best to catch back up!

Please do not hesitate to inform or advise me on anything in my code that could be done better. I truly appreciate the help!

## Screenshot:
Here is a screenshot of the deployed application:

![quiz in action](./README-assets/deployed%20application.png "Quiz in Action")

## Link to deployed application:

Here is the link to the deployed application via GitHub:

<a href="https://alylopez02.github.io/Code-Quiz/">https://alylopez02.github.io/Code-Quiz/</a>