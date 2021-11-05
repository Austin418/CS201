#NodeJS
- Node is an enviroment that allows us to run JS outside of the browser
- built using chrome's V8 JS engine
- Node has a large and greate community that is adding to the libraries available
#differencesFromBrowserToNode
-	There is no DOM (DOM calls error out)
-	there is no window
-	this runs server side apps
-	Greate for filesystem (accessing the computer not just the browser)
-	Versioning (ther version is static so ther is no chance of breaking with future updates)
-	They use commonJS so we don't need to worry about ES6 or browser compatibility
#installingNodeJS
-	If you are going to install this on your own you should always use the LTS (Long Term Servise) since that is the stable build that will be updated when needed.
REPL & CLI
- REPL (Read Eval Print Loop) is a terminal command that lets us use Node
- CLI (Command Line Interface) is the better way that we can use Node
#StartingREPL
- to start up node all you need to do is type 'node' into terminal and you will see the terminal type chande to node
#REPL
- Small IDE in your terminal you can create variables and call them in the terminal but this is verry inefficeient and just for playing around
- To exit REPL we hit 'ctrl+c'
#CLI
- This is the version that runs js files and compiles
Globals
- just like JS, there are several global variables that we can use anywere.
- For instance 'console' we dont need to define this, node alr knows
- We call these globals
##Here are a few globalse that you chould know
- __dirname
	- path to current directory
- __filename
	- the current file name
- require
	- allows us to use modules
- module
	- info about the current module
- process
	- info about the enviroment where the program is being executed
#Modules
- Modules are Node's way of saying files, EVERY .JS FILE IS A MODULE
- We can use these in ES6 but we use the impoer command 
- Node uses 'require' instead of import
#Built-inModules
- there are a lot of built in modules that are useful for different programs
- We are going to be using 4 main ones but you can find more in the docs if you want to make your own projects
#OSModule
- The os module is used to retur information on the computer and system information on the pc
	- `const os = require('os')`
#PathModule
- The path module is used to navigating the directories and file paths 
- This also includes methods that will clean up paths to avoid errors
	- `const path = require('path')`
#FSModule(file system)
- The file system module is extensive and allows interaction between your code and the files on your PC
- This has methods to allow reading, writing, cleaning, and combining files (and so much more...)
- Because it is so extensive we only import what we need
	- `const {readFileSync, writeFileSync} = require('fs')`
#HTTPModule
- HTTP is all about servers and internet protcol
- This library truncates a lot of difficult code into simpler methods and never buffers requests or response, allowing users to stream data
	- `const http = require('http')`
#Nodemon
- Nodemon is a dev dependency that we use to help with node server developmant
- if you ever update any files on a server then you need to stop an restart the server to load those settings
- Nodemon lets us do it automatically
#devDependencies
- Nodemon is a library that is not needed for the end user so loading it on the server wold waste space for no reason 
- so install some thing in a dev only space we use devDependencies
	- `npm i nodemon -D`
#NPMScripts
- If you look into your package.json you will also see a 'scripts' object
- We have been using this in react without even knowing it you may recofnise the commands listed
	- `"scripts": {
	"start": "react-scripts start",
	"build": "CI- react-sctipts build",
	"test": "react-scripts test",
	"eject": "react-scipts eject"
	}`
#EventLoop
- The event loop is a key part of how the browser works with async functions and callbacks
#WhatIsAsync
- as we saw there are some functions that run outside of the call stack in a browser API stack
- Any code that is running/operating outside fo the call stack is called asyncronous
- We can force functions to be async, allowing out code to keep running without waiting for the function to finish
#NodeEventLoop
- Node recreated this event loop proces for their own library
- This allows node to handle several requests at the same time without running into delays or blockages
#HypertextTransferProtocol
- HTTP is how we send information from a browser or URL to a server
- HTTP is the typical way that users akd for information from a server and that is called a *request*
#HTTPModule 
- node is excellent at server startup and request handling this is done throught the http module
- Here we have methods like http.createServer() that allows us to easily create a new server
#createServer
- http.createServer() takes in a call back function with 2 parameters, 1 for requests and 1 for response
- `const server = http.createServer((req, res) =>{`
#ReqAndRes
- Res is an object that represents the HTTP request, tkypically done through the URL but also through things like fetch()
- Res is the response or whta the server returns to the user to use
- `const server - http.createServer((req, res) => {`
#TheRequestObject
- There is a lot of information stored in the request object, including url, header, and params
- We are going to start with the url to get the location of the page we are querying
- `if (req.url === "/"){`
#TheResponseObject
- the response object has a ton of information as well including format, json, and download
- We are going to focus on the required one called .end that ends the response process
- `res.end("Welcome to our home page");
		else {res.status(404) .end();}`
#Promises
- Promises are a special object that holds information about the values received but also whether or not the operation is finished
- Promises are asynchronous so we can use them to run code and then we can force the rest of the code to wait on the promise
- async/await are a way that we can use promises
- await is a keyword telling us that we are going to wait for the promise to finish and return information
- Not everything has a promise on it, fetch is a promise by default but things like large math problems are not promises
- Promises are objects sw we set them up like any other new object
- `const getText = (path) => {
		return new Promise((resolve, reject) => {`
- Promises have always been very important for JS and other async languages
- We are going to see 3 ways to handle promises but please only use async/await in the future
#Events
- Events are triggered by user input, just like js or html events like onClick()
- Node uses events very often building modules that handle changes on the page
- In node events are built off of a singular module called the event emitter
- This module takes in some kind of request and gives back something depending on the parameters
- The common events are requests and we use a method called '.on()' for that 
- Any other module that extends events is also able to use the '.on()' for example the http servers
#FileSystemFlags
- When createing files sequentially we need to tell node how we want the data exported, i.e. overwrite, append, create only if it doesn't exist
- `w`
	- Open file for writing (overwrites the file)
- `a`
	- Open file for appending (adds to file)
- `r`
	- Open file for reading (you can't change the file when you use this flag)
#Streams
- you have likely heard of streaming tv, movies, and music to your phone or pc
- Streaming is a technical term that means to do something sequentially
- we only load 64kbs of info at a time so that we can enjoy th eloaded part while the rest is loading
#StreamingOptions
- Just like fs options with flags , there are options with streaming as well. The two big ones are
	- highWaterMark
		- Tells the stream how many bytes should be in each chunk
	- Encoding
		- Defines the language 'utf8' for example
#Servers
- Servers are computers, I know they sound more advance and technical, but they are a computer just like your laptop
- The only difference is that a server is meant to stay on and always have the resources they are carrying availible
#HTTPRequestCycle
- Urls are an address to the server where the information is stored
- Think of it lik a house and you need to send a letter to ask for someting you cant do that without knowing the address.
- The url holds a lot of information where to go and what to ask for
- The server waits for this HTTP request and then HTTP responds with the corresponding data if available
#RequestMessages
- A request message has 4 parts
	- A method
		- GET, PUT, POST, DELETE
	- A URL
		- The adress to go to
	- Headers
		- The options that your request carries
	- Body
		- Any other relevant information needed
#RequestMethods 
##CRUD
~~~~~~~~~~~~~~~
- Post
	- Creates Data
- - Get
	- Reads Data
- Put 
	- Updates Data
- Delete
	- Deletes Data
~~~~~~~~~~~~~~~
#Headers(optional)
- headers is an object that is filled with key value pairs describing the request for example
- CORS: no-cors
- Referrer: google.com/
- Pragma: no-cache
#BodyOrPayload(optional)
- This is the content that you are deposition on to the server if you are running a PUT or POST request
- This is totally optional and the user can't do this with a url request, you would need to set up this command using a form or something
#ResponseMessages
- Very similar to the request message
	- Status code
		- 200, 404, etc. Tells the use the status
	- Status text
		- Describes the code, OK or Page not found
	- Headers
		- Details about the data and server
	- Body
		- The content they want, HTML, Json, etc.

#ServerStatusCodes
- 100's - Information
	- Preliminary response, typically used to let the client know that their request was received and to wait
- 200's - Sucess
	- There are a lot of codes in the 200's, but all mean successes
- 300's - Redirect
	- These are redirection, this is typically palced for the dev to handle deprecations. For example 301 is moved permanently and the dev displays the new URL
- 400's - Client Errors	
	- This is used when th error seems to be caused by the client and not the server
- 500's - Server Errors
	- These are reserved for when something goes wrong in the server's code, infinite loops, missing methods, etc.
#MIMETypes
- mime types tell the browser hoe to encode the into that is responding with
- some well known ones are text, JSON, css, html. Look them up in MDN for more
#API
- APIs are esay to return to the client in a response using the `res.json()`
- This is used to send daata and store data 
#SSR
- This is also easily served usnig `res.render()`
- This is used to serve templates of the page from th eserver
#ExpressJSON
- When serving a JSON file you need to encode the text to be an applictation/json
- Express responses have a method for this too, `res.json()`
#req.params
- URL routes can include a : to represent a unique param and we can use that from the req object
- `text/users/:id => text/users/1234`
	- if we check req.params we recieve `{id: 1234}`
#req.query
- for more complicated searches you can use query, you can add any or all query params to this
- `text/api/query => text/api/query?id=123`
	- `req.query()` returns an object with property id
	- `{id:123}`
#Middleware
- Function or method
	- rund between request and response
- Express is a middleware for Node and most things in express are middleware as well
- The basic layout of middleware
	- Request => Middleware => Response
- Most middleware is done with functions/methods
- When you work with middle ware you MUST pass it on to the next middleware manually or exit/terminate the code
- Terminating the response is as easy as ending the response, `res.send()`, `res.json()`, etc
- Passing uses a built-in method called `next()`
#app.use()
- app.use is a method that loads an entire directory of files without needing to define each one
- If we run app.use with a middleware though, express wil invoke the middleware on every route in the app
#morgan
- Morgan is a very robust logger that you can use in middleware
- The logs that it can create are quite robust but please look at the documentation to find out wit is actually logged
- For our purposes we dont need a lot there fore we can use the value 'tiny' to return the smallest log availible
#MethodPOST
- Post is a method that allows us to create new data, that data is passed through the body of the request
- This is extremely similar to the get with a req and a res, it is even able to return an HTML
#express.urlencoded
- Information passed through the body of a request is a bt confusing for the server 
- Data must be parsed by content typr and sometimes that isn't clearly defined
- Express has released it's own version of body-parser (an old library to handle encoding) called urlencoded
- This middleware will take the `req.body` and decoded the values to be strings or arrays
										~DOES NOT RECOGNISE OBJECTS~
#express.json
- This is the complimentary middleware th urlencoded that will recognize objects
- This will also parse the data into a JSON for easy use in the response
#urlencoded() and #json()
- These two middlewares are required for put and post methods since the data is always passed to the server as encoded information
#PUTMethod
- PUT is used to update existing values
- PUT methods require 2 params 
	- what you change
	- What it will be changed to 
- Delete removes a value from your data
- All we need is a param to let us know which object we want to remove from the database
#Postman
- Postman is a program that you can install onto your computer to run api requests to check how the server is running
- This saves a lot of time durring development and allows you to check the API without creating an await/async to test out the server
- We will create a small req to test postman lateer just remember onw important thing: 
	- The body is written using "DOUBLE QUOTES"
#ExpressRouter
- Express router is used to reduce the amount of routes that you need to type into your main server file
- You instead create your routes with your multiple methods in one file and then app.use that router file
#express.Router()
- instead of creating an app we can create a router in the same way allowing us to create the pathing in a different file
	- `const router = express.Router()`
#express.method()
- When using routers you create them just like the app using the .methods(path, CB)
	- `router.get("/", (req, res) => {})`
- ounce you have created your routes you need to export it from the router an import it to the server file
- Then you app.use the route with the path
	- `app.use('/api/people/'`
#Controllers
- Controllers are created to deal with functions and are then passed to the router
- This is the final step in creating clean, easy, to navigate code for a server
- since the controller will handle the req, res callback function we can now nicely arange out routes in 
#MongoDB101 
- Mongo is a non-realtional database.
- Biggest use for us is json's
#MongoDB102 
- instead of tables we have collections which are big datasets
- Instead of rows we have documets which are accessed using key value pairs like a normal JSON
#Hosting
- MongoDB can be hosted from a local machine if you want but there is a free alternative names "atlas"
- Atlas is create by the same team that made mongo
#AllowingUsers
- once the database is up and running then you need to whitelist users
- On the left you will see a tab named database access, click it and then add a new database user
#AllowingUsers 
- This is just for you right now, if anyone else accesses this db they will do it using your credentials
- Please add your name and generate a secure password and press add user
#NetworkAccess
- on the left you will see network access
- you can choose to add only your IP address but we are going to allow access from anywhere and press confirm
#CreateingYourFirstDB
- on the left click Databases and then click on the collections tab if you arent already there
- Then click on create own data, name the database Store ad the collection products
#Mongoose
- Mongoose is an alternative to the mongoDB API and is used more often for its convenience
- Mongoose has a built in object modeling API that ensures that all posted documents are exactly the same
	- `npm i mongoose`
#DotENV
- Another library, this one loads the .env file that we create
#VeryImportant
- `

 `