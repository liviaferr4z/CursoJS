function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById ('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0) {
        res.innerHTML = 'Impossivel contar'
        alert('ERRO')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            //contagem crescente
            for(let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1FA77}`
            }
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1FA77}`
            }
        }
        res.innerHTMl += `\u{1F380}`
    }
}
