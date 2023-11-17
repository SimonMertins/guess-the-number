# Guess-The-Number
Guess the number is a easy to understand numbers game, where the user makes a guess on a number between 1-6.

It is a fun and easy game that updates your score after every guess. It also shows you the right number after every guess, so you can see which number you should have guessed.
The site is responsive so it dosen't matter if you are using your phone, tablet of computer.

If you have some minutes to spare, then this is the game for you!
[Guess The Number](https://simonmertins.github.io/guess-the-number/)
![Screenshot of the site on diffrent screen sizes.](/assets/images/ui.dev.png)

## Features

### Heading
* The heading is seen on top of the page, and it displays the logo and the name of the, so it is easy for the user to understand.
![picture of the heading](/assets/images/heading-number.png)

### Game area
* The game area has a very simple look, it gives the user a very short and easy explanation of how to play the game.

* It gives the user feedback on scores and tell the user which number was the right guess after each try.

* The user will get an error message if they try to guess anything else then a number between 1-6.
![picture of error message](/assets/images/error.png)
![picture of game area](/assets/images/game-area.png)

### Features to add
* one feature i want to add, is to give the user the choice of selecting between whick numbers they want to play the game at.

## Testing
* The site has been tested on diffrent devices (MacBook Pro, Iphone 13 Pro) and everything work and looks good. I have also tested the a lot of diffrent screen sizes using Chrome developer tool.

* It has also been tested on multiple browsers (Chrome, Safari, Edge and Firefox) and everything looks good and work.

### Validator

* HTML validator (no errors) [W3C validator](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fsimonmertins.github.io%2Fguess-the-number%2F)

* CSS validator (no errors) [Jigsaw validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fsimonmertins.github.io%2Fguess-the-number%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

* JavaScript validator [jshint](https://jshint.com)

Metrics

There are 2 functions in this file.
Function with the largest signature take 0 arguments, while the median is 0.
Largest function has 18 statements in it, while the median is 13.
The most complex function has a cyclomatic complexity value of 5 while the median is 3.

* I had some problems with Jshint giving me some warings but I manage to solve that by putting in /* jshint esversion: 6 */ at the top of my JavaScript file.
So now there is no warings or errors.

### Lighthouse
* I tested the site on lighthouse and it performed well.
![picture of lighthouse score](/assets/images/lighthouse-number.png)

### Unfixed Bugs
* There should be no unfixed bugs on the site.

## Deployment
* The site is deployed to GitHub pages. Following these steps:
1. In my GitHub repository I clicked on settings.
1. On the left site of the screen I clicked on pages.
1. In pages under "Build and deployment" I choose main as branch and pressed save.
1. And after that the site automatically deploys.

A link to the live website: (https://simonmertins.github.io/guess-the-number/)






