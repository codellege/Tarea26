let ta = document.getElementById('txtarea')
let b = document.getElementById('button')
let l = document.getElementById('list')

ta.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        let printers = ''
        let text = ta.value
        let textarray = text.split(',')

        l.innerHTML = `<li class="list-group-item active"> El array tiene ${textarray.length} numeros</li>`

        for (let i = 0; i < textarray.length; i++) {
            l.innerHTML += `<li class="list-group-item"> El numero ${i+1} es ${textarray[i]}</li>`
        }
    }
})