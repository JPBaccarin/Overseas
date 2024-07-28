# Overseas

Overseas provides essential information to help visitors become residents in foreign countries, covering visas, jobs, housing, healthcare, and more.

## Tech Stack

This project leverages a modern web development stack to deliver a robust and scalable application:

- **Frontend**: Built with [Next.js](https://nextjs.org/), a React framework that enables server-side rendering and static site generation.
- **Styling**: Utilizes [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS styling, with additional custom configurations in [tailwind.config.ts](client/tailwind.config.ts).
- **State Management**: Managed using React's built-in state management features.
- **HTTP Client**: [Axios](https://axios-http.com/) is used for making HTTP requests.

- **Backend**: Powered by [Express](https://expressjs.com/), a minimal and flexible Node.js web application framework.
- **Database**: Uses [Sequelize](https://sequelize.org/) as the ORM for interacting with a MySQL database.
- **Authentication**: Handled using [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) for token-based authentication.
- **Validation**: [Zod](https://zod.dev/) is used for schema validation.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/overseas.git
    cd overseas
    ```

2. Install dependencies for both client and server:

    ```bash
    cd client
    npm install
    cd ../server
    npm install
    ```

### Running the Development Server

1. Start the client development server:

    ```bash
    cd client
    npm run dev
    ```

2. Start the server development server:

    ```bash
    cd server
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the client application.

### Building for Production

1. Build the client:

    ```bash
    cd client
    npm run build
    ```

2. Build the server:

    ```bash
    cd server
    npm run build
    ```

### Running Tests

Run tests for the server:

```bash
cd server
npm run test