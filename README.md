# COMP6841 - Something Awesome Project

Security Project for COMP6841

Using LinkedIn Learning Tutorial on creating a MEAN Stack

### Startup

#### Frontend:

`cd frontend/`
`ng serve -o`

#### Backend

`cd backend/`
`nodemon server.js`

#### Concurrently

`npm run dev`

### Setup

- Within `backend/` run `npm install`
- Within `frontend/` run `npm install`
- Set the environment variables in `frontend/src/environments/environment.ts`


### Database Structure

Database is currently **NOT** using MongoDB.

```
something-awesome
Collection: Users{
  'Username': 'admin',
  'Password': 'password123',
  'Permissions': 1
} 
```
