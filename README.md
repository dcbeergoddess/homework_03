# Homework_03 JavaScript Password Generator
  Homework Due Monday April 6th 12am

## Pseudo Code from Homework README Acceptance Criteria

  ```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
------Maybe and object within an object??? below
THEN I am presented with a series of prompts for password criteria
    Make confirm statements to ask what user wants
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters


    code a prompt that asks the user for how many characters in the passwords must be between 8 and 128
    store response in variable


WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters


      do a confirm for lowercase
      confirm for uppercase
      confirm for numeric
      confirm for special characters
      do a varaible for each, conditional statements



WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria


    before you start generating passwords, need to create arrays for lowercase letters, uppercase, numbers, special characters, do this at the very beginning 

    create and empty an array that will hold characters allowed in the solution. building final array that includes the options. 

    If user choose lowercase
      add all lowercase options to that array
    If user choose uppercase
      add all uppercase options ot that array
  
    We end up with ONE BIG ARRAY that holds all possible characters in the solution. 

    If they choose 100 as the lengeth. you have to grab 100 times...
    Create an empty string for the final password
    loop from 1 to the number of characters in the password // ex 100
      Determine a random number between 0 and the length-1 of our ONE BIG ARRAY (random index number out of our array between 0 and 299)

      Whatever that random index is, grab that value and add it to the password string


WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```



## Notes From TAs for Completing Homework
          // Do not need to worry about changing dom.... 
      // NEED have to have function generatePassword 
          // do you pass anything in??
          // consider using more than one funciton and calling functions within funcitons\
          // maybe use while loops
          // use for loops (looking in Erik's google doc)

          // write simple functions. console.log in to make sure that things are working
          // do little increments and then test that functionality
          // TEST THE LITTLE THINGS

      // PSA have homework instruction right next to!!! pay attention to user story is part of acceptance criteria
      // maybe create a random  function
      // make very long functions and maybe go back and condense
      // Interaction with the DOM (code given by homework it is already there but read up on it)
      // generate button linking between html and js. FYI. 
      // only writing js code for this assignment

      // Walk through solutions in lessons and understand what is going on