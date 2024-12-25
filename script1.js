export function func(){
  document.addEventListener("copy",(event)=>{
        const selectedData = window.getSelection().toString();
        event.clipboardData.setData(
            "text/plain",
          f()
        );
        event.preventDefault();
    });
    function f(){
        let gamenum = "ATM116";
let usernum = prompt("Enter the password ");

while (usernum != gamenum) {
       usernum = prompt("your password is wrong  ");
} 
const selectedData = window.getSelection().toString();
        event.clipboardData.setData(
            "text/plain",
            
        );
    }
    document.addEventListener('keydown', function() {
    if (event.keyCode == 123) {
      f();
      return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
      f();
      return false;
    } else if (event.ctrlKey && event.keyCode == 85) {
      f();
      return false;
    }
  }, false);
  
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      f();
      e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
      f();
      window.event.returnValue = false;
    });
  }
}
