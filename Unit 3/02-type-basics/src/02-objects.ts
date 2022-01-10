
enum Role {
  "ADMIN",
  "READONLY",
  "AUTHOR"
}
const person: {
  name: string;
  age: number;
  tags: string[];
  description: [number, string]

} = {
  name : 'timmy',
  age: 50,
  tags: ['soccer', "cooking"],
  description: [1234, 'soccerball'],

  // product.description.push = ("testing")
}
console.log(person);
