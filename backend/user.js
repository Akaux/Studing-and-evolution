import { vNum } from "./main.js"
const user = {
    nome : '',
    nivel: 1,
    xp: vNum
}
user.nome = prompt("Digite seu nome");
document.getElementById('name').innerHTML = user.nome
document.getElementById('nivel').innerHTML = user.nivel
document.getElementById('xp').innerHTML = user.xp

export function validaXp (xp){
    console.log('Função chamada! xp recebido:', xp);
    if(xp >= 20){   
        user.nivel++;
        console.log('Nível aumentou para:', user.nivel);
        document.getElementById('nivel').innerHTML = user.nivel;
    }
}
