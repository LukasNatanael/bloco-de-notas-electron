const { ipcRenderer } = require('electron');

// ELEMENTOS
const textarea = document.querySelector('#text')
const title    = document.querySelector('#title')

// SET FILE
ipcRenderer.on('set-file', function(event, data) {
    // console.log(data)
    textarea.value = data.content
    title.innerHTML = `${data.name} | C13 EDITOR`
});

// UPDATE TEXTAREA
function handleChangeText() {
    ipcRenderer.send('update-content', textarea.value)
}