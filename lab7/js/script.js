function init(){

  let entryButton = document.getElementById('entrybutton');
  let entryInput = document.getElementById('entryinput');
  let textOutput = document.getElementById('textoutput');

  entryButton.addEventListener('click', function() {

    let inputValue = entryInput.value;
    alert("Jacob OHare: " + inputValue);
    textOutput.textContent = inputValue;
  });

}

window.addEventListener('load', init);