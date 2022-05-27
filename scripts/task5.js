

//document.getElementById("message2").innerHTML = day;

/* FETCH */

var rand_num = 0;
const api_git_url = "https://github.com/ABSphreak/readme-jokes/blob/master/src/jokes.json";
document.getElementById("outputDiv").innerHTML = "start";

function QAjokes(joke) {
    //joke
    var article = document.createElement("article");

    var question = document.createElement("h3");
    question.textContent = joke.q;

    var answer = document.createElement("h3");
    answer.textContent = joke.a;

    article.appendChild(question);
    article.appendChild(answer);
    
    document.getElementById("outputDiv").innerHTML = "article";
}

function output() {
    //get random number and access JSON number key
    // rand_num = Math.floor(Math.random() * 193)
    // var obj = JSON.parse(jokesJSON.rand_num);

    // if(obj.hasOwnProperty("q")) {
    //     QAjokes(jokesJSON)
    // } else {
    //     document.getElementById("outputDiv").innerHTML = "article2";
    // }
    document.getElementById("outputDiv").innerHTML = "function";
}

// Step 3: Create another function called getTemples. Make it an async function.
async function getJokes() {
    const response = await fetch(api_git_url);
    const jokesJSON = await response.json();
    console.log(jokesJSON)
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
