# Code Discussion App

The Code Discussion App is a MERN (MongoDB, Express.js, React.js, Node.js) application that allows users to discuss code in real-time. It provides a platform for users to join specific rooms based on their preferred programming language and engage in discussions with other users. The app incorporates various features such as signing in with a Google account using Firebase, real-time messaging, room management, and more.

## Demo

Check out the live demo of the Code Discussion App: [Demo Link](https://code-discussion.vercel.app/)

## Server and Client Docker Images

The Code Discussion App provides Docker images for both the server and client components. These Docker images can be used to easily deploy the application in a containerized environment. The images are hosted on Docker Hub and can be pulled using the following commands:

- Server Docker Image: `docker pull  dawitsishu/code-discus:server`
- Client Docker Image: `docker pull   dawitsishu/code-discus:client`

For detailed instructions on how to use these Docker images, please refer to the [Dockerfile](https://github.com/DawitSishu/code-discussion/blob/main/client/Dockerfile) for the server and the [Dockerfile](https://github.com/DawitSishu/code-discussion/blob/main/server/Dockerfile) for the client in the respective directories of the repository.

## Features

- **Google Account Sign-In with Firebase**: Users can sign in to the app using their Google accounts, leveraging Firebase Authentication for a seamless and secure authentication experience.

- **Room Joining**: Users can join a specific room based on their preferred programming language. By joining a room, users can connect with others who share the same interest and engage in discussions.

- **Real-Time Messaging**: The app enables users in the same room to exchange messages in real-time. Messages are visible to all users who have joined the same room, fostering collaboration and knowledge sharing.

- **Room Management**: Users can view the list of participants who have joined the same room, allowing them to see who they can interact with. Additionally, users have the ability to leave a room whenever they wish.

- **Message History**: The app stores previously sent messages, allowing users to load and view previous conversations when they join a room.

## Technologies Used

- MongoDB: The app utilizes MongoDB, a NoSQL database, to store user information, room data, and message history.

- Express.js: The app's backend is built with Express.js, a popular Node.js framework, to handle API requests, authentication, and database interactions.

- React.js: The frontend of the app is built with React.js, providing a responsive and interactive user interface.

- Node.js: The backend server is built with Node.js, providing a runtime environment for running the app's server-side code.

- Socket.IO: Socket.IO is used for real-time bidirectional communication between the server and clients, enabling real-time messaging functionality.

- Firebase Authentication: The app leverages Firebase Authentication for user authentication, enabling users to sign in with their Google accounts securely.

- Docker: The app provides Docker images for both the server and client components, facilitating easy deployment and containerization.

## Installation

To run the Code Discussion App locally, follow these steps:

1. Clone the repository: `git clone https://github.com/YourUsername/code-discussion-app.git`

2. Install dependencies: `npm install` (for both frontend and backend folders)

3. Set up environment variables: Create a `.env` file in the backend folder and configure the necessary environment variables, such as MongoDB connection details.

4. Set up Firebase Authentication: Set up a Firebase project, enable Google sign-in, and obtain the Firebase configuration object. Add the configuration details to your frontend codebase.

5. Start the app: Open two terminal windows, navigate to the frontend and backend folders separately, and run `npm start` in both.

6. Open the app in your browser at `http://localhost:3000`

## Contributing

Contributions to the Code Discussion App are welcome! If you have any suggestions, new features, or bug fixes, please follow these steps:

1. Fork the repository.

2. Create a new branch: `git checkout -b feature/your-feature-name`

3. Make your changes and commit them: `git commit -m 'Add your commit message'`

4. Push to the branch: `git push origin feature/your-feature-name`

5. Open a pull request, describing your changes and their purpose.

## License

The Code Discussion App is open-source software licensed under the [MIT License](LICENSE).
