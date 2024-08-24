


// let speech = new SpeechSynthesisUtterance();


// // Function to clear the textarea and stop any ongoing speech
// function buttonfun1(){
//      // Clear the textarea
    
//     clearto.addEventListener('clear',function(){
//         document.querySelector("textarea").value = '';
//         window.speechSynthesis.cancel(); // Stop any ongoing speech
//         document.querySelector("clear").addEventListener("click" , clear);

//     })

// }


// Add event listener to the Clear button
function btn1(){
    
click_to_convert.addEventListener('click',function(){
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener('result', e =>{
        const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)

        convertotext.innerHTML = transcript;
    })

    if(speech == true){
        recognition.start();
    }
})

}

