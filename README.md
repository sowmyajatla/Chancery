# Chancery
Chancery is a website that provides interview experiences of others in different companies to  make you prepare well ahead.

**It is a MERN stack project that is built using reactJs as frontend and nodeJs,Express as backend along with mongoDB,mongoose database and deployed using heroku and neltify**
my webiste link : https://sowmya-chancery.netlify.app/

![image](https://user-images.githubusercontent.com/87930260/155360583-bb6c64f9-000b-444f-95af-e321fd0b1127.png)

![image](https://user-images.githubusercontent.com/87930260/155360914-4ce91f6c-ed70-458d-abd4-752b1ec3c43e.png)



## TECH STACK
- ReactJs
- NodeJs
- ExpressJs
- mongoDB
- mongoose

## File Structure
- client - Holds the client application
   - public - This holds all of our static files
   - src
      - assets - This folder holds assets such as images, docs, and fonts
      - components - This folder holds all of the different components that will make up our views
      - views - These represent a unique page on the website i.e. Home or About. These are still normal react components.
      - App.js - This is what renders all of our browser routes and different views
      - index.js - This is what renders the react app by rendering App.js, should not change
   - package.json - Defines npm behaviors and packages for the client
- server - Holds the server application
   - controllers - These hold all of the callback functions that each route will call
   - models - This holds all of our data models
   - routes - This holds all of our HTTP to URL path associations for each unique url
   - .gitignore - Tells git which files to ignore
   - index.js - Defines npm behaviors and packages for the client
   - package.json - Defines npm behaviors like the scripts defined in the next section of the README
  
    README - This file!


