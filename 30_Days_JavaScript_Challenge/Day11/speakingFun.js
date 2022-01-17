function speak(message,language='en-US') {
    const msg=new SpeechSynthesisUtterance(message)
    msg.lang=language
    speechSynthesis.speak(msg)
}

speak("hey there How are you")