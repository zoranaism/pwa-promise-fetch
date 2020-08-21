var button = document.querySelector("#start-button");
var output = document.querySelector("#output");

button.addEventListener("click", function () {
  // Create a new Promise here and use setTimeout inside the function you pass to the constructor

  // var promise = new Promise(function (resolve, reject) {
  //   setTimeout(function () {
  //     // <- Store this INSIDE the Promise you created!
  //     // Resolve the following URL: https://swapi.co/api/people/1
  //     resolve("https://jsonplaceholder.typicode.com/users/1");
  //   }, 3000);
  // })
  //   .then(function (url) {
  //     return fetch(url);
  //   })
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     output.textContent = data.name;
  //   });

  var promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
      // <- Store this INSIDE the Promise you created!
      // Resolve the following URL: https://swapi.co/api/people/1
      resolve("https://httpbin.org/puts");
    }, 3000);
  })
    .then(function (url) {
      return fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ person: { name: "Zox", age: 31 } }),
      });
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      output.textContent = data.json.person.name;
    })
    .catch(function(err) {
      output.textContent = err;
    });

  // PUT	/posts/1

  // Handle the Promise "response" (=> the value you resolved) and return a fetch()
  // call to the value (= URL) you resolved (use a GET request)

  // Handle the response of the fetch() call and extract the JSON data, return that
  // and handle it in yet another then() block

  // Finally, output the "name" property of the data you got back (e.g. data.name) inside
  // the "output" element (see variables at top of the file)

  // Repeat the exercise with a PUT request you send to https://httpbin.org/put
  // Make sure to set the appropriate headers (as shown in the lecture)
  // Send any data of your choice, make sure to access it correctly when outputting it
  // Example: If you send {person: {name: 'Max', age: 28}}, you access data.json.person.name
  // to output the name (assuming your parsed JSON is stored in "data")

  // To finish the assignment, add an error to URL and add handle the error both as
  // a second argument to then() as well as via the alternative taught in the module
});
