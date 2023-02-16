

let user = document.querySelector(".user button")
let start = document.querySelector(".knowledge button")
let create = document.querySelector(".btn button:first-of-type")
let quit = document.querySelector(".btn button:last-of-type")
let head = document.querySelector(".user h1")
let input = document.querySelector(".username input")
let take = document.querySelector(".take")
let ankor = document.querySelectorAll(".mid a")
let page2 = document.querySelector("#page2")
let logout = document.querySelector(".logout")
let logout1 = document.querySelector("#page2 .logout button")

function checkusername() {
    if (sessionStorage.getItem("user")) {
        user.style.display = "none"
        head.innerHTML = sessionStorage.getItem("user")
        logout.style.display = "block"
    }
}

logout.onclick = () => {
    deleteall()
    location.reload()
}
logout1.onclick = () => {
    deleteall()
    location.reload()
}


function deleteall() {
    sessionStorage.clear()
}


checkusername()

user.onclick = () => {
    take.style.display = "block"
}
create.onclick = () => {
    if (input.value.length === 0) {
        alert("Username can't be empty")
    }
    else {
        sessionStorage.setItem("user", input.value)
        let save = sessionStorage.getItem("user")
        head.innerHTML = save
        user.style.display = "none"
        take.style.display = "none"
        checkusername()
        logout.style.display = "block"
    }
}
quit.onclick = () => {
    take.style.display = "none"

}
start.onclick = () => {
    if (sessionStorage.getItem("user")) {
        document.querySelector("#page1").style.display = "none"
        document.querySelector("#page2").style.display = "block"
        document.querySelector("#page2 .save h1").innerHTML = sessionStorage.getItem("user")
    }
    else {
        alert("Create Your Username")
    }
}

const form = document.querySelector("#myForm");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const selectedOption = document.querySelector("input[name='select']:checked").value;
    sessionStorage.setItem("topic", selectedOption)
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    sessionStorage.setItem("date", formattedDate)
    if (selectedOption === "Music") {
        page2.style.display = "none"
        page3.style.display = "flex"
        document.querySelector("#page3 .header h1").innerHTML = selectedOption + " " + "Quiz"
        timer()
        loadquestion1()
    }
    else if (selectedOption === "Modern Art") {
        page2.style.display = "none"
        page3.style.display = "flex"
        document.querySelector("#page3 .header h1").innerHTML = selectedOption + " " + "Quiz"
        timer()
        loadquestion2()
    }
    else {
        page2.style.display = "none"
        page3.style.display = "flex"
        document.querySelector("#page3 .header h1").innerHTML = selectedOption + " " + "Quiz"
        timer()
        loadquestion()

    }
});




const quiz = [
    {
        question: "Which of the following is a server-side Java Script object?",
        a: "Function",
        b: "File",
        c: "File Upload",
        d: "Date",
        ans: "ans2",
    },
    {
        question: " To insert a JavaScript into an HTML page, which tag is used?",
        a: "< script=â€™javaâ€™>",
        b: "< javascript >",
        c: "< script >",
        d: "< js >",
        ans: "ans3",
    },
    {
        question: "Which of the below is used in Java script to insert special characters?",
        a: "&",
        b: " / ",
        c: "-",
        d: "%",
        ans: "ans2",
    },
    {
        question: "Arrays in JavaScript are defined by which of the following statements? ",
        a: "It is an ordered list of values",
        b: "It is an ordered list of objects ",
        c: "It is an ordered list of string ",
        d: "It is an ordered list of functions",
        ans: "ans1",
    },
    {
        question: " Which of the following object is the main entry point to all client-side JavaScript features and APIs?",
        a: "Position",
        b: "Window",
        c: "Standard",
        d: "Location",
        ans: "ans2",
    }
]

const musicquiz = [
    {
        question: "Lotia is the regional music of ",
        a: "Rajasthan",
        b: "Tamil Nadu",
        c: "Punjab",
        d: "Assam",
        ans: "ans1",
    },
    {
        question: "Which of the followinf instrument is also known as Bheri ?",
        a: "Pungi",
        b: "Bankiya",
        c: "Bhungal",
        d: "Mashak",
        ans: "ans3",
    },
    {
        question: "Which song is very famous among the farmers of Kashmir region ?",
        a: "Nend Baith",
        b: "Ladishah",
        c: "Surma",
        d: "Jagarana",
        ans: "ans1",
    },
    {
        question: "Ustad Vilayat Khan, one of the great musicians from India, is globally renowned for playing which of the follwing instruments ?",
        a: "Sitar",
        b: "Sarod",
        c: "Tanpura",
        d: "Violin",
        ans: "ans1",
    },
    {
        question: " Which of the following is a form of popular folk music from uttar Pradesh ?",
        a: "Rasiya Geet",
        b: "Basant Geet",
        c: "Chhakri Geet",
        d: "Teej Geet",
        ans: "ans1",
    }
]

const modernartquiz = [
    {
        question: "This is the lightness or darkness of a color.",
        a: "Value",
        b: "Texture",
        c: "Color",
        d: "Shape",
        ans: "ans1",
    },
    {
        question: "When lines meet to form an enclosed area, this is formed.",
        a: "Space",
        b: "Shape",
        c: "Form",
        d: "Line",
        ans: "ans1",
    },
    {
        question: "What unusual pair of names have modern British artists Michael Baldwin and Mel Ramsden taken?",
        a: "Painting and Sculpture",
        b: "Art and Language",
        c: "Eisel and Brush",
        d: "Aesthetic and Esthetic",
        ans: "ans2",
    },
    {
        question: " Who was the most well-known of the Futurist sculptors?",
        a: "Umberto Boccioni",
        b: "Alexander Archipenko",
        c: "Hans Arp",
        d: "Constantin Brancusi",
        ans: "ans1",
    },
    {
        question: "Perhaps his most well known works are his flat, giant sculptures of men hammering. Who is this modern artist?",
        a: "Maurice Prendergast",
        b: "Peter Halley",
        c: "Jonathan Borofsky",
        d: "Morris Lousi",
        ans: "ans3",
    },
]


let question = document.querySelector(".question")
let option1 = document.querySelector("#option1 ")
let option2 = document.querySelector("#option2 ")
let option3 = document.querySelector("#option3 ")
let submit = document.querySelector(".ques button")
let allans = document.querySelectorAll(".answer")
let scoreshow = document.querySelector("#page3 .yourscore p")
let time = document.querySelector("#page3 .header p span")
let score = 0
let questioncount = 0;

function loadquestion() {
    question.innerHTML = quiz[questioncount].question
    option1.innerHTML = quiz[questioncount].a
    option2.innerHTML = quiz[questioncount].b
    option3.innerHTML = quiz[questioncount].c
    option4.innerHTML = quiz[questioncount].d
}

function loadquestion1() {
    question.innerHTML = musicquiz[questioncount].question
    option1.innerHTML = musicquiz[questioncount].a
    option2.innerHTML = musicquiz[questioncount].b
    option3.innerHTML = musicquiz[questioncount].c
    option4.innerHTML = musicquiz[questioncount].d
}

function loadquestion2() {
    question.innerHTML = modernartquiz[questioncount].question
    option1.innerHTML = modernartquiz[questioncount].a
    option2.innerHTML = modernartquiz[questioncount].b
    option3.innerHTML = modernartquiz[questioncount].c
    option4.innerHTML = modernartquiz[questioncount].d
}


function checkedanns() {
    let answer;
    allans.forEach((currentans) => {

        if (currentans.checked) {
            answer = currentans.id
        }
    })
    return answer;
}



submit.addEventListener("click", (event) => {
    const clickans = checkedanns()

    let radios = document.querySelectorAll(".answer")
    let isChecked = false;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            isChecked = true;
            break;
        }
    }


    if (isChecked === true) {
        if (sessionStorage.getItem("topic") === "Coding") {
            if (clickans === quiz[questioncount].ans) {
                score++
                sessionStorage.setItem("score", score)
            }
        }

        if (sessionStorage.getItem("topic") === "Modern Art") {
            if (clickans === modernartquiz[questioncount].ans) {
                score++
                sessionStorage.setItem("score", score)
            }
        }

        if (sessionStorage.getItem("topic") === "Music") {
            if (clickans === musicquiz[questioncount].ans) {
                score++
                sessionStorage.setItem("score", score)
            }
        }

        diselectall()
        questioncount++
        shownextquestion()
        stop()
        if (time.innerHTML >= 0) {
            time.innerHTML = "15"
            timer()
        }
    }
    else {
        swal("Oops!", "Select Any First", "error");
    }

    function shownextquestion() {
        if (sessionStorage.getItem("topic") === "Music") {
            if (questioncount < musicquiz.length) {
                loadquestion1()
            }
            else {
                document.querySelector(".ques").style.display = "none"
                document.querySelector("#page3 .result").style.display = "flex"
            }
        }
        if (sessionStorage.getItem("topic") === "Coding") {
            if (questioncount < quiz.length) {
                loadquestion()
            }
            else {
                document.querySelector(".ques").style.display = "none"
                document.querySelector("#page3 .result").style.display = "flex"
            }
        }
        if (sessionStorage.getItem("topic") === "Modern Art") {
            if (questioncount < modernartquiz.length) {
                loadquestion2()
            }
            else {
                document.querySelector(".ques").style.display = "none"
                document.querySelector("#page3 .result").style.display = "flex"
            }
        }
    }


})

function diselectall() {
    allans.forEach((currentans) => {
        currentans.checked = false;
    })
}
function diselectoption() {
    let allinpt = document.querySelectorAll("#page2 .mid input")
    allinpt.forEach((curren) => {
        curren.checked = false;
    })
}

let timeend = null;

function timer() {
    timeend = setInterval(() => {
        if (questioncount < 5) {
            if (time.innerHTML <= 0) {
                questioncount++
                time.innerHTML = "15"
                diselectall()
                if (sessionStorage.getItem("topic") === "Music") {
                    if (questioncount < musicquiz.length) {
                        loadquestion1()
                    }
                    else {
                        document.querySelector(".ques").style.display = "none"
                        document.querySelector("#page3 .result").style.display = "flex"
                    }
                }
                if (sessionStorage.getItem("topic") === "Coding") {
                    if (questioncount < quiz.length) {
                        loadquestion()
                    }
                    else {
                        document.querySelector(".ques").style.display = "none"
                        document.querySelector("#page3 .result").style.display = "flex"
                    }
                }
                if (sessionStorage.getItem("topic") === "Modern Art") {
                    if (questioncount < modernartquiz.length) {
                        loadquestion2()
                    }
                    else {
                        document.querySelector(".ques").style.display = "none"
                        document.querySelector("#page3 .result").style.display = "flex"
                    }
                }
            }
            else {
                time.innerHTML = Number(time.innerHTML) - 1
            }
        }
        else {
            time.innerHTML = "0"
            stop()
        }

    }, 1000)

}

let getresult = document.querySelector("#page3 .result button:first-of-type")
let playagain = document.querySelector("#page3 .result button:nth-of-type(2)")
let home = document.querySelector("#page3 .result button:last-of-type")
let scorecard = document.querySelector(".data")
let scorediv = document.querySelector("#page2 .yourdata")
let topic = document.querySelector(".topic")
let scoredone = document.querySelector(".outof")
let timedone = document.querySelector(".timer")



getresult.onclick = () => {
    scoreshow.style.display = "block"
    let saved = sessionStorage.getItem("score")
    if (sessionStorage.getItem("score")) {
        scoreshow.innerHTML = saved + " Out Of 5 "
    }
    else {
        scoreshow.innerHTML = "0 out Of 5"
    }

}

home.onclick = () => {
    page2.style.display = "block"
    page3.style.display = "none"
    diselectoption()
}
function stop() {
    clearInterval(timeend)
}


scorecard.onclick = (e) => {
    e.preventDefault()
    document.querySelector("#page2 .mid").style.display = "none"
    scorediv.style.display = "flex"
    if (sessionStorage.getItem("topic")) {
        topic.innerHTML = sessionStorage.getItem("topic")
    }
    if (sessionStorage.getItem("score")) {
        scoredone.innerHTML = sessionStorage.getItem("score") + " Out of 5"

        // let localstoragecontent = sessionStorage.getItem("savedscore")
        // if(localstoragecontent===null){
        //     let value = []
        // }
        // else{

        // }

    }
    else {
        scoredone.innerHTML = "0 out Of 5"
    }
    timedone.innerHTML = sessionStorage.getItem("date")
}