alert("Welcome to the Snowden Simulator!")


$('#leakBtn').on('click' , function getText(){
  console.log($('#textInput').val())
})

function compareText(usertxt, doctxt){
  if (usertxt === doctxt) {
    return true;
  } else{
    return false;
  }
}
