// CSE121B final project
// By: Michael Hampton
// Spring 2022

// Global variables
const my_jokes = "sources/gitjokes.json"
let jokesJSON = {};
var rand_Num = 0;

//show punchline
function JokeAnswers() {
    let joke_path = jokesJSON[rand_Num];

    // if Q&A
    if(joke_path.hasOwnProperty('q')) {
            document.getElementById("outputAnswer").innerHTML = joke_path["a"];
        } else {
            // if no punchline
            document.getElementById("outputAnswer").innerHTML = 'There is STILL no punchline!!!';
        }
}

// show joke
function output() {
    // clear answer
    document.getElementById("outputAnswer").innerHTML = '';

    //get random number and access JSON number key
    rand_Num = Math.floor(Math.random() * 193)
    let joke_path = jokesJSON[rand_Num];

    //check the type of question
    if(joke_path.hasOwnProperty('q')) {
        // if Q&A
        document.getElementById("outputQuestion").innerHTML = joke_path["q"];
    } else {
        //if it's a joke with no punchliine (IYKYK)
        document.getElementById("outputQuestion").innerHTML = joke_path;
        document.getElementById("outputAnswer").innerHTML = 'There is no punchline!';
    }
}


// get JSON and output to screen
async function getJokes() {
    //get JSON and push to global variable
    const response = await fetch(my_jokes);
    jokesJSON = await response.json();
 
    //call output
    output();
}

// set up screen and button listeners
getJokes();
document.getElementById("jokemaker").addEventListener("click", output);
document.getElementById("punchline").addEventListener("click", JokeAnswers);