
let win =0;
let check= true;
let totalmatches =1;
while(check) {
    let choice =['g','s','w'];
    
    let index = Math.floor(Math.random()*choice.length);
    let random = choice[index];
    
    let ch = prompt(`Enter:\n Snake -> s\n Water -> w\n Gun -> g`)
    if(ch === 's' || ch === 'w' || ch === 'g') {
        if(ch === 's') {
            if(random === 'g') alert("you Lose");
            else if(random === 'w'){
                alert("you win");
                win++;
            } 
            else alert("draw")
        }
        else if(ch === 'g') {
            if(random === 's'){
                alert("you win");
                win++;
            }else if(random == 'w') alert('you lose')
            else alert('draw')
        } 
        else if(ch === 'w') {
            if(random === 's') 
                alert("you lose");
            else if(random === 'g') {
                alert("you win");
                win++;
            }
            else alert("draw");
        }
    }
    else{
        alert("enter valid character")
        console.error("invalid character entered")
    }

    check = confirm("do you want to play again");
    if(check) totalmatches++;
}

alert(`you win ${win} out of ${totalmatches}`)