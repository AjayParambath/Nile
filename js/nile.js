<script type="text/javascript">

var Kart = [];

  function tooltip(message) {
    var tooltip=document.getElementById('tooltip');
    tooltip.style.opacity=1;
    tooltip.innerHTML="<p>"+message+"</p>"
    setTimeout(function(){
        tooltip.style.opacity=0;
    }, 3000);
  }
function addToCart(element){
  var id = element.parentElement.id;
  if (element.getAttribute("mode")=="add"){
    pushItem(id)
    element.setAttribute("mode","takeout")
    element.innerHTML='<i class="fa fa-cart-plus"></i>'+"Remove from Kart"
    tooltip("Adding "+element.parentElement.children[1].innerText+" to kart")
  }else{
    element.setAttribute("mode","add")
    popItem(id)
    element.innerHTML='<i class="fa fa-cart-plus"></i>'+"Add to Kart"
    tooltip("Removing "+element.parentElement.children[1].innerText+" From kart")
    // takeOut()
  }
}

function pushItem(id){
  if(Kart.size>=5){
    alert("Kart is Full, proceed to CheckOut")
    return;
  }
  Kart.push(id);
  console.log("add id:"+id);
  var Kbar = document.getElementsByClassName("n-selected-bar")[0];
  Kbar.innerHTML='<div class="n-selected-item" id="'+id+'">'
  +'<span class="n-selected-close" onclick="popItem(\''+id+'\')">X</span>'
  +'<p class="n-selected-number">1</p>'
  +document.getElementById(id).children[0].outerHTML
  +'</div>'
    +Kbar.innerHTML;
}

function popItem(id){
  const index = Kart.indexOf(id);
  if (index > -1) {
    Kart.splice(index, 1);
    console.log("pop id:"+id)
    var Kbar = document.getElementsByClassName("n-selected-bar")[0];
    for (var item of Kbar.children) {
      if (item.id==id){
        item.id.outerHTML=""
      }
    }
  }
}

function KartBar(){
  var Kbar = document.getElementsByClassName("n-selected-bar")[0]
  if (kart.length<=0){
    Kbar.style.visibility="collapse";
  }else{
    Kbar.style.visibility="visible";
  }
}

</script>
