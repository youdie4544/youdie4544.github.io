const fancify = document.getElementById("idFancyShmancy");
const boring = document.getElementById("idBoringBetty");
fancify.addEventListener("change", fancyOption);
boring.addEventListener("change", boringOption);

function ping() {
  alert("Radio Changed"); //alert for radiobutton selected
}

function Bigger() { //enlarge text
  document.getElementById("textinput").style.fontSize = "24px";
  alert("Biggify!");
}

function fancyOption() { //make text fancy
  document.getElementById("textinput").style.color = "blue";
  document.getElementById("textinput").style.fontWeight = "bold";
  document.getElementById("textinput").style.textDecoration = "underline";
}

function boringOption() { //make normal again
  document.getElementById("textinput").style.color = "black";
  document.getElementById("textinput").style.fontWeight = "normal";
  document.getElementById("textinput").style.textDecoration = "none";
}

function Moo() {
  var textarea = document.getElementById("textinput");
  var text = textarea.value.toUpperCase(); // get the text from the text area and convert it to uppercase (all caps)
  var sentences = text.split(/([.!?]+)/); // split text (split on . ! or ?)
  for (var i = 0; i < sentences.length; i += 2) {// skip over punctuation tokens (i += 2)
    var sentence = sentences[i];
    if (/\s/.test(sentence)) {// check if sentence and not a word
      var words = sentence.split(/\s+/);// split on whitespace
      words[words.length - 1] += "-Moo"; // add "-Moo" at the end
      sentences[i] = words.join(" ");// rejoin the words into a sentence with spaces
    }
  }
  text = sentences.join("");// rejoin the sentences
  textarea.value = text; // set the text area value to text string
}