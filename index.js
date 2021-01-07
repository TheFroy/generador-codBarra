
const mySelect = document.getElementById('mySelect')
const numContainer = document.getElementById('numContainer')
const btn = document.getElementById('generar')
const myCanvas = document.getElementById('myCanvas')
const myImage = document.getElementById('myImage')
const saveBtn = document.getElementById('save')
const num = document.getElementById('num')

const generar = (formato) => {
    if(formato == "1"){
        JsBarcode("#myCanvas", num.value);
    }
    else if (formato == "ean13"){
        var min = 100000000000
        var max = 1000000000000
        JsBarcode('#myCanvas',String(Math.floor(Math.random() * (max - min))+min), {format: formato})
    }
    else if (formato == "upc"){
        var min = 10000000000
        var max = 100000000000
        JsBarcode('#myCanvas',String(Math.floor(Math.random() * (max - min))+min), {format: formato})
    }
    else if (formato == "itf14"){
        var min = 1000000000000
        var max = 10000000000000
        JsBarcode('#myCanvas',String(Math.floor(Math.random() * (max - min))+min), {format: formato})
    }
    else{
        alert("Seleccionar un formato")
    }
}
mySelect.addEventListener('change',(e) => {
    if (e.target.value === '1'){
        numContainer.className = "container my-4"
    }
    else{
        numContainer.className = "d-none"
    }
})


btn.addEventListener('click', () => {
    generar(mySelect.value)
})


saveBtn.addEventListener('click',() => {

    if(window.navigator.msSaveBlob){
        window.navigator.msSaveBlob(myCanvas.msToBlob(),"canvas-image.png");
    }
    else{
        const a = document.createElement('a');
        document.body.appendChild(a)
        a.href=myCanvas.toDataURL("image/jpeg",1);
        a.download = "Barcode.jpg"
        a.click()
        document.body.appendChild(a)
    }
})
