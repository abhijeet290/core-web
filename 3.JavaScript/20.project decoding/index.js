const questionBank = [
  // 1-10: Batting Records
  {
    question: "Who has the most centuries in international cricket?",
    options: [
      "Sachin Tendulkar",
      "Virat Kohli",
      "Ricky Ponting",
      "Jacques Kallis",
    ],
    answer: "Sachin Tendulkar",
  },
  {
    question: "Who was the first player to score 10,000 runs in ODIs?",
    options: [
      "Viv Richards",
      "Sachin Tendulkar",
      "Brian Lara",
      "Sanath Jayasuriya",
    ],
    answer: "Sachin Tendulkar",
  },
  {
    question: "Who holds the record for highest individual Test score (400*)?",
    options: [
      "Brian Lara",
      "Matthew Hayden",
      "Virender Sehwag",
      "Mahela Jayawardene",
    ],
    answer: "Brian Lara",
  },
  {
    question: "Fastest ODI century by balls faced?",
    options: [
      "AB de Villiers (31)",
      "Corey Anderson (36)",
      "Shahid Afridi (37)",
      "Glenn Maxwell (40)",
    ],
    answer: "AB de Villiers (31)",
  },
  {
    question: "Most runs in a single World Cup tournament?",
    options: [
      "Sachin Tendulkar (2003)",
      "Matthew Hayden (2007)",
      "Rohit Sharma (2019)",
      "Martin Guptill (2015)",
    ],
    answer: "Rohit Sharma (2019)",
  },

  // 11-20: Bowling Records
  {
    question: "Highest wicket-taker in Test cricket?",
    options: [
      "Shane Warne",
      "Muttiah Muralitharan",
      "James Anderson",
      "Anil Kumble",
    ],
    answer: "Muttiah Muralitharan",
  },
  {
    question: "Best bowling figures in an ODI innings?",
    options: [
      "Chaminda Vaas (8/19)",
      "Glenn McGrath (7/15)",
      "Shahid Afridi (7/12)",
      "Anil Kumble (10/74)",
    ],
    answer: "Chaminda Vaas (8/19)",
  },
  {
    question: "Fastest to 500 Test wickets?",
    options: [
      "Muttiah Muralitharan",
      "Shane Warne",
      "Anil Kumble",
      "Glenn McGrath",
    ],
    answer: "Muttiah Muralitharan",
  },
  {
    question: "Who took cricket's first hat-trick in World Cups?",
    options: ["Chethan Sharma", "Wasim Akram", "Brett Lee", "Lasith Malinga"],
    answer: "Chethan Sharma",
  },
  {
    question: "Most wickets in a single World Cup tournament?",
    options: [
      "Glenn McGrath (2007)",
      "Mitchell Starc (2015)",
      "Muttiah Muralitharan (2003)",
      "Shahid Afridi (2011)",
    ],
    answer: "Mitchell Starc (2015)",
  },

  // 21-30: Team Records
  {
    question: "Most successful Test team by win percentage?",
    options: ["Australia", "South Africa", "India", "England"],
    answer: "Australia",
  },
  {
    question: "First team to score 400+ in an ODI?",
    options: ["South Africa", "Australia", "India", "Sri Lanka"],
    answer: "Australia",
  },
  {
    question: "Lowest team total in Test cricket?",
    options: [
      "26 by New Zealand",
      "36 by Australia",
      "42 by England",
      "45 by India",
    ],
    answer: "26 by New Zealand",
  },
  {
    question: "Most consecutive ODI wins?",
    options: [
      "21 by Australia",
      "18 by South Africa",
      "15 by India",
      "12 by West Indies",
    ],
    answer: "21 by Australia",
  },
  {
    question: "Most T20 World Cup titles?",
    options: ["West Indies", "England", "India", "Australia"],
    answer: "West Indies",
  },

  // 31-40: World Cup History
  {
    question: "First World Cup winning captain?",
    options: ["Clive Lloyd", "Kapil Dev", "Allan Border", "Arjuna Ranatunga"],
    answer: "Clive Lloyd",
  },
  {
    question: "Who hit the winning runs in 2011 World Cup final?",
    options: ["MS Dhoni", "Gautam Gambhir", "Yuvraj Singh", "Virat Kohli"],
    answer: "MS Dhoni",
  },
  {
    question: "First player to score 500+ runs in a World Cup?",
    options: [
      "Sachin Tendulkar",
      "Matthew Hayden",
      "Rohit Sharma",
      "Martin Guptill",
    ],
    answer: "Sachin Tendulkar",
  },
  {
    question: "2019 World Cup winner?",
    options: ["England", "New Zealand", "Australia", "India"],
    answer: "England",
  },
  {
    question: "Man of the Tournament in 2003 World Cup?",
    options: [
      "Ricky Ponting",
      "Sachin Tendulkar",
      "Brett Lee",
      "Herschelle Gibbs",
    ],
    answer: "Sachin Tendulkar",
  },

  // 41-50: IPL
  {
    question: "Most IPL titles won by a team?",
    options: [
      "Mumbai Indians",
      "Chennai Super Kings",
      "Kolkata Knight Riders",
      "Rajasthan Royals",
    ],
    answer: "Mumbai Indians",
  },
  {
    question: "Highest run-scorer in IPL history?",
    options: ["Virat Kohli", "Suresh Raina", "Rohit Sharma", "David Warner"],
    answer: "Virat Kohli",
  },
  {
    question: "Highest wicket-taker in IPL?",
    options: [
      "Lasith Malinga",
      "Dwayne Bravo",
      "Amit Mishra",
      "Bhuvneshwar Kumar",
    ],
    answer: "Dwayne Bravo",
  },
  {
    question: "First IPL hat-trick taken by?",
    options: [
      "Lakshmipathy Balaji",
      "Amit Mishra",
      "Yuvraj Singh",
      "Shane Warne",
    ],
    answer: "Lakshmipathy Balaji",
  },
  {
    question: "Fastest IPL century?",
    options: ["Chris Gayle", "AB de Villiers", "KL Rahul", "David Miller"],
    answer: "Chris Gayle",
  },

  // 51-60: Women's Cricket
  {
    question: "First woman to score 200 in ODIs?",
    options: [
      "Belinda Clark",
      "Mithali Raj",
      "Meg Lanning",
      "Charlotte Edwards",
    ],
    answer: "Belinda Clark",
  },
  {
    question: "2023 Women's Premier League winner?",
    options: [
      "Mumbai Indians",
      "Delhi Capitals",
      "Royal Challengers Bangalore",
      "UP Warriorz",
    ],
    answer: "Mumbai Indians",
  },
  {
    question: "Most runs in Women's ODIs?",
    options: ["Mithali Raj", "Charlotte Edwards", "Suzie Bates", "Meg Lanning"],
    answer: "Mithali Raj",
  },
  {
    question: "First woman to take 300 ODI wickets?",
    options: [
      "Jhulan Goswami",
      "Cathryn Fitzpatrick",
      "Lisa Sthalekar",
      "Anisa Mohammed",
    ],
    answer: "Jhulan Goswami",
  },
  {
    question: "2020 Women's T20 World Cup winner?",
    options: ["Australia", "England", "India", "West Indies"],
    answer: "Australia",
  },

  // 61-70: Rules & Innovations
  {
    question: "When was DRS first introduced?",
    options: ["2008", "2011", "2013", "2015"],
    answer: "2008",
  },
  {
    question: "First day-night Test match was between?",
    options: [
      "Australia-England",
      "Australia-New Zealand",
      "India-Bangladesh",
      "South Africa-Zimbabwe",
    ],
    answer: "Australia-New Zealand",
  },
  {
    question: "When was T20 cricket introduced internationally?",
    options: ["2003", "2005", "2007", "2009"],
    answer: "2005",
  },
  {
    question: "First team to use a 'super sub' in ODIs?",
    options: ["Australia", "England", "South Africa", "Pakistan"],
    answer: "Australia",
  },
  {
    question: "The 'Mankading' dismissal is named after which player?",
    options: [
      "Vinoo Mankad",
      "Mansoor Ali Khan Pataudi",
      "Mulvantrai Mankad",
      "Madhav Mankad",
    ],
    answer: "Vinoo Mankad",
  },

  // 71-80: Memorable Moments
  {
    question: "Who hit 'six sixes in an over' in international cricket first?",
    options: [
      "Herschelle Gibbs",
      "Yuvraj Singh",
      "Kieron Pollard",
      "Ravi Shastri",
    ],
    answer: "Herschelle Gibbs",
  },
  {
    question: "2019 World Cup final was tied after how many overs?",
    options: ["50", "100", "Super Over", "102 (2 super overs)"],
    answer: "102 (2 super overs)",
  },
  {
    question: "Who scored the 'Desert Storm' innings?",
    options: ["Rahul Dravid", "Sachin Tendulkar", "Brian Lara", "Steve Waugh"],
    answer: "Sachin Tendulkar",
  },
  {
    question: "First tied Test match was between?",
    options: [
      "Australia-West Indies",
      "India-Australia",
      "England-Australia",
      "South Africa-England",
    ],
    answer: "Australia-West Indies",
  },
  {
    question: "Who took 10 wickets in an innings (best Test figures)?",
    options: [
      "Jim Laker",
      "Anil Kumble",
      "Shane Warne",
      "Muttiah Muralitharan",
    ],
    answer: "Jim Laker",
  },

  // 81-90: General Sports
  {
    question: "Most Olympic gold medals (individual)?",
    options: [
      "Michael Phelps (23)",
      "Larisa Latynina (9)",
      "Paavo Nurmi (9)",
      "Mark Spitz (9)",
    ],
    answer: "Michael Phelps (23)",
  },
  {
    question: "Longest reigning WWE Champion?",
    options: ["Bruno Sammartino", "Hulk Hogan", "John Cena", "Roman Reigns"],
    answer: "Bruno Sammartino",
  },
  {
    question: "First Formula 1 driver to win 7 World Championships?",
    options: [
      "Michael Schumacher",
      "Lewis Hamilton",
      "Juan Manuel Fangio",
      "Ayrton Senna",
    ],
    answer: "Lewis Hamilton",
  },
  {
    question: "Most Grand Slam singles titles (male)?",
    options: [
      "Roger Federer (20)",
      "Rafael Nadal (22)",
      "Novak Djokovic (24)",
      "Pete Sampras (14)",
    ],
    answer: "Novak Djokovic (24)",
  },
  {
    question: "First football World Cup winner?",
    options: ["Brazil", "Uruguay", "Italy", "Argentina"],
    answer: "Uruguay",
  },

  // 91-100: Mixed
  {
    question: "Which country has won the most Olympic gold medals?",
    options: ["China", "Russia", "United States", "Great Britain"],
    answer: "United States",
  },
  {
    question: "What is the capital of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    answer: "Ottawa",
  },
  {
    question: "Largest planet in our solar system?",
    options: ["Earth", "Saturn", "Jupiter", "Neptune"],
    answer: "Jupiter",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Michelangelo",
    ],
    answer: "Leonardo da Vinci",
  },
  {
    question: "First element on the periodic table?",
    options: ["Oxygen", "Gold", "Hydrogen", "Helium"],
    answer: "Hydrogen",
  },
];

function RandomQuestion() {
  // const data = new Set();
  // // use set for unique object

  // while (data.size != 10) {
  //   const index = Math.floor(Math.random() * questionBank.length);
  //   data.add(questionBank[index]);
  // }

  // // convert set into array
  // return [...data];

  // sort function (time complexity is n(logn))
  // questionBank.sort(()=>Math.random()-0.5)
  // return questionBank.slice(0,15)

  const arr=[]
  let length=questionBank.length
  for (let i = 0; i < 10; i++) {
    const index=Math.floor(Math.random()*length)
    arr.push(questionBank[index])
    // swap
    // [arr[index],arr[length-1]]=[arr[length-1],arr[index]]
    [questionBank[index],questionBank[length-1]]=[questionBank[length-1],questionBank[index]]
    length--
  }
  return arr
}

//  select the form and insert all the elements into it

// obj =  { question: "Who has the most centuries in international cricket?", options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"], answer: "Sachin Tendulkar" },

const form = document.querySelector("form");

const problem = RandomQuestion();

const original_answer = {};
// key value

problem.forEach((obj, index) => {
  const div_element = document.createElement("div");
  div_element.className = "question";
  original_answer[`q${index + 1}`] = obj["answer"];

  const para = document.createElement("p");
  para.textContent = `${index + 1}. ${obj["question"]}`;
  div_element.appendChild(para);

  // create 4 options

  // ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"],

  obj["options"].forEach((data) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `q${index + 1}`;
    input.value = data;

    label.appendChild(input);
    label.appendChild(document.createTextNode(data));
    div_element.appendChild(label);
    div_element.appendChild(document.createElement("br"));
  });

  form.appendChild(div_element);
});

const button = document.createElement("button");
button.type='submit'
button.className='submit-btn'
button.textContent='Submit'

form.appendChild(button)

const originalAnswers = {};
problem.forEach((obj, index) => {
  originalAnswers[`q${index + 1}`] = obj.answer;
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);

  let result = 0;
  const totalQuestions = problem.length;

  for (let [key, value] of data.entries()) {
    if (value === originalAnswers[key]) {
      result++;
    }
  }

  const out = document.getElementById('out');
  out.innerText = `${result} out of ${totalQuestions} is correct`;

  // No need to append the out element if it's already in the DOM
  // document.getElementById('container').append(out);

  form.reset();
});