
let compliments =[];

fetch('compliments.json')
    .then(response => response.json())
    .then(data => {
        compliments=data.compliments;
    })
    .catch(error => console.error('Error loading compliments:',error))

function generateCompliment(){
    if(compliments.length>0){
        const randomIndex=Math.floor(Math.random()*compliments.length);
        const compliment = compliments[randomIndex];
        document.getElementById("compliment").textContent=compliment;
    } else{
        document.getElementById("compliment").textContent="Loading compliments"
    }
}
