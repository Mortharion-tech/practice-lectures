const jsonText = ' { "fact": "Cats are cool", "length":14 } '

//  parsing JSON to JS object
const jsObj = JSON.parse(jsonText);
console.log(jsObj);
//  object properties can be called with normal JS
console.log(jsObj.fact);
//  but NOT directly from JSON
console.log(jsonText.fact);     // undefined

//  formatting JS object (back) to JSON
const jsString = JSON.stringify(jsObj);
console.log(jsString);


//  fetch()
//  returning a Promise
const response = fetch('https://catfact.ninja/fact');

//  parsing the response to JSON
//  returning another Promise
const responseJson = response.then((res) => res.json());

//  returning JS object including the fact
responseJson.then((json) => console.log(json));

//  fact property directly accessible
responseJson.then((json) => console.log(json.fact));

//  formatting to stackable thens (same functionality)
const response2 = fetch('https://catfact.ninja/fact')
                    .then((res) => res.json())
                    .then((json) => alert(`Cat fact: ${json.fact}`))
//  adding catch() to handle any errors (like missing internet connection)                    
                    .catch((error) => alert('Failed to fetch cat data!'));