var carPosition = 0;
var inputFieldWidth = 0;
var currentSentence = "";
var oneSecondInMilliseconds = 1000;
const carElement = document.querySelector('.car');
const carContainerElement = document.querySelector('.car-container');
var countDownTarget = new Date().getTime() + 11 * oneSecondInMilliseconds;
var timeoutTarget = countDownTarget + 60 * 1000;

window.onload = function() {
    setRandomSentence();
    displaySentence();
    setInputFieldWidth();
    setTimeoutForGame();
    setInterval(startTimer, oneSecondInMilliseconds);
}

function setRandomSentence() {
    var randomIndex = Math.floor(Math.random() * randomSentences.length);
    currentSentence = randomSentences[randomIndex];
}

function displaySentence() {
    var textElement = document.querySelector('p');
    textElement.textContent = currentSentence;
}

function setInputFieldWidth() {
    inputFieldWidth = (carContainerElement.offsetWidth - carElement.offsetWidth - 10) / currentSentence.length;
}

function setTimeoutForGame() {
    var countDownInSeconds = calculateToSecond(countDownTarget, new Date().getTime());
    var timeout = timeoutTarget - countDownTarget + countDownInSeconds * oneSecondInMilliseconds;
    setTimeout(function () { alert("TIMEOUT!"); }, timeout);
}

function highlightInput(input) {
    var textElement = document.querySelector('p');
    
    if(currentSentence.length == input.length) {
        var seconds = calculateToSecond(new Date().getTime(), timeoutTarget);
        alert('You finished it in ' + (60 + seconds) + ' seconds');
    }
    var newText = currentSentence;
    
    if(!currentSentence.startsWith(input)) {
        var mismatchIndex = findMismatchIndex(currentSentence, input);
        newText = currentSentence.slice(0, mismatchIndex)
        + '<span style="color: red;">' + currentSentence.slice(mismatchIndex, input.length) + '</span>'
        + currentSentence.slice(input.length, currentSentence.length);
    } else {
        requestAnimationFrame(moveCar);
    }

    textElement.innerHTML = newText;
}

function calculateToSecond(firstTime, secondTime) {
    var distance = firstTime - secondTime;
    return Math.floor((distance % (1000 * 60)) / 1000);
}

function startTimer() {
    var seconds = calculateToSecond(countDownTarget, new Date().getTime());
    document.getElementById("countdown").innerHTML = "Time remaining: " + seconds + "s ";
    
    if (seconds <= 0) {
        document.getElementById("countdown").hidden = true;
        var input = document.querySelector("input");
        input.disabled = false;
        input.focus();
        clearInterval();
    }
}

function moveCar() {
    carPosition += inputFieldWidth;
    carElement.style.left = carPosition + 'px';
}

function findMismatchIndex(mainString, substring) {
    for (let i = 0; i < substring.length; i++) {
        if (mainString[i] !== substring[i]) {
            return i;
        }
    }

    return substring.length;
}

var randomSentences = [
    "The old oak tree creaked in the wind.",
    "Butterflies fluttered around the blooming flowers.",
    "The chef expertly diced the vegetables for the stew.",
    "Waves crashed against the rocky shore.",
    "A gentle breeze rustled through the tall grass.",
    "The cat stretched lazily in the sunbeam.",
    "Children laughed and played in the park.",
    "The stars twinkled in the night sky.",
    "Steam rose from the cup of hot tea.",
    "The clock ticked loudly in the silent room.",
    "The baker kneaded the dough with practiced hands.",
    "Raindrops pattered against the windowpane.",
    "A rainbow arched across the cloudy sky.",
    "Birds chirped merrily in the trees.",
    "The mountain peak was shrouded in mist.",
    "A squirrel scampered up the tree trunk.",
    "The violinist played a haunting melody.",
    "Fireflies danced in the darkness of the forest.",
    "The scent of fresh bread filled the air.",
    "Leaves crunched underfoot as they walked through the woods.",
    "The artist dipped the brush into vibrant colors.",
    "Snowflakes drifted gently to the ground.",
    "The river flowed peacefully through the valley.",
    "The bonfire crackled and popped.",
    "The detective examined the clues with a furrowed brow.",
    "Lightning flashed across the sky.",
    "The newborn baby slept soundly in its crib.",
    "Bees buzzed around the blooming flowers.",
    "The gardener tended to the roses with care.",
    "The hiker marveled at the breathtaking view from the summit.",
    "The owl hooted in the moonlit night.",
    "The horse galloped across the open field.",
    "The waves lapped at the sandy shore.",
    "The actor delivered a powerful monologue on stage.",
    "Fog enveloped the city in a mysterious haze.",
    "The scientist conducted experiments in the laboratory.",
    "The sound of distant thunder rumbled in the distance.",
    "The child blew bubbles in the backyard.",
    "The wind howled through the trees.",
    "The fisherman cast his line into the sparkling water.",
    "The dancer twirled gracefully across the stage.",
    "The smell of freshly baked cookies wafted from the kitchen.",
    "The pilot guided the plane through the turbulent skies.",
    "The sun set in a blaze of orange and pink hues.",
    "The author penned the final chapter of the novel.",
    "The geologist studied the layers of rock.",
    "A shooting star streaked across the night sky.",
    "The baker decorated the cake with intricate designs.",
    "The sound of church bells echoed through the village.",
    "The dragon breathed fire and smoke.",
    "The pianist played a melancholy tune.",
    "The scent of pine needles filled the forest.",
    "The athlete sprinted towards the finish line.",
    "The train rattled down the tracks.",
    "The moon cast a silvery glow over the landscape.",
    "The farmer harvested the ripe crops.",
    "The comedian told jokes that had the audience roaring with laughter.",
    "The glacier slowly carved its way through the valley.",
    "The artist sculpted a masterpiece out of clay.",
    "The photographer captured the perfect shot.",
    "The children skipped stones across the calm surface of the lake.",
    "The lawyer presented evidence to the jury.",
    "The singer hit a high note that sent shivers down the audience's spine.",
    "The sunflower turned its face towards the sun.",
    "The hiker followed the winding trail through the forest.",
    "The bee buzzed from flower to flower, collecting nectar.",
    "The magician pulled a rabbit out of his hat.",
    "The aroma of coffee filled the café.",
    "The storm clouds gathered ominously overhead.",
    "The artist mixed colors on the palette.",
    "The motorcyclist revved the engine before speeding off down the highway.",
    "The archaeologist unearthed ancient artifacts buried beneath the sand.",
    "The baker rolled out the dough for the pie crust.",
    "The cat curled up on the windowsill and watched the world go by.",
    "The athlete leaped over the hurdle with ease.",
    "The violinist drew the bow across the strings, producing a haunting melody.",
    "The scientist peered through the microscope at the tiny organisms.",
    "The fire crackled and popped, casting shadows on the walls.",
    "The writer scribbled ideas in a notebook.",
    "The gardener watered the plants with a gentle spray from the hose.",
    "The snowstorm blanketed the town in white.",
    "The pianist's fingers flew across the keys.",
    "The chef seasoned the dish with a pinch of salt.",
    "The horse nuzzled its owner affectionately.",
    "The astronaut floated weightlessly in space.",
    "The carpenter hammered nails into the wooden boards.",
    "The baker frosted the cupcakes with swirls of buttercream.",
    "The sailor navigated by the stars.",
    "The guitarist strummed the chords of a familiar song.",
    "The farmer plowed the fields in preparation for planting.",
    "The dancer leaped gracefully into the air.",
    "The cyclist pedaled furiously up the steep hill.",
    "The photographer captured the beauty of the sunset in a stunning photograph.",
    "The bee buzzed around the hive, gathering pollen.",
    "The artist sketched the outline of a landscape.",
    "The singer's voice filled the concert hall with emotion.",
    "The storm raged outside, but they were safe and warm indoors.",
    "The scientist made a groundbreaking discovery that would change the course of history.",
    "The bonfire illuminated the faces of those gathered around it.",
    "The writer typed furiously, trying to meet a deadline.",
    "The gardener pruned the bushes to encourage new growth.",
    "The snowfall was heavy, turning everything into a winter wonderland.",
    "The pianist performed a sonata with passion and precision.",
    "The chef plated the dish with artistic flair.",
    "The horse neighed and stamped its hoof impatiently.",
    "The astronaut marveled at the beauty of the Earth from space.",
    "The carpenter carved intricate designs into the wood.",
    "The baker's oven emitted a delicious aroma of freshly baked bread.",
    "The sailor hoisted the sails and set off on a new adventure.",
    "The guitarist played a soulful melody that brought tears to the eyes of the audience.",
    "The farmer harvested the ripe fruits from the orchard.",
    "The dancer spun and twirled across the stage with grace.",
    "The cyclist raced past, leaving a trail of dust in their wake.",
    "The photographer adjusted the camera settings to capture the perfect shot.",
    "The bee pollinated the flowers, ensuring their continued growth.",
    "The artist painted a vivid sunset with bold strokes of color.",
    "The singer's voice was like velvet, smooth and rich.",
    "The storm passed, leaving behind a rainbow in its wake.",
    "The writer penned the final sentence of the novel with a sense of satisfaction.",
    "The gardener planted seeds in neat rows, anticipating the coming harvest.",
    "The snow melted under the"
];