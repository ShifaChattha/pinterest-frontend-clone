 
function blurr() {
document.getElementsByClassName("navdiv")[0].style.filter = 'blur(1px)';
document.getElementsByClassName("blu3")[0].style.filter = 'blur(1px)';


}

function changing() {
document.getElementById("logi").style.display = 'block';

}


  document.getElementsByClassName("btn")[0].addEventListener('click', function() {
  blurr();
  changing();
 });



function blurrend() {
document.getElementsByClassName("navdiv")[0].style.filter = 'blur(0px)';
document.getElementsByClassName("blu3")[0].style.filter = 'blur(0px)';


}

function close() {
document.getElementById("logi").style.display = 'none';
}


document.getElementsByClassName("btn-close2")[0].addEventListener('click', function() {   
close();
blurrend()
});

  

function changing1() {
document.getElementById("sini").style.display = 'block';
}      
document.getElementsByClassName("btn1")[0].addEventListener('click', function() {
  blurr();
  changing1();
});
 function close1() {
document.getElementById("sini").style.display = 'none';
}

document.getElementsByClassName("btn-close1")[0].addEventListener('click', function() {    close1();
blurrend();
});


