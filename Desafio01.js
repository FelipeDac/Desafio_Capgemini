function escada(n) {

    let array = new Array(n).fill(' ');

    while (array.indexOf(' ') !== -1) {
        array.shift();
        array.push('#');
        console.log(array.join(''));
        n--;
    }
}

escada(6) //insira o número de degraus desejados
