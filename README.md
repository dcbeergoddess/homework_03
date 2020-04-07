# Homework_03 JavaScript Password Generator
  Homework Due Monday April 6th 12am
  Having trouble getting any alerts or prompts to come up initally.
  Happy to find some time to go over it when one of you all can. I intended to be moving to the new house right before class started but we had to push it back to this past weekend and coming weekend thus I did not much time to review class videos and activities in prepration for the assignment or get much outside reasearch done. I think I have a pretty good handle on where this needs to go overall but just missing some of the little steps along the way. I should have some more time to research and do outside reading to help me along and will continue to do so after I submitt the assignment in order to catch up!! Not totally lost but not totally putting all the little steps fully together yet!

## Pseudo Code from Homework README Acceptance Criteria

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
  Code a prompt that asks the user for how many characters in the password
  Must be between 8 and 128
  Store response in a variable
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
  Confirm for lowercase
  Confirm for uppercase
  Confirm for numeric
  Confirm for special characters
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
  Create an array for lowercase letters [ "a", "b", "c", ...]
  Create an empty array that will hold all characters allowed in the solution
  If user chose lowercase:
    Add all lower case options to that array
  We end up with ONE BIG ARRAY that holds all possible characters in the solution
  Create an empty string for the final password
  Loop from 1 to the number of characters in the password  // ex 100
    Determine a random number between 0 and the length-1 of our ONE BIG ARRAY
    Whatever that random index is, grab that value, and add it to the password string
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page



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