function getAverage()
{
    let arrayString = document.getElementById('input').value.split(',');
    let arrayInteger = arrayString.map(function(x) {
        return parseInt(x);
    });
    let result = arrayInteger.reduce(function(acumulador,currentValue){
        return acumulador + currentValue
    });
    const finalResult = result / arrayInteger.length
    document.getElementById('result').innerHTML = "El Promedio es: "+finalResult;
}
function getMediana()
{
    let arrayString = document.getElementById('input').value.split(',');
    const arraySorted = arrayString.sort();
    const arrayLength = arraySorted.length;
    if (arrayLength % 2 == 1)
    {
        document.getElementById('result').innerHTML = "La mediana es: "+ arraySorted[Math.floor(arrayLength/2)]
    } else {
        const loweVal = arraySorted[Math.floor(arrayLength/2)-1];
        const highVal = arraySorted[Math.floor(arrayLength/2)];
        const result = Math.floor((parseInt(loweVal) + parseInt(highVal)) / 2)   
        document.getElementById('result').innerHTML = "La mediana es: "+ result
    
    }
}