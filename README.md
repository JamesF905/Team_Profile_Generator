<div style="background:#222; border: 4px outset #333; padding:20px; font-family:arial">
<div id="top"></div>
<div align="center">
<a href="https://gist.github.com/JamesF905">
<img src="images/logo.png" alt="Logo" width="40%" style="border: 4px inset #444; background:#333; border-radius: 20px">
</a>

# Team_Profile_Generator

<p align="center">
  An application that generates an HTML file showing team members, based on my inputs. <br><br>By: <a href="https://github.com/JamesF905" target="_blank"><strong>James Fidlin</strong></a><br/>July, 19, 2022
</p>
<br />

### Video Walkthrough Link

<p align="center">
    <a href="https://drive.google.com/file/d/1xe5Skd2xXaGKsBG44NHPMJ-8sfBz9IVe/view"><strong>https://drive.google.com/file/d/1xe5Skd2xXaGKsBG44NHPMJ-8sfBz9IVe/view</strong></a>
</p>

### Repo Link

<p align="center">
    <a href="https://github.com/JamesF905/Team_Profile_Generator"><strong>https://github.com/JamesF905/Team_Profile_Generator</strong></a>
</p>
<br />
</div>

## About The Project

[![Team_Profile_Generator][product-screenshot]](https://github.com/JamesF905/Team_Profile_Generator)

This challenge requires me to create a social network app using node.js, NPM, mongoose, express, and a NoSQL database. The user story and acceptance criteria are as follows.

This application uses node.js (fs module) to generate an HTML file showing team members, based on what is selected in the NPM Inquirer prompts. NPM Jest is used to run testing (Test Driven Development), on the code to ensure it meets current industry standards. This challenge also demonstrates heavy use of javascript classes and their extentions. Further functionality is detailed in the user story, and acceptance criteria located below.
<br /><br />

## Contents
* [User Story](#User-Story)
* [Acceptance Criteria](#Acceptance-Criteria)
* [Technology Used](#Technology-Used)
* [Installation](#Installation-Instructions)
* [About the Author](#About-the-Author)
<br/><br/>

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input

WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input

WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address

WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab

------------------------------------------------------------------------

WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Technology Used 

* [Javascript](https://www.javascript.com/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Git Hub](https://github.com/)
* [Git Bash](https://git-scm.com/)
* [Font Awesome](https://fontawesome.com/icons)
* [node.js](https://nodejs.org/en/)
* [node.js fs module](https://nodejs.dev/learn/the-nodejs-fs-module)
* [npm inquirer](https://www.npmjs.com/package/inquirer)
* [npm fs](https://www.npmjs.com/)
* [npm jest](https://www.npmjs.com/jest)

<p align="center"><a href="#contents">(back to top)</a></p>
<br/><br/>

## Installation Instructions 

1) Install GitBash

2) Install Node.js

3) Clone this repo

4) Run GitBash from your cloned folder

5) type "npm i" in GitBash

6) type "node index.js" in GitBash to start the application and fill out the form, an index.html file will be generated and stored in the "dist/" folder

7) type "npm run test" to run the jest test suites

<p align="center"><a href="#contents">(back to top)</a></p>
<br/><br/>

## About the Author

James Fidlin is a Junior Full Stack Web Developer, studying at the University of Toronto's School for Continuing Education, in the Full Stack Web Development Program. You can connect with James, using any of the links below.
<br/><br/>

[![LinkedIn][linkedin-shield]][linkedin-url] [![Gmail][gmail-shield]][Gmail-url] [![Github][Github-shield]][Github-url]

<br/>

<p align="center"><a href="#contents">(back to top)</a></p>
</div>



[Gmail-shield]: https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white
[Gmail-url]: mailto:jameslfidlin@gmail.com?

[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[linkedin-url]: https://www.linkedin.com/in/james-fidlin-98853a239/

[Github-shield]: https://img.shields.io/badge/Github-white?style=for-the-badge&logo=Github&logoColor=222
[Github-url]: https://github.com/JamesF905

[product-screenshot]: assets/images/Project_Screenshot.png