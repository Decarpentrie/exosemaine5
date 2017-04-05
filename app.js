 function aleatoire(a) {
 
    var charactere = ["s", "b", "yop", 5];
 
    var chaine = "";

    for (i=0; i<a; i++) {
    
        chaine += charactere[Math.floor(Math.random() * charactere.length)];
    };
    	console.log(chaine);
    
    };
    	aleatoire(10);





