# REST API Symfony4 & Vue.js

![internations](https://user-images.githubusercontent.com/3720473/51105484-c3bcd380-17f1-11e9-90b0-5d898d354d04.gif)


## APIS
| type   | url                         | payload        | description            |
|--------|-----------------------------|----------------|------------------------|
| GET    | /api/users                  |                | get all users          |
| POST   | /api/users                  | {name: string} | add user               |
| DELETE | /api/users/{id}             |                | delete user            |
| GET    | /api/groups                 |                | get all groups         |
| POST   | /api/groups                 | {name: string} | add group              |
| DELETE | /api/groups/{id}            |                | delete group           |
| POST   | /api/users/{id}/groups/{id} |                | attach group to user   |
| DELETE | /api/users/{id}/groups/{id} |                | detach group from user |


## Project setup
```
git clone git@github.com:OmarMakled/symfony4-front-end.git
cd symfony4-front-end
npm install
set .env VUE_APP_API=
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
