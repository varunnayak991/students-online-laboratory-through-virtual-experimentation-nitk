// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge",
        "main":    "<p></p>",
        "results": "<h5>Learn More</h5><p></p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "If the equivalent length of a 90º elbow is greater than the 45º elbow, the pressure loss across the 90º elbow is --------- the 45º elbow?",
            "a": [
                {"option": "greater than",      "correct": true},
                {"option": "lesser than",     "correct": false},
                {"option": "same as",      "correct": false}
               // {"option": "cannot say",      "correct": false}		// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:greater than</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:greater than</p>" // no comma here
        },
         { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": " Losses for flow through valves and fittings are expressed in terms of?",
            "a": [
                {"option": "drag coefficient",               "correct": false},
                {"option": "equivalent length of a straight pipe",   "correct": true},
                {"option": "shape factor",               "correct": false},
               {"option": "roughness factor", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Right answer</span> Ans:equivalent length of a straight pipe</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:equivalent length of a straight pipe</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "  The frictional loss from sudden contraction is proportional to the velocity head in the ------------ conduit.",
            "a": [
                {"option": "Larger",           "correct": false},
                {"option": "smaller",                  "correct": true}
              //  {"option": "always equal to 1,",  "correct": false},		
               // {"option": "can be less than, greater than or equal to 1",          "correct": false} // no comma here
            ],
             "correct": "<p><span>Right answer</span> Ans:smaller</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:smaller</p>" // no comma here
        },
        { // Question 4
            "q": " If the equivalent length of a 90º elbow is greater than the 45º elbow, the pressure loss across the 90º elbow is --------- the 45º elbow",
            "a": [
                {"option": "greater than",    "correct": true},
                {"option": "lesser than",     "correct": false},
		 {"option": "same as",     "correct": false}
		// {"option": "	5",     "correct": false}
		
		
               // {"option": "Pressure gauge reading of tank 1 and that of tank 2 are same",      "correct": true}
                //{"option": "1291",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:greater than</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans is:greater than</p>"  // no comma here
        },
       { // Question 5
            "q": " Losses for flow through valves and fittings are expressed in terms of",
            "a": [
                {"option": "drag coefficient",    "correct": false},
                {"option": "equivalent length of a straight pipe",     "correct": true},
		 {"option": "shape factor",  "correct": false},

                {"option": "roughness factor",  "correct": false} 


// no comma here
            ],
            "correct": "<p><span>Right answer</span> Ans:equivalent length of a straight pipe</p>",
            "incorrect": "<p><span>wrong</span> It's wrong,<br>Ans:equivalent length of a straight pipe</p>"  // no comma here
        } // no comma here
    ]
};
