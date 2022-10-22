

pos_top =0
pos_left =0


onkeydown =function(e){
    
    console.log(e)
    if(e.key =="ArrowRight"){

    document.getElementById("man").src ="https://cdn.dribbble.com/users/1167054/screenshots/4721450/the-walk-gif.gif"; 
    document.getElementById("myDiv").style.transform ="rotateY( 360deg)"; 
    document.getElementById("myDiv").style.left =pos_left+"px"
    
    pos_left += 30

    }
    if(e.key =="ArrowLeft"){

    document.getElementById("myDiv").style.transform ="rotateY(180deg)";
    document.getElementById("myDiv").style.left =pos_left+"px"
    
    pos_left += -30

    }
    if(e.key =="ArrowDown"){
    document.getElementById("myDiv").style.top =pos_top+"px"
    
    pos_top += 30

    }
    if(e.key =="ArrowUp"){
    document.getElementById("myDiv").style.top =pos_top+"px"
    
    pos_top += -30

    }

   

}










// onkeydown =function(e){
  

// // if(e.keyCode >= 48 && e.keyCode <= 57){
// //     this.alert("reqem daxil etmek olmaz")
// // }else{
// //     console.log(e.key+"-"+e.keyCode)
// // }
// }