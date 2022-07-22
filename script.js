var num=document.getElementById('txtnum')
var sel=document.getElementById('selres')
var res=document.getElementById('res')
var a = []
var sum =0
for(x=0;x<=a.length;x++){
    sum+=a[x]
}

function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100 ){
    return true}
    else{
        return false}
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true}
    else{return false}
}

function Adicionar(){
    if(isNumero(num.value) && !inLista(num.value,a)){
        a.push(Number(num.value))
        var item=document.createElement('option')
        item.text=`Foi adicionado o valor ${Number(num.value)}`
        sel.appendChild(item)
        res.innerHTML=''
    }else{
        alert('O numero é invalido ou já foi adicionado')
    }
    num.value=''
    num.focus()
}


function Finalizar() {
    if(a.length==0){alert('Adicione valores antes de finalizar')
    }else{
        var soma=0
        for(var pos in a){
            soma += a[pos]
        }
        media=soma/a.length
        res.innerHTML=''
        res.innerHTML+=`<p>Ao todo temos ${a.length} numeros cadastrados.</p>`
        res.innerHTML+=`<p>O maior valor informado foi ${Math.max.apply(null,a)}.</p>`
        res.innerHTML+=`<p>O menor valor informado foi ${Math.min.apply(null,a)}.</p>`
        res.innerHTML+=`<p>Somando todos os valores temos ${soma}`
        res.innerHTML+=`<p>A média dos valores é ${media.toFixed(2)}`


    }
}