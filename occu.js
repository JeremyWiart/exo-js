let liste = [8, 7, 3, 8, 3, 1, 8, 8];
let elements = 8;
function occurrences(liste, elements) {
    let ranges = [];

  
    liste.forEach((element, index) => {
        if (element === elements) {
            ranges.push([index, index]); 
        }
    });

    return ranges;
}
console.log(occurrences(liste, elements)); [0,1,2]