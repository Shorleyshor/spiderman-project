//target start button//
const startButton = document.getElementById("start-btn");

//target the banner section//
const bannerSection = document.getElementById("banner");

//function to render question to page//
const renderQuestion = () => {
    console.log("render question")
}
//declare event handler function for start button click//
const handleStartButtonClick = () => {
    console.log("start button click")

//remove banner section//

//render question//
renderQuestion();
};

//add event listener to start button//
startButton.addEventListener("click", handleStartButtonClick);
