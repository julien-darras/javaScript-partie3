for (let year = 2020; year <= 2030; year++) {
    if((year % 4 == 0 && year % 100 != 0) || (year%400==0)){
        /* changer la couleur d'affichage de year*/
        document.write(`<div class="color">${year}</div>`);
    }else{ 
        document.write(`<div>${year}</div>`); 
    }
  }