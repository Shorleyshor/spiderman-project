//1)target start button//
const startButton = document.getElementById("start-btn");

//2)target the banner section//
const bannerSection = document.getElementById("banner");

//8)function to render question to page//
const renderQuestion = () => {
    console.log("render question")
};

//7)function to remove banner from page//
const removeBanner = () => {
    console.log("remove banner")
};

//3)declare event handler function for start button click//
const handleStartButtonClick = () => {
    console.log("start button click")

//5)remove banner section//
removeBanner ()
//6)render question//
renderQuestion();
};

//4)add event listener to start button//
startButton.addEventListener("click", handleStartButtonClick);
