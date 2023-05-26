# code-discussion-app

A chat-app to discuss coding with google-user-Authentication and defined rooms

## Avialable at:
https://code-discussion.vercel.app/

## Features

* sign-in with google-account
* view and join a room with prefered programming language
* send messages in the joined room to all users who also joined the same room
* can't send to a different room
* show the people who are joined in the same room 
* ability to leave room and also sign-out
* load previously saved messages
* All Data Saved in a  mongoDB

## Getting Started
using the predefined images in docker hub (Recommended)
  !! Make sure to install docker on your machine
    --pull the server docker image file
        docker pull  dawitsishu/code-discuss:server
    --pull the client docker image file
        docker pull  dawitsishu/code-discuss:client
    --run the downloaded client image files by building a container
        docker run --name <prefered-container-name> -p 3000:3000 dawitsishu/code-discuss:client
    --run the downloaded server image files by building a container
        docker run --name <prefered-container-name> -p 3000:3000 dawitsishu/code-discuss:client


## Getting Started
cloning and running locally with node-js
1. Clone the repository:
  https://github.com/DawitSishu/code-discussion
2. move to server folder
   cd server
3. Install the dependencies:
    npm install
4. start the server
    npm server.js
4. move to client folder
    cd ..
    cd client
5. Install the dependencies
   npm install
4. Start the client:
   npm start


## Contributing
Contributions are welcome! Please open an issue if you find a bug or have a feature request. If you want to contribute code, please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.  
