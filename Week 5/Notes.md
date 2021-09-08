Sun 
more realistic cactus


#useReducer()
- another hook that is available with react that allows you to store a bunch of funcitons/methods in 1 or more files
- 2 parameters
	- state This is a state that is declard at the start that holds all your information
		Dispatch this is a word or phase that use to tell the reducer what to do i.e. 'remove'
	}
- in order to save space/organize your function you place everything inside of a sparate file called reducer.js that is then imported to the rest of the files
- useReducer is a hook imported from react and used in all of the files that require it
Dispatch
- function in your app wil take an object filled with different values and pass them on to the reducer.js
	- type: is the command you want to run
	- payload: is the relevant information that you will need to complete the function
	
#Context 101 
- context is used on index level
- use wrapper element to be provided to the entire app.
- the context is storing data in 1 or more separate files
	- if there is only 1 file then we should call it context.js
	- This file builds the context hook and exports it to the index level
	- import context form react the same as th eother hooks creating your context is not useContext, Notice the `React.createContext()` 
		`import React, {useContext } from "react";
		const AppContext = React.createContext()`
	- The app provider function is th efunctoin that you use to create and return all of the values you want availablel to the entire program
		`return (
		<AppContext.Provider value={{isLoading, error}}>
		{children}
		</AppContext.Provider>
		)`
- Exporting the context requires 2 differetn exports
- The newly create React hook 
#CustomHooks
-	You can create your own hooks 
-	There are a few uses for this but consider making these for anything that you can will use over and over or in multiple programs
-	useFetch is an extremely common function since we are commonly using API fetch reques
		
		
	
	