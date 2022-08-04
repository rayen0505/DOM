var btn_pls = document.querySelectorAll(".plus")




function inc (e) {
   var cible = e.target
   var div= cible.parentElement
   var p = div.querySelector("p")
   var value = Number(p.innerHTML)
   value++
   p.innerHTML=value
   var tr = div.parentElement.parentElement
   var untit_price = tr.querySelector(".unitPrice")
   var up = Number(untit_price.innerHTML)
   console.log(up)
   var price = tr.querySelector(".price")
   price.innerHTML = value * up ;
   sum();
    }


    for (var i = 0; i < btn_pls.length; i++) {
        btn_pls[i].addEventListener("click",inc)

    }

    var btn_pls = document.querySelectorAll(".minus")

function incd (e) {
   var cible = e.target
   var div= cible.parentElement
   var p = div.querySelector("p")
   var value = Number(p.innerHTML)
   if(value >0){value--}

   p.innerHTML=value
   var tr = div.parentElement.parentElement
   var untit_price = tr.querySelector(".unitPrice")
   var up = Number(untit_price.innerHTML)
   console.log(up)
   var price = tr.querySelector(".price")
   price.innerHTML = value * up ;
   sum();
    }


    for (var i = 0; i < btn_pls.length; i++) {
        btn_pls[i].addEventListener("click",incd)

    }
    var like = document.querySelectorAll(".like")
   

    var price = document.querySelectorAll(".price")
    var total = document.querySelectorAll(".total")
  
    function sum(){
        var somme = 0
        for (let i = 0; i < price.length; i++) {
            somme += Number(price[i].innerHTML);
            total.innerHTML = somme
            
        }
    }


    var like_btns=document.querySelectorAll(".like")

    for(leti0;i<like_btns.length;i++){
        like_btns[i].addEventListener("click",changeColor);
     }

     function changeColor(e){
        var Cible = e.target;
        if(Cible.style.color !=="red"){
            Cible.style.color =="red";
        } else{
           Cible.style.color = "gray";
        }
     }
     var delete_btns=document.querySelectorAll(".delete")
    
     for(leti=0;i<delete_btns.length;i++){
        delete_btns[i].addEventListener("click",deleteRow);
      }
      function deleteRow(e){
        var cible=e.target;
        var tr=cible.parentElement.parentElement.parentElement.parentElement;
        var price=tr.querySelector(".price");
        price.innerHTML=0;
        tr.remove();
        sum()
      }


                   

    