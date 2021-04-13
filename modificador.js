function capitalizar(colecao, attr){
    if(colecao.length > 0){
        if (typeof colecao[0] == 'object' && attr){
            colecao.map(obj => obj[attr] = obj[attr].charAt(0).toUpperCase() + obj[attr].slice(1));
        } else {
            colecao.map(obj => obj = obj.charAt(0).toUpperCase())
        }
        return colecao
    }
}

function ordenar(colecao, attr) {
    return attr?
        colecao.sort(function(a,b){
            return typeof a[attr] == 'number' ?
                a[attr] - b[attr] :
                a[attr].localeCompare(b[attr])
        }):
        colecao.sort(function(a,b){
            return typeof a[attr] == 'number'?
                a - b:
                a.localeCompare(b)
        })
};


export default {
    capitalizar: capitalizar,
    ordenar: ordenar,
};
