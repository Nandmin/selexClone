let chkBox = 0;
let menuBox = 1;

dateSetter();
searchBox();
menu();

function dateSetter(){
    let date = new Date();
    let month = date.getMonth()+1;
    let day = date.getDate();

    switch (new Date().getDay()) {
        case 0:
          dayName = "Vasárnap";
          break;
        case 1:
          dayName = "Hétfő";
          break;
        case 2:
           dayName = "Kedd";
          break;
        case 3:
          dayName = "Szerda";
          break;
        case 4:
          dayName = "Csütörtök";
          break;
        case 5:
          dayName = "Péntek";
          break;
        case 6:
          dayName = "Szombat";
      }


    if (month < 10){
        month = '0' + month
    }

    if (day < 10){
        day = '0' + day
    }

    let today =  `${date.getFullYear()}. ${month}. ${day}.,  - ${dayName}`;
    document.getElementById('headerDate').innerHTML = today;
}

function mnb(){

alert('hello');
}

function searchBox(){
        
    if(chkBox == 0){
        $(document).ready(function() {
            $('#searchBox').hide();
        });
        chkBox = 1;
    }else{
        $(document).ready(function() {
            $('#searchBox').show();
        });
        chkBox = 0;
    }

}

function menu(){
    if(menuBox == 1){
        $(document).ready(function() {
            $('.sideBar').hide();
        });
        menuBox = 0;
    }else{
        $(document).ready(function() {
            $('.sideBar').show();
        });
        menuBox = 1;
    }
}

    
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
    mybutton = document.getElementById("topBtn");
    
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  
}