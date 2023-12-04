const prompt = require("prompt-sync")();
number = 0
console.log("Bienvenue dans ce questionnaire sans titre. Répondez avec 1, 2, 3 ou 4.");
    setTimeout(() => {
    console.log("Combien fait 1 + 1 ?");
    do {
    reponse = prompt(" 2 : La réponse après : C'est quoi un chiffre ? : J'ai éteint le four ? :   ");

    if (reponse === "1") {
        console.log("Félicitations ! Même moi, j'ai douté avec la 4ème réponse !");
    } else if (reponse === "2" || reponse === "3" || reponse === "4") {
        console.log("Tu es trop nul, c'est évident que c'est 4... enfin je crois...");
        number = number + 1;
        console.log("Votre score est de " + number);
    } else {
        console.log("Réponse invalide. Veuillez répondre avec 1, 2, 3 ou 4.");
    }
} while (reponse !== "1");

        setTimeout(() => {
            console.log("Fini les félicitations ! Moi, je n'en ai jamais, bref.");
        

        setTimeout(() => {
            console.log("fini les felicitation ! moi j'en ai jamais bref ");

            setTimeout(() => {
                console.log("question 2 musique ! ");

                setTimeout(() => {
                    console.log("comment s'appelle mon chat ?");
                    do {
                    reponse = prompt(" jean bernard : philippe etchebest : jean marie le pen : chat gpt : ");
            
                    if (reponse === "1") { 
                        console.log("Félicitations ! qui n'a pas un chat appeller jean bernard en meme temps");
                    } else if (reponse === "2" || reponse === "3" || reponse === "4") {
                        console.log("serieux ?");
                        number = number + 1;
                        console.log("Votre score est de " + number);
                    } else {
                        console.log("Réponse invalide. Veuillez répondre avec 1, 2, 3 ou 4.");
                        return
                    }
                    
                } while (reponse !== "1");
                    setTimeout(() => {
                        console.log("mais bon calme toi moi aussi je connaissais sont nom bref ");

                        setTimeout(() => {
                            console.log("nouvealle question ! numero 3 !  ");

                                setTimeout(() => {
                                    console.log("en qu'elle année a commencer la geurre de 39-45?");
                                    do {
                                    reponse = prompt(" en 1498 : je sais pas j'etait pas née : 1945 : 2023 : ");
                            
                                    if (reponse === "2") { 
                                        console.log("Félicitations ! tout comme moi !");
                                    } else if (reponse === "1" || reponse === "3" || reponse === "4") {
                                        console.log("heu... tu fait peur un peu...");
                                        number = number + 1;
                                        console.log("Votre score est de " + number);
                                    } else {
                                        console.log("Réponse invalide. Veuillez répondre avec 1, 2, 3 ou 4.");
                                        return
                                    }
                                    } while (reponse !== "2");

                            }, 3000);
                        }, 3000);
                    }, 3000);
                }, 3000);
            }, 3000);
        }, 3000);
    }, 3000);
}, 3000);   /9*
