# The Jake MongoDB Network
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Table of Contents
* [Installation](#installation)
* [Description](#description)
* [Usage](#usage)
* [Contributions](#contributions)
* [License](#license)
* [Credits](#credits)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install, please clone this repository to your computer using the following steps in Github:

1. Click the "Code" dropdown menu and copy the SSH URL.
2. Open your terminal and navigate to the directory you would like to clone this repository into.
3. Type "git clone <paste SSH URL>", replacing <paste SSH URL> with your copied SSH URL. You can substitute an SSH URL with an HTTPS URL.
4. Press enter.

## Description
This is an API for a (fictional) social media company "The Jake MongoDB Network." This website allows users to to login, share their thoughts, react to friends' thoughts, and create a list of friends.

The backend utilizes MongoDB/Mongoose to maintain a database of users and thoughts. If a user utilizes Insomnia or a similar API client application, the user can manually add, update, or remove any users or thoughts from the database. 

Users can be friends with other users. Thoughts can also have reactions created by other users. All of this is maintainable from the backend.

## Usage
Enter the following commands via the terminal to start the program:

npm install

node utils/seed.js

npm start

Once your server is running, the user can navigate to Insomnia or a similar API client application to issue API calls:

![Screenshot](assets/screenshot1.png)

Get All Users: GET method with URL http://localhost:3001/api/users.

Get Single User: GET method with URL http://localhost:3001/api/users/userId.

Create New User: POST method with URL http://localhost:3001/api/users. Body should include user data for "username" and "email" fields.

Update User: POST method with URL http://localhost:3001/api/users/userId. Incorporate updates into data body.

Delete User: DELETE method with URL http://localhost:3001/api/users/userId.

Get All Thoughts: GET method with URL http://localhost:3001/api/thoughts.

Get Single Thought: GET method with URL http://localhost:3001/api/thoughts/thoughtId.

Create New Thought: POST method with URL http://localhost:3001/api/thoughts. Body should include user data for "thoughtText", "username", and "userId" fields.

Update User: POST method with URL http://localhost:3001/api/thoughts/thoughtId. Incorporate updates into data body.

Delete User: DELETE method with URL http://localhost:3001/api/thoughts/thoughtId.

Add a Friend: POST method with URL http://localhost:3001/api/users/:userId/friends/:friendId. Friend ID should be the ID of the user who you want to add as a friend.

Remove a Friend: DELETE method with URL http://localhost:3001/api/users/:userId/friends/:friendId. Friend ID should be the ID of the user who you want to remove as a friend.

Add a Reaction: POST method with URL http://localhost:3001/api/thoughts/thoughtId/reactions. thoughtId should be the ID of the thought you wish to react to. Data body should include "reactionBody" and "username" fields.

Remove a Reaction: DELETE method with URL http://localhost:3001/api/thoughts/thoughtId/reactions/reactionID. Thought ID should be the ID of the thought you wish to react to, and reactionId should be the reactionId for the reaction you wish to remove.

[Please see this video demo.](https://drive.google.com/file/d/1QKZnaSXjGaS0NSax35l1jJT6RVMO8UJR/view?usp=sharing)

## Contributions
When contributing to this repository, please reach out to me via e-mail to discuss the change you would like to make first.

## License
This project is licensed under the MIT License. For more information, please see the [MIT License](https://opensource.org/licenses/MIT).

## Credits
This program was created by Jacob McAuliffe for the UC Berkeley eDX Coding Boot Camp.

## Tests
In the future, I would like to use this program to collect more specific user and thought data. Users could include further personalized information such as full names and birthdates, or the program could collect automated data such as the number of times they login or daily platform usage. For thoughts, personalized information such as likes/upvotes could be incorporated, or automated collected data such as numbers of views per thought/reaction.

## Questions
If you have further questions, you can reach me at [mcauliffemedia@gmail.com](mailto:mcauliffemedia@gmail.com).

GitHub Account: [jacobmca](https://github.com/jacobmca)