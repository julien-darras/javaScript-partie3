let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
// 1ere maniere
// days.forEach((element) => {
//   if ((element === 'Samedi') || (element === 'Dimanche')) {
//     document.write(`<div class="bold">${element}</div>`);
//   } else {
//     document.write(`<div>${element}</div>`);
//   }
// });


// 2eme maniere
days.forEach((element) => {
  if (element == days[5] || element == days[6]) {
    document.write(`<div class="bold">${element}</div>`);
  } else {
    document.write(`<div>${element}</div>`);
  }
});




/*days.forEach(element => document.write(element+' '));{
  if ((days==5) || (days==6) ){
    document.write(`<div class="bold">${days}</div>`)
  }
}*/



// for (let element of days) {
//     document.write(element+' ');
//   }
//for (let i = 0; i < 5; i++) {
//    document.write(days[i]+ ' ');
//   }
//    //mettre en gras avec balise <b>
//   document.write('<B>'+days[5]+' '+days[6]+'</B>');

//   document.write(days);