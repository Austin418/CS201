#BrowserRouter as <Route>
	'
	{BrowserRouter as Route}
	'
	
	import { BrowserRoute as Route } from 'react-route-dom'
	
	ReactDOM.render {
	<Route>
		<App />
	</Route>
	}
	
	
		<Route exact path='/' >
			<Home />
		</Route>
	
	<Route path='/About' >
			<About />
		</Route>
	
	<Route path="*">
		<Error/>
	</Route>
	
	- React will render every link that matches the requested URL on the routes
	
	<Switch>
		- Switch is another component that you can use to allow exclusively render a path
		- This stops the need for exact and make sure hte error page doesn't always render
		-Make sure that you list the page from most to least specific.
		
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			
	using react router we are able to ser up a switch component that will force ONLY the first path to match to render
			This allows us to create a "404 page not found" catch
			
			<Route path="*"
				   
				   
	Using routers means that you cant use <a/> tags
			
		
		
	
	
	