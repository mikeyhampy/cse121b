

//document.getElementById("message2").innerHTML = day;

/* FETCH */
// const express = require("express");

// const app = express();
// const port = process.env.SERVER_PORT || 8000;

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//   });

//const api_git_url = "https://github.com/ABSphreak/readme-jokes/blob/master/src/jokes.json";
const my_jokes = "sources/gitjokes.json"
let jokesJSON = {};

document.getElementById("outputDiv").innerHTML = "start";

function QAjokes(joke) {
    //joke
    var article = document.createElement("article");

    var question = document.createElement("h3");
    question.innerHTML = joke["q"];

    var answer = document.createElement("h3");
    answer.textContent = joke.a;

    article.appendChild(question);
    article.appendChild(answer);
    
    document.getElementById("outputDiv").innerHTML = joke["q"];
}

function output() {
    //get random number and access JSON number key
    var rand_num = Math.floor(Math.random() * 193)
    //var rand_num_string = rand_num.toString();
    var obj = {};
    var letter  = "q";
    obj = jokesJSON[0 + rand_num]

    if(obj.hasOwnProperty('q')) {

    // if(obj.hasOwnProperty()) {
        QAjokes(obj)
    } else {
        document.getElementById("outputDiv").innerHTML = "article2";
    }
    // document.getElementById("outputDiv").innerHTML = "function";
}

// Step 3: Create another function called getTemples. Make it an async function.
async function getJokes() {
    //var response = await fetch("https://github.com/ABSphreak/readme-jokes/blob/master/src/jokes.json", {
    //     method: 'GET', // *GET, POST, PUT, DELETE, etc.
    //     mode: 'no-cors',
    //     credentials: 'include', // no-cors, *cors, same-origin;
    //     body: JSON.stringify(response) // body data type must match "Content-Type" header
    // });

    //var jokesJSON = await response.text()
    //var jokesJSON = await response.json();

    // const newJSON = require(my_jokes);
    const response = await fetch(my_jokes);
    jokesJSON = await response.json();
    // jokesJSON = newJSON
    console.log(jokesJSON);
    output();
}


getJokes();

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset() {
    document.getElementById('temples').innerHTML = "";
}

// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
function sortBy() {
    reset();

    // sort alphabetically by name
    templeList.sort(function(temple1, templ2) {
        return temple1.templeName.localeCompare(templ2.templeName);
    });
    
    // filter by assending and dessending
    var select_filter = document.getElementById("sortBy").value;
    switch (select_filter) {
        case ("templeNameAscending"):
            output(templeList);
            break
        case ("templeNameDescending"):
            templeList.reverse();
            output(templeList);
    }
}

document.getElementById("jokemaker").addEventListener("click", output);

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
//document.getElementById("sortBy").addEventListener("change", sortBy);

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
