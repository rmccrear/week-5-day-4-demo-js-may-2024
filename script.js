function createMessage() {
  let message = {};
  message.sender = prompt("What is your name?");
  message.recipient = prompt("Who will you send the message to?")
  message.request = prompt("What do you want from this person?");

  myMessage.innerHTML = `Dear ${message.recipient}, I wanted to tell you I appreciate you and all you do for me. I just wanted to ask you if you could please ${message.request}. It would be a big help. Thanks so much! -- ${message.sender}`

  myHeader.style.color = "black";
  myHeader.style.backgroundColor = "skyblue";
  myMessage.style.color = "black";
  myMessage.style.backgroundColor = "skyblue";
}

messageButton.onclick = createMessage;