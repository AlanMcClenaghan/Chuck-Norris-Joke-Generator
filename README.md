# Chuck Norris Joke Generator
API project 1 from Brad Traversy's Modern JavaScript From The Beginning course

Chuck Norris Joke Generator app allows users to:
  * Input a number of jokes
  * Get Jokes using submit button 
  * If number of jokes requested is less than 1, "Number must be greater than 0" is printed to the screen.
  * If number of jokes requested is greater than 1, API request is made to "http://api.icndb.com/jokes/random/${numberOfJokes}"
  * The output of the response is then printed to the screen.