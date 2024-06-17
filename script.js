function executeLua() {
    const script = document.getElementById('editor').value;
    const outputElement = document.getElementById('output');
    outputElement.innerHTML = '';

    try {
        fengari.load(script)();
    } catch (e) {
        outputElement.innerHTML = 'Error: ' + e.message;
    }
}

function clearEditor() {
    document.getElementById('editor').value = '';
    document.getElementById('output').innerHTML = '';
}

// Redirect Lua print function to display in the output div
fengari.interop.print = function(...args) {
    const outputElement = document.getElementById('output');
    outputElement.innerHTML += args.join(' ') + '\n';
};

