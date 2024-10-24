async function cv(url){

    try{
        const raiponcce = await fetch(url);
        //console.log(raiponcce);
        if(!raiponcce.ok) throw new Error("le fichier XML n'a pu être trouver");
            const xmlText = await raiponcce.text();
           // console.log(xmlText);
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText,"text/xml");
            //console.log(xmlDoc);
            const affNoeuds = xmlDoc.getElementsByTagName("*");
           // console.log(affNoeuds);
            const elementDiv = document.getElementById("maDiv");
                for(let i = 0; i < affNoeuds.length;i++){
                    const noeuds = affNoeuds[i];
                    console.log(noeuds); 
                
            const nom = noeuds.nodeName;
            const valeur = noeuds.textContent.trim();
            console.log("nom: "+nom+"valeur: "+valeur);

            const p = document.createElement('p');
            p.textContent= `${nom}:${valeur}`;
            elementDiv.appendChild(p);
                
                }
            



    }catch(error){
        console.log(error);
    }

}

cv('cv.xml');