// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!",
        "main":    "<p class='quiz-space'>Think you know all about recycling now? Take this quiz and find out.</p>",
        "results": "<h5>Learn more at the EPA's website! Happy recycling!</h5>",
        "level1":  "<p>Recycle Pro</p>",
        "level2":  "<p>Intermediate Recycler</p>",
        "level3":  "<p>Could Be Better</p>",
        "level4":  "<p>Never Recycled</p>",
        "level5":  "<p>What is recycling?</p>" // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "<p class='quiz-space'>How many millions of tons of trash are created every year in the U.S. alone?</p>",
            "a": [
                {"option": "258",      "correct": true},
                {"option": "534",     "correct": false},
                {"option": "285",      "correct": false},
                {"option": "679",     "correct": false} // no comma here
            ],
            "correct": "<p class='quiz-space quiz-answer'><span>Correct!</span> The U.S. produces 258 million tons of trash each year...talk about a dump.</p>",
            "incorrect": "<p class='quiz-space quiz-answer'><span>Whoops!</span> Yes, the first question is supposed to be easy, but this is just too important. The U.S. creates 258 million tons of trash each year.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "<p class='quiz-space'>Which of the following is not a way for recycled material to be collected?</p>",
            "a": [
                {"option": "curb-side",               "correct": false},
                {"option": "drop-off",   "correct": false},
                {"option": "deposit",               "correct": false},
                {"option": "throwing it out the window of your car", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p class='quiz-space quiz-answer'><span>Phew!</span> Thank you for recycling and not littering.</p>",
            "incorrect": "<p class='quiz-space quiz-answer'><span>Yikes!</span> You can leave it curb-side, drop it off and leave it at a deposit — you don't have to throw it out the window!</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "<p class='quiz-space'>Which item is made from recycled materials? Select ALL that apply.</p>",
            "a": [
                {"option": "newspaper",           "correct": true},
                {"option": "a couch",                  "correct": false},
                {"option": "steel can",  "correct": true},
                {"option": "road",          "correct": true} // no comma here
            ],
            "correct": "<p class='quiz-space quiz-answer'><span>Awesome!</span> Looks like someone read the slides!</p>",
            "incorrect": "<p class='quiz-space quiz-answer'><span>So close...</span> Maybe your couch is made from recycled materials, but chances are slim.</p>" // no comma here
        },
        { // Question 4
            "q": "<p class='quiz-space'>What type of plastic is something if it has a number 1 recycle symbol?</p>",
            "a": [
                {"option": "PET",    "correct": true},
                {"option": "XYZ",     "correct": false},
                {"option": "PPP",      "correct": false},
                {"option": "ABC",   "correct": false} // no comma here
            ],
            "correct": "<p class='quiz-space quiz-answer'><span>Recycle pro over here!</span> An example of a number 1 plastic is a peanut butter jar (but you probably already know that).</p>",
            "incorrect": "<p class='quiz-space quiz-answer'><span>Whoops!</span> Those aren't even real — go back to the slides.</p>" // no comma here
        },
        { // Question 5
            "q": "<p class='quiz-space'>How can you continue to recycle on your own? Select ALL that apply.</p>",
            "a": [
              {"option": "buy recycled when you can",    "correct": true},
              {"option": "use energy efficient bulbs",     "correct": true},
              {"option": "compost leftovers",      "correct": true},
              {"option": "visit the EPA's website on recycling in my area",   "correct": true} // no comma here
            ],
            "correct": "<p class='quiz-space quiz-answer'><span>Yay!</span> These are all great ways to recycle on your own.</p>",
            "incorrect": "<p class='quiz-space quiz-answer'><span>Almost there...</span> These are <em>all</em> great ways to recycle on your own!</p>" // no comma here
        } // no comma here
    ]
};
