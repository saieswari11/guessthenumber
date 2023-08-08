var randomNum=Math.floor(Math.random()*100)+1;
var attempts=0;
document.getElementById('btn').addEventListener('click',function(){
    var guess=parseInt(document.getElementById('guessinput').value);
    attempts++;
    if(guess===randomNum){
        displayMessage("Congratulations!You guessed the Number in "+attempts+" Attempts");
        document.getElementById('btn').disabled=true;
    }
    else if(guess<randomNum){
        displayMessage("Too Low!Try a higher Number.");
    }
    else{
        displayMessage("Too High!Try a Lower Number.");
    }
});
function displayMessage(message)
{
    document.getElementById('msg').textContent=message;
}