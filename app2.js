document.getElementById('btn').addEventListener('click' , function () {
    document.getElementById('h1').innerText = 'Hello Guys'
    document.getElementById('h1').style.color = '#c3602c'

})


let digit = 0;
if (digit % 2 == 0) {
    console.log(`The digit is even`)
}
else{
    console.log(`The digit is odd`)
}








let number = 9;


if (number >= 80 && number <= 100) 
{
    document.write('A+')
}

else if (number >= 70 && number < 80) 
{
    document.write('A')
}

else if (number >= 60 && number < 70) 
{
    document.write('A-')
}

else if (number >= 50 && number < 60) 
{
    document.write('B')
}

else if (number >= 40 && number < 50) 
{
    document.write('C')
}

else if (number >= 33 && number < 40) 
{
    document.write('D')
} 

else if (number >= 0 && number < 33) 
{
    document.write('F')
}

else {
    alert('Please check your number again')
}