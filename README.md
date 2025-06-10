# Assignment TT Service

## Description
This project is a TypeScript-based Express application for managing user data. It includes features for creating, updating, retrieving, and deleting users.

## Prerequisites
- Node.js (version 14 or higher)
- MySQL (or compatible database)

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <your-repo-url>
   cd assignment_tt_service
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Database**:
   - Update the database connection details in `knexfile.ts` and `scripts/init_db.ts` to match your local MySQL setup.

4. **Initialize the Database**:
   - Run the initialization script to create the database and tables:
   ```bash
   npm install -D ts-node typescript
   npx ts-node scripts/init_db.ts
   ```

5. **Run the Application**:
   - Start the development server:
   ```bash
   npm run dev
   ```

6. **Access the API**:
   - The application will be running on `http://localhost:3000`. You can access the user-related endpoints at `/users`.

## Scripts
- `npm run build`: Compiles the TypeScript files to JavaScript.
- `npm run start`: Starts the application in production mode.
- `npm run dev`: Starts the application in development mode with hot reloading.

## License
This project is licensed under the ISC License.
