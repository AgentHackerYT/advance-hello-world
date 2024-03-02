const letters = " abcdefghijklmnopqrstuvwxyz1234567890"
var i = 0
var letter = 0
const finalMsg = process.argv[2]?.toLowerCase() || "hello world".toLowerCase()
let msg = ""
var count = 0
function helloworld(){
setInterval(() =>{
    if(letters.charAt(i - 1) !== finalMsg.charAt(letter)){
            msg = msg.substring(0,letter) + letters.charAt(i)
            console.log(msg)
            i++
    }else {
        letter++
        i = 0
    }
    setTimeout(() =>{

        if(msg == finalMsg){
            process.exit()
        }
    
    }, 1000)
},50)
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function scrambled(){
    const l = shuffle(letters.split("")).map(x => x).join("")
    setInterval(() =>{
        if(l.charAt(i - 1) !== finalMsg.charAt(letter)){
                msg = msg.substring(0,letter) + l.charAt(i)
                console.log(msg)
                i++
        }else {
            letter++
            i = 0
        }
        setTimeout(() =>{
    
            if(msg == finalMsg){
                process.exit()
            }
        
        })
    })
    }

function backspace(text = "hello world"){
var i = 0
var j = 0
let msg = ""
let msg2= ""

setInterval(() =>{
    if(j == i && j !== 0){
        process.exit()
    }else if(i >= text.length || i < 0){
        msg2 = msg.split("").reverse().map(x=>x).join("").substring(j, i)
        j++ 
        console.log(msg2.split("").reverse().map(x => x).join(""))
    }
    else if(i < text.length){
        msg = msg.substring(0,i)  + text.charAt(i)
        i++ 
        console.log(msg)
    }
},100)
}

function backtofront(text = "hello world"){
var j = 0
let msg2= ""
setInterval(() =>{
    msg2 = `${msg2 + text.split("").reverse().map(x => x).join("").charAt(j)}`
        j++
        console.log(msg2.split("").reverse().map(x => x).join(""))
    if(j == text.length){ 
        j = 0;
        msg2 += " "
    }
},100)
}

function fronttoback(text = "hello world"){
let msg = ""
var i = 0
setInterval(() =>{
    msg += text.charAt(i)
    i++ 
    console.log(msg)
    if(i == text.length){ 
        i = 0;
        msg += " "
    }
}, 100)
}


backtofront()
