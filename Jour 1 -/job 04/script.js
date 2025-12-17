function bisextile(annee) {
    
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log("2000 est bissextile ?", bisextile(2000)); 
console.log("1900 est bissextile ?", bisextile(1900)); 
console.log("2024 est bissextile ?", bisextile(2024)); 
console.log("2023 est bissextile ?", bisextile(2023)); 
