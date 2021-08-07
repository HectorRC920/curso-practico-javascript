function getSquareArea(side)
{
    return side * side;
}

function getSquarePerimeter(side)
{
    return side*4;
}


// function getTriangleArea(base,height)
// {
//     return (base, height) /2
// }

// getCircleArea(radio)
// {
//     return Math.PI * radio^2;
// }

// console.log(getSquarePerimeter(5))
function areaIsocelesTriangle(b , a)
{   
    if(b != a)
    {
        console.log('Los lados deben ser iguales')
    } else {
        let h = Math.sqrt((a^2) - ((b^2) / 4));
        let area = ((b * a) / 2)
        console.log("La altura es: " + h + "El Area es: "+  area);
    }
    
}
console.log(areaIsocelesTriangle(3,3));
function areaCuadrado()
{
    const inputSquare =  document.getElementById("inputSquareSide");
    let value = inputSquare.value;
    value = getSquareArea(value);
    document.getElementById('resultSquare').innerHTML = "El area es: " + value;
    
}
function perimetroCuadrado()
{
    const input = document.getElementById('inputSquareSide');
    let value = input.value;
    value = getSquarePerimeter(value);
    document.getElementById('resultSquare').innerHTML = "El perimetro es: " + value;
}