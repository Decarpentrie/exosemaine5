function aleatoire(a) {
 
    var charactere = "sbyop";
 
    var chaine = "";

    for (i=0; i<a; i++) {
    


        chaine += charactere[Math.floor(Math.random() * charactere.length)];
    };
    
    return chaine;
   
   	console.log(chaine);
};

aleatoire(10);



function tableau(a, b) {

	var liste = [];

	var result = [];

	for (var i = 0; i <a ; i++) {
		


		for (var j = 0; j < b; j++) {
			

			liste.push(aleatoire(10));

		}
		
		result.push(liste);
		
		liste=[];


	}

	return result;
}

var test= tableau(5,5)

console.log(test);

	


