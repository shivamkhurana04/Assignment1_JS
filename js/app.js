// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables */
var synth = window.speechSynthesis;
var textToSpeak = '';
var generatedPhraseDisplay = document.getElementById('generatedPhrase');

// Arrays for random phrase generation
var nouns = ['The Turkey', 'Mom', 'Dad', 'The Dog', 'My Teacher', 'The Elephant', 'The Cat'];
var verbs = ['sat on', 'ate', 'danced with', 'saw', 'does not like', 'kissed'];
var adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var pronouns = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug'];
var places = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

// Global variables for individual components
var randomNoun = '';
var randomVerb = '';
var randomAdjective = '';
var randomPronoun = '';
var randomPlace = '';

/* Functions */
function generateRandomPhrase() {
    // Generate individual components
    randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
    randomPlace = places[Math.floor(Math.random() * places.length)];

    // Display the generated components on the webpage
    generatedPhraseDisplay.textContent = 'Generated Phrase: ' + randomNoun + ' ' + randomVerb + ' ' + randomAdjective + ' ' + randomPronoun + ' ' + randomPlace + '\n';
}

function speakNow() {
    // Concatenate the individual components into a sentence
    textToSpeak = randomNoun + ' ' + randomVerb + ' ' + randomAdjective + ' ' + randomPronoun + ' ' + randomPlace;

    // Speak the sentence
    var utterThis = new SpeechSynthesisUtterance(textToSpeak);
    synth.speak(utterThis);
}

// Function to display words in the respective list
function displayWords(category, listId) {
    var listElement = document.getElementById(listId);
    listElement.innerHTML = ''; // Clear previous content

    category.forEach(function (word) {
        var listItem = document.createElement('li');
        listItem.textContent = word;
        listElement.appendChild(listItem);
    });
}

// Display words on page load
displayWords(nouns, 'nounsList');
displayWords(verbs, 'verbsList');
displayWords(adjectives, 'adjectivesList');
displayWords(pronouns, 'pronounsList');
displayWords(places, 'placesList');

/* Event Listeners for Word Generation Buttons */
document.getElementById('generateNounButton').addEventListener('click', function () {
    randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    generatedPhraseDisplay.textContent = 'Generated Noun: ' + randomNoun;
});

document.getElementById('generateVerbButton').addEventListener('click', function () {
    randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    generatedPhraseDisplay.textContent = 'Generated Verb: ' + randomVerb;
});

document.getElementById('generateAdjectiveButton').addEventListener('click', function () {
    randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    generatedPhraseDisplay.textContent = 'Generated Adjective: ' + randomAdjective;
});

document.getElementById('generatePronounButton').addEventListener('click', function () {
    randomPronoun = pronouns[Math.floor(Math.random() * pronouns.length)];
    generatedPhraseDisplay.textContent = 'Generated Pronoun: ' + randomPronoun;
});

document.getElementById('generatePlaceButton').addEventListener('click', function () {
    randomPlace = places[Math.floor(Math.random() * places.length)];
    generatedPhraseDisplay.textContent = 'Generated Place: ' + randomPlace;
});

// Button for generating individual components
document.getElementById('generateButton').addEventListener('click', generateRandomPhrase);

// Button for speaking the generated phrase
document.getElementById('speakButton').addEventListener('click', speakNow);