

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
console.log(logout)

function checkusername() {
    if (sessionStorage.getItem("user")) {
        user.style.display = "none"
        head.innerHTML = sessionStorage.getItem("user")
        logout.style.display="block"
    }
}

logout.onclick=()=>{
    deleteall()
    location.reload()
}


function deleteall(){
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
        logout.style.display="block"
    }
}
quit.onclick = () => {
    take.style.display = "none"

}
start.onclick = () => {
    // if (input.value.length === 0) {
    //     alert("Please create Your Username")
    // }
    // else{
    document.querySelector("#page1").style.display = "none"
    document.querySelector("#page2").style.display = "block"
    document.querySelector("#page2 .save h1").innerHTML = sessionStorage.getItem("user")
    // }
}

const form = document.querySelector("#myForm");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const selectedOption = document.querySelector("input[name='select']:checked").value;
    sessionStorage.setItem("topic",selectedOption)
    console.log(selectedOption)
    if (selectedOption === "Music") {
        page2.style.display = "none"
        page3.style.display = "flex"
        document.querySelector("#page3 .header h1").innerHTML = selectedOption + " " + "Quiz"
        timer()
    }
    else if (selectedOption === "Modern Art") {
        page2.style.display = "none"
        page3.style.display = "flex"
        document.querySelector("#page3 .header h1").innerHTML = selectedOption + " " + "Quiz"
        timer()
    }
    else {
        page2.style.display = "none"
        page3.style.display = "flex"
        document.querySelector("#page3 .header h1").innerHTML = selectedOption + " " + "Quiz"
        timer()
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
        c: "< js >",
        ans: "ans3",
    },
    {
        question: "Which of the below is used in Java script to insert special characters?",
        a: "&",
        b: " / ",
        c: "-",
        d: "%",
        ans: "ans2",
    }
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
loadquestion()

function checkedanns() {
    let answer;
    allans.forEach((currentans) => {

        if (currentans.checked) {
            answer = currentans.id
        }
    })
    return answer;
}



submit.addEventListener("click", () => {
    const clickans = checkedanns()
    if (clickans === quiz[questioncount].ans) {
        score++
        sessionStorage.setItem("score",score)
    }
    diselectall()
    questioncount++
    if (questioncount < quiz.length) {
        loadquestion()
    }
    else {
        document.querySelector(".ques").style.display = "none"
        document.querySelector("#page3 .result").style.display = "flex"
    }
})

function diselectall() {
    allans.forEach((currentans) => {
        currentans.checked = false;
    })
}

function timer() {
    let stop = setInterval(() => {
       
    if(questioncount < quiz.length){
        time.innerHTML = Number(time.innerHTML) + 1
        sessionStorage.setItem("time",time.innerHTML)
    }
    else{
        time.innerHTML= "0"  
        clearInterval(stop)
        
    }
    }, 1000)

}

let getresult  = document.querySelector("#page3 .result button:first-of-type")
let playagain = document.querySelector("#page3 .result button:nth-of-type(2)")
let home = document.querySelector("#page3 .result button:last-of-type")
let scorecard = document.querySelector(".data")
let scorediv= document.querySelector("#page2 .yourdata")
let topic = document.querySelector(".topic")
let scoredone = document.querySelector(".outof")
let timedone = document.querySelector(".timer")



getresult .onclick=()=>{
    scoreshow.style.display="block"
    let saved = sessionStorage.getItem("score")
    scoreshow.innerHTML= saved + " Out Of 10 " 
}

home.onclick=()=>{
    page2.style.display="block"
    page3.style.display="none"
}


scorecard.onclick=(e)=>{
    e.preventDefault()
    document.querySelector("#page2 .mid").style.display="none"
    scorediv.style.display="flex"
    topic.innerHTML= sessionStorage.getItem("topic")
    scoredone.innerHTML=  sessionStorage.getItem("score") + " Out of 10"
    timedone.innerHTML=sessionStorage.getItem("time")  + "seconds"
}