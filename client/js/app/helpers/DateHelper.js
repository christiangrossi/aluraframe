class DateHelper {

    dataParaTexto(data) {
        return data.getDate() 
        + '/' + (data.getMonth() + 1)
        + '/' + data.getFullYear();
    }

    textpParaData(texto) {
        return new Date(...texto.split('-').map((item, indice) => item - indice%2));
    }
}