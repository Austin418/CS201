Sun 
more realistic cactus


#useReducer()
	- another hook that is available with react that allows you to store a bunch of funcitons/methods in 1 or more files
	- 2 parameters{
	-- state This is a state that is declard at the start that holds all your information
		Dispatch this is a word or phase that use to tell the reducer what to do i.e. 'remove'
	}
	- in order to save space/organize your function you place everything inside of a sparate file called reducer.js that is then imported to the rest of the files
	- useReducer is a hook imported from react and used in all of the files that require it
Dispatch
	- function in your app wil take an object filled with different values and pass them on to the reducer.js
	--type: is the command you want to run
	--payload: is the relevant information that you will need to complete the function
	