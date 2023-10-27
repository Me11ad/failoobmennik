const dropZone = D.querySelector('div')
const input = D.querySelector('input')
let file

dropZone.addEventListener('drop', ev =>{
    ev.preventDefault()

    log(ev.dataTransfer)

    file = ev.dataTransfer.files[0]

    log(file)

    handleFile(file)
})

dropZone.addEventListener('click',() =>{
    input.click()

    input.addEventListener('change', () => {
        log(input.files)

    file = input.files[0]

    log(file)

    handleFile(file)
    })
})

const handleFile = file => {
    dropZone.remove()
    input.remove()
    log(file.type)
if(file.type === 'text/html' ||
    file.type === 'text/css' ||
    file.type === 'text/javascript')
return;
if (file.type === 'application/pdf') {
    createIframe(file)
    return;
}
const type = file.type.replace(/\/.+/, '')

log(type)
}