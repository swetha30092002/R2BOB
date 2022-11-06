let speech = new SpeechSynthesisUtterance();
speech.lang = "en";
let voices = [];

const question = ["Hello", "This is Sam", "Which language do you prefer", "What kind of help do you need", "Please choose a language", "Tell your Full Name", "What is the Branch of the Bank", "What is your Date of Birth", "Please Tell me your Gender", "What is your Email Id", "What is your age", "Tell me your Mobile Number", "Which country do you reside", "Tell me your address", "Tell me your Aadhar Number", "Tell me your PAN Number", "Show the following documents in front of the Camera to scan", "Photo copy", "Aadhar card", "PAN Card", "Driving License", "Voter Id", "Signature or Thumbprint", "Your form is successfully submitted", "Thank you", "See you again"];

let QuestionInx = 0;

const startRegBtn = document.querySelector("#startRegBtn");
const nextQuestionBtn = document.querySelector("#nextQuesBtn");
const recordBtn = document.querySelector("#recordBtn");

startRegBtn.addEventListener("click", handleSpeech);

nextQuestionBtn.addEventListener("click", () => {
  QuestionInx++;
  handleSpeech();
});

const queContainer = document.querySelector("#queContainer");

const ansContainer = document.querySelector("#ansContainer");

recordBtn.addEventListener("click", handleRecord);

function handleSpeech() {
  speech.text = question[QuestionInx];
  window.speechSynthesis.speak(speech);
  const h6Ele = document.createElement("h6");
  h6Ele.innerText = question[QuestionInx];
  const brEle = document.createElement("br");

  queContainer.append(h6Ele);
}

function handleRecord() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  let recognition = new SpeechRecognition();

  recognition.onstart = () => {
    console.log("starting listening, speak in microphone");
  };
  recognition.onspeechend = () => {
    console.log("stopped listening");
    recognition.stop();
  };
  recognition.onresult = (result) => {
    console.log(result.results[0][0].transcript);
    const h6Ele = document.createElement("h6");
    h6Ele.innerText = result.results[0][0].transcript;
    const brEle = document.createElement("br");

    ansContainer.append(h6Ele);
  };

  recognition.start();
}
