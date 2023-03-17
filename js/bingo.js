// These are the bingo slots
var bingo_spots = [
    "EXTREME CLOSEUP",
    "SERIAL KILLER SITE",
    "THE DEMON SCREECH",
    "TINY ITEM FOR NO REASON",
    "GIRL IN COLD BODY OF WATER",
    "WANNA SEE A DEAD BODY?",
    "SMALL BLACK DRESS",
    "WITCHY WOMAN",
    "GARLIC KNOTS",
    "DARK FOREST",
    "THE DEMON SCREECH",
    "RUSTY BATHTUB",
    "FIRE",
    "GIRL on GIRL",
    "SEPIA",
    "DOUBLE THREAT",
    "BLACK AND WHITE",
    "SUPER NATURAL",
    "SO EASY A CAVEMAN CAN",
    "GANDALF RILEY FRODO",
    "UP CLOSE NATURE",
    "KARL WHIPS HIS HAIR",
    "PACIFIC NW OBVIOUS",
    "BLONDE LAWYER",
    "SAX",
]


// Shuffles the Array (in-place)
//
// Referenced for below:
// https://stackoverflow.com/questions/1519736/random-shuffling-of-an-array
// The Fisher-Yates method for shuffling an array. (This mutates the array.)
// More information: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
// referenced for porting to Javascript https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// Shuffling happens in place, so space complexity is O(n).
// Runtime complexity is linear, O(n)
function shuffleArray(array)
{
    var rnd_idx;
    // linear runtime based on the number of elements in the array
    for (let i = array.length - 1; i > 0; --i) {  
        rnd_idx = Math.floor(Math.random() * (i + 1));

        // swap elements
        [array[i], array[rnd_idx]] = [array[rnd_idx], array[i]];
    }

}

// function populates the bingo card from the array
function fillCard(source, doc) {
    // bingo_card = document.getElementsByClassName("bingo_card")[0];
    const bingo_card = doc.getElementById("bingo_card");

    // fill in the cells
    for(let i = 0; i < source.length; ++i) {
        bingo_card.rows[Math.floor(i/5)+1].cells[i%5].textContent = source[i];
    }
}

// function clears the bingo card
function clearCard(doc) {
    const bingo_card = doc.getElementById("bingo_card");

    // fill in the cells
    for(let i = 0; i < 25; ++i) {
        bingo_card.rows[Math.floor(i/5)+1].cells[i%5].className = "";
    }
}



// dark mode feature
// from https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/
// extensive writeup on feature mostly copied.
const btn = document.querySelector(".btn-toggle-dark");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
  } else {
    document.body.classList.toggle("dark-theme");
  }
});

// adds click event that will add cells to the marked class.
document.addEventListener('click', function handleClick(event) {
   event.target.classList.toggle('marked');

});
  

shuffleArray(bingo_spots);
fillCard(bingo_spots, document);