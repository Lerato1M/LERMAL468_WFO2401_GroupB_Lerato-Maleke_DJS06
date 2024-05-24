// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];


// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];


// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];



// Exercises
//ForEach Basics
console.log("Exercise 1:");
names.forEach(name => console.log(name));
provinces.forEach(province => console.log(province));
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

//Uppercase Transformation
console.log("\nExercise 2:");
console.log(provinces.map(province => province.toUpperCase()));

//Name Lengths
console.log("\nExercise 3:");
console.log(names.map(name => name.length));

//Sorting
console.log("\nExercise 4:");
console.log(provinces.slice().sort());

//Filtering-Cape
console.log("\nExercise 5:");
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(`Remaining provinces count: ${filteredProvinces.length}`);

//Finding- 'S'
console.log("\nExercise 6:");
console.log(names.map(name => name.includes('S')));

//Creating Object Mapping
console.log("\nExercise 7:");
console.log(names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {}));







// Advanced Exercises
console.log("\nAdvanced Exercises:");

// 1. Log Products: Map each product object to its name and join them with commas
console.log(products.map(product => product.product).join(", "));

// 2. Filter by Name Length: Filter out products with names longer than 5 characters
console.log(products.filter(product => product.product.length <= 5));

// 3. Price Manipulation: Filter out products without prices, convert prices to numbers, and calculate the total price
console.log(products.filter(product => product.price !== '' && !isNaN(Number(product.price)))
                   .reduce((total, product) => total + Number(product.price), 0));

// 4. Concatenate Product Names: Reduce the products array to concatenate all product names into a single string
console.log(products.reduce((acc, product) => acc += product.product + ", ", ""));

// 5. Find Extremes in Prices: Map prices to numbers, filter out NaN values, then find the highest and lowest prices
const prices = products.map(product => Number(product.price)).filter(price => !isNaN(price));
console.log(`Highest: ${Math.max(...prices)}. Lowest: ${Math.min(...prices)}.`);

// 6. Object Transformation: Reduce the products array to transform it into an object with keys 'name' and 'cost'
console.log(Object.entries(products.reduce((acc, product) => {
  acc[product.product] = { name: product.product, cost: Number(product.price) || 0 };
  return acc;
}, {})));
