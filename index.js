const letters = " abcdefghijklmnopqrstuvwxyz"
var i = 0
var letter = 0
const finalMsg = "hello world"
let msg = ""
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
})


}
