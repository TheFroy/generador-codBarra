
const mySelect = document.getElementById('mySelect')
const numContainer = document.getElementById('numContainer')
const btn = document.getElementById('generar')
const saveBtn = document.getElementById('save')
const num = document.getElementById('num')

const generarFormatos = (formato, min, max) => {
    JsBarcode('#myImg',String(Math.floor(Math.random() * (max - min))+min), {format: formato})
    JsBarcode('#myCanvas',String(Math.floor(Math.random() * (max - min))+min), {format: formato})
    
}

const generar = (formato) => {
    if(formato == "1"){
        JsBarcode("#myCanvas", num.value);
        JsBarcode("#myImg", num.value);
    }
    else if (formato == "ean13"){
        generarFormatos(formato,100000000000, 1000000000000)
    }
    else if (formato == "upc"){
        generarFormatos(formato,10000000000, 100000000000)
    }
    else if (formato == "itf14"){
        generarFormatos(formato,1000000000000, 10000000000000)
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
    }
})
