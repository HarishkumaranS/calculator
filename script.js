function appendValue(val)
{
    let text = document.getElementById('text').value;

    if (text === "0") {
        document.getElementById('text').value = val; // replace 0
    } else {
        document.getElementById('text').value += val; // append
    }
}
function res()
{
   try {
    let exp = document.getElementById('text').value;
    let res = eval(exp);

    // handle divide by zero
    if (res === Infinity || res === -Infinity) {
        document.getElementById('text').value = "ERROR 🤨";
    } else {
        document.getElementById('text').value = res;
    }
} catch (error) {
    document.getElementById('text').value = "ERROR 🤨";
}

}
function clearText()
{
    document.getElementById('text').value="0";
}

function backspace() {
  let input = document.getElementById("text");
  input.value = input.value.slice(0, -1);
}

let memory = 0; // stores memory value

// Add to memory
function memoryPlus() {
  let input = document.getElementById("text");
  let value = parseFloat(input.value) || 0;
  memory += value;
}

// Subtract from memory
function memoryMinus() {
  let input = document.getElementById("text");
  let value = parseFloat(input.value) || 0;
  memory -= value;
}

// Memory Recall / Clear
let memoryRecalled = false; // to track if first or second press

function memoryRecallClear() {
  let input = document.getElementById("text");
  if (!memoryRecalled) {
    input.value = memory;     // first press → recall
    memoryRecalled = true;
  } else {
    memory = 0;               // second press → clear
    memoryRecalled = false;
  }
}

document.body.addEventListener('keydown',(e)=>
{
    if(e.key >=0 || e.key=='/' || e.key=='*' || e.key=='-' || e.key=='+'  || e.key=='%' || e.key=='.')
    {
        appendValue(e.key);
       
    }
    else if(e.key=='=' || e.key=="Enter")
    {
        res();
    }
    else if(e.key === "Backspace")
    {
        backspace();
    }
})
