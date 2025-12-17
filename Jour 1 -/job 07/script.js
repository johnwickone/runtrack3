function jourtravaille(date) {
    const joursFeries = [
        "01-01", 
        "04-13", 
        "05-01", 
        "05-08", 
        "05-21", 
        "06-01", 
        "07-14", 
        "08-15",
        "11-01", 
        "11-11", 
        "12-25"  
    ];

   
    const jour = date.getDate();
    const mois = date.getMonth() + 1; 
    const annee = date.getFullYear();

   
    const dateFormat = (mois < 10 ? "0" + mois : mois) + "-" + (jour < 10 ? "0" + jour : jour);

    
    if (joursFeries.includes(dateFormat)) {
        console.log(`Le ${jour} ${mois} ${annee} est un jour férié`);
    }
  
    else if (date.getDay() === 0 || date.getDay() === 6) { 
        console.log(`Non, ${jour} ${mois} ${annee} est un week-end`);
    }
   
    else {
        console.log(`Oui, ${jour} ${mois} ${annee} est un jour travaillé`);
    }
}


jourtravaille(new Date("2020-01-01")); 
jourtravaille(new Date("2020-07-14"));
jourtravaille(new Date("2020-07-15")); 
jourtravaille(new Date("2020-07-18")); 
