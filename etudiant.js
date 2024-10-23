const lettre_maj = [{maj :'A',index: 1},
                    {maj :'B',index: 2},
                    {maj :'C',index: 3},
                    {maj :'D',index: 4},
                    {maj :'E',index: 5},
                    {maj :'F',index: 6},
                    {maj :'G',index: 7},
                    {maj :'H',index: 8},
                    {maj :'I',index: 9},
                    {maj :'J',index: 10},
                    {maj :'K',index: 11},
                    {maj :'L',index: 12},
                    {maj :'M',index: 13},
                    {maj :'N',index: 14},
                    {maj :'O',index: 15},
                    {maj :'P',index: 16},
                    {maj :'Q',index: 17},
                    {maj :'R',index: 18},
                    {maj :'S',index: 19},
                    {maj :'T',index: 20},
                    {maj :'U',index: 21},
                    {maj :'V',index: 22},
                    {maj :'W',index: 23},
                    {maj :'X',index: 24},
                    {maj :'Y',index: 25},
                    {maj :'Z',index: 26}]
const lettre_min = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let etudiantPlus_15 = new Array
let temp = new Array
let ordonneArray = new Array
let etudiants = [   {nom :'Agathe',note: 10},
                    {nom :'Wlad',note: 17},
                    {nom :'Yohann',note: 16},
                    {nom :'Laureline',note: 17},
                    {nom :'Christine',note: 12},
                    {nom :'Yannick',note: 19},
                    {nom :'Kaique',note: 17},
                    {nom :'Angélique',note: 18},
                    {nom :'Dorian',note: 15},
                    {nom :'emmanuel',note: 16},
                    {nom :'Jeremy',note: 13},
                    {nom :'Sylvain',note: 17},
                    {nom :'Yann',note: 15},
                    {nom :'Amine',note: 16}
                ]




    for(let i = 0; i < etudiants.length; i++){
        if(etudiants[i].note > 15){
            etudiantPlus_15 = etudiants[i].nom
            for(let j = 0 ; j < lettre_maj.length; j++){
                if(etudiantPlus_15[0] == lettre_maj[j].maj ){

                    temp = lettre_maj[j].index
                    //if(temp[0] < temp[0] + 1){
                        ordonneArray = etudiantPlus_15
                    //}
                    console.log(lettre_maj[j].maj)
                    console.log(temp)
                }
            }
        }console.log(ordonneArray)
         
    } 

