How to start

Creating a react app is a large task that we can use tool chains to do for us
There are a lot of tool chains that serve different purposes

#toCreateReactApp
npx create-react-app "file name"

#JSX stands for javascript expressions and runs perfectly fin in a .js file too

.jsx should only be used with files that are capitalized

You can use JS or JSX but the benefit to JSX is the use of emmet and auto-fill of the HTML elements


#Components

React is written in .jsx

Creating new components 



best that they are named singular nounds, book, header, item, button etc
componenets should also be kept in a components folder in the .src folder.

Imports
	typically useState, useEffect, or other react hook
	
Arrow Function
	This is the name of the ocmponents and will also hold any props that are passed down
	
Any states, functions, variables
	Before the return you can define any js you want to use
	
The return statement
	This will house what you want to be rendered into HTML
	
Export components
	Defines the export name
	
	Once you have created your components you need to import them on the main app page
	
	When you want to use a component you type it out just like a regular HTML tag but you must use a capital letter
	
	Capital letters let the react library know to compile the code
	
	Lastly remember that you always need to close all of your react components 
		ex.
			<Form /> 
			
	#useState
	Stores a value and returns it to the user similar to a variable
		setState(newState)
	Updateing useing setState causes a re-rennder of your page

#SettingStyles

	Lastly there will be times when you need to use js to pass objects, it is important to remember that requires a double bracket{{...}}
	
	one of the most common instances of this is css styles and props
#Prop
	
Props short for properties are any setting or value that is attached to a component
These are most used to pass values down the line but can also be used just like HTML element properties 

You can give thses props any name and any value, the better the name the more sueful it will be
	
	<Question
	key={data.id}
	title={data.title}
	info={data.info}
	/>

	const Question = ((title, info)) => {
		
	}

if you have a lot of information you can destructure your props to save you some space

	<Question
		  key={data.id}
		  {...data}
		  />
		  
		  const Question = {{title, info}} => {
		  	
		  }
		  
#MappingArrays 

	{questions.map((question) => {
	return (
	<Question key={question.id} {...question} />
	)
	})}
	
in this example we have several items in the questions state and we can loop through all of them....

you can destructure your item if you like this is not required but does make the setup easier

you can do more complicated returns that use HTML
components and props to fill out the information

Usting props once they are passed down is as simple as adding the name of the prop to the components parameters

We use { ... } to immediately deconstruct it for use in the component
	
	const List =-= ({people, name id})
	
Now that we have accepted these props we are able to use them as variables

This is especially importeant when we are mapping and useing the same variables for several different values

#IntroToHooks

Hooks are just special functions that are built into react that let you 'hook' into the react features

Every hook in React must start with a lowercase 'use'
	useState
	useEffect
	useContext
	
useEffect() is a function that will run anytime a re-render happens

This is especially helpful whn pulling data from a server and we want to make sure that the data is up to date on render.

	useEffect(() =>{
	effect
	return() =>{
	cleanup
	}
	}, [input])

useEffect runs a certain chunk of code every rerender, most often that chynk is a function

The effect to the right is the js code that runs when you render

The effect that is created is permanent and will stack over and over
we can use a cleanup function that removes any left behind events

The input array can be used to choose specific state changes that will cause this effect instead of every render

you can also leave it empty to have the effect happen only once.

#Async/AwaitFunctions
JS will compile code as fast as possible so there are times when it 
need to slow sdown and wait for data

to force it to slow down we use async/await function 

the rest of the code wil wait for these function to finish and return data

	const fetchTours = async () => {
		const response = await fetch(url)
		const tours = await resoponse.json()
		setTours(tours)
	}

fetch() is a built in JS method that reaches out to a URL and grabs a response

The response is an object with several parts but the mose important ones are; the json with data, the response code 200

The code 200 means that ir reached out ot the server an was allowed to access the information there, other codes will be talked about next unit.

The json is nor available in the response object only the fact that it is available to fetch

once we know that it is availale we use the response to take the data


	useEffect(() => {
	fetchTours()
	},[])
	
We are going to want to run that fetch funciton ofen but not forever
that is what use Effect is made for
