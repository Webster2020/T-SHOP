# T-SHOP

T-SHOP is full stack shop application. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Project is divided into front-end and back-end parts. Front-end was build based on React with Redux. Back-end was build with Express & MongoDB.

## How it works
![](T-SHOP_1.gif)
![](T-SHOP_2.gif)

## Link
http://tshop.webster2020.usermd.net/

## How to start:
1. git clone git@github.com:Webster2020/T-SHOP.git
2. yarn install
3. yarn serv - run server and connect to database
4. yarn start - run the project and than You can see it on Your device

*...or use link if You only want to check how it works

## Used technologies:

### FRONT-END:
 1. React with Hooks - as main library
 2. Redux - store
 3. SCSS - for styling
 4. React Router - for routing
 5. React Thunk - for fetching data
 6. Eslint - to control bugs
 7. Husky - to control bugs before every commit
 8. Lint Staged - to check only changed files
### BACK-END:
 1. Express - server
 2. MognoDB & Mongoose - database

## Implemented solutions:
Application's front-end is divided into few views, main views: Home, Cart, Confirm and two views in building: Create and Examples.
 1. Home:
 - bar with navigation buttons 
 - top 3 list of products
 - extra sections with additional informations
 - list of all products
 - footer
 2. Cart:
 - bar with navigation buttons
 - products added to cart
 - products added as favourites 
 - cart summary
 - order button
 - footer
 3. Confirm:
 - bar with navigation buttons
 - form with name and email
 - order button
 - footer
Application's back-end is built with server.js, routes with routes.js files and models with model.js files
 1. Server
 - endpoints and connect with mongo database
 2. Routes
 - endpoints
 3. Models
 - schemes database collections

## Project architecture
Project is not divided into components in accordance with the React convention.
 1. components with JS, JSX and SCSS
 2. root file: index.html
 3. store and reducers in redux folder
 4. others functions in utils
 5. configuration files: gitignore, package.json, etc.
 6. data with mongo
 7. server with express

## How did I create this project?
Project was prepared based on my own idea and using my current knowledge and skills.

## Plan for future development
- Refactor code
- Create view with creating own, customize product

## Authors
* **Michal Szwajgier** - *Webster2020* - 

## License
Free licence
