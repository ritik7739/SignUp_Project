# User Authentication System

![License](https://img.shields.io/badge/license-MIT-blue.svg)

This project is a simple user authentication system built using Node.js, Express.js, MongoDB, and EJS templates. It allows users to sign up, sign in, view their dashboard, and log out.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ritik7739/user-authentication.git
   ```

2. Install dependencies:

   ```bash
   cd user-authentication
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:

   ```env
   MONGO_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase
   ```

4. Start the server:

   ```bash
   npm start
   ```

## Usage

Once the server is running, you can access the following routes:

- `/signup`: Sign up for a new account.
- `/signin`: Sign in to an existing account.
- `/dashboard`: View the user dashboard after signing in.
- `/logout`: Log out of the current session.

## Features

- User authentication (sign up, sign in, logout).
- Password hashing for security.
- User dashboard with basic profile information.

## Configuration

### Environment Variables

- `MONGO_URL`: MongoDB connection string.

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).

## Credits

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [EJS](https://ejs.co/)
