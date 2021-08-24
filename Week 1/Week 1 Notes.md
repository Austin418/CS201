#every()

const numbers = [-1, -2, 20, 40, 50]

console.log(
	numbers.every((num) => num < 100)
)
...

#some()
Similar to .every() some checks if any are true

#reduce()
A method that adds to an output, it finds the accumulation of a number
This does nothing for non-number values, this is very useful for creating updated numbers of items
	items in your cart
	money raised by the class
	
	`
	const array = [2, 4, 6, 8, 10]
	array.reduce((total, current, index, arr) =>
	{
	return total + current
	}, 20)
	
	`
reduce has a lot going on there are 5 things that you can use:	
total is a variable that is automatically returned when the method ends

Optional starting value 
this is outside
