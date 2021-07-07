
var Kart = [];
var Kbar = document.getElementsByClassName("n-selected-bar")[0];
var ItemContainer = document.getElementsByClassName("n-items")[0];
var ListItems = []


// tooltip message-function
function tooltip(message) {
  var tooltip=document.getElementById('tooltip');
  tooltip.style.opacity=1;
  tooltip.innerHTML="<p>"+message+"</p>"
  setTimeout(function(){
      tooltip.style.opacity=0;
  }, 3000);
}

// Get Items from JSON
function getList() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var myObj = JSON.parse(this.responseText);
      populate(myObj)
      ListItems=myObj;
      console.log(myObj)
    }
  };
  xmlhttp.open("GET", "../data/items.json", true);
  xmlhttp.send();
}

function populate(data){
  jsonn=data;
  if(ItemContainer.children.length>0){
    ItemContainer.innerHTML=""
  }
  var html='<div id="television">'
  var category = 'television';
  for (var item in data[category]) {
    html += GenHtml(data,category,item);
  }
  html+='</div><div id="smartphone">'
  var category = 'smartphone';
  for (var item in data[category]) {
    html+= GenHtml(data,category,item);
  }
    html+='</div>'
    ItemContainer.innerHTML+=html;
}

function GenHtml(data,category,item){
  return `<div class="n-item" id="`+item+`" >
    <span class="n-item-price">&#8377; `+(data[category][item]['i-price']*1-1)+`<p class="n-cut">&#8377; `+(data[category][item]['i-price']*1+2000)+`</p></span>
    <img class="n-image" src="`+data[category][item]['i-img']+`" alt="`+data[category][item]['i-name']+`">
    <h3>`+data[category][item]['i-name']+`</h3>
    <p>`+data[category][item]['i-caption']+`</p>
    <p>Quantity <input type="number" min="0" max="5" value="1"></p>
    <button class="n-button n-right n-rounded n-blue-hover" mode="add" name="button" onclick="addToCart('`+item+`',this)">Add <i class="fa fa-cart-plus"></i></button>
    <button class="n-button n-right" name="button" onclick="details(this)">Details</button>
  </div>
  `;
}


function SwitchTab(topic){
    document.getElementById('television').style.display="none";
    document.getElementById('smartphone').style.display="none";
  if(topic=="all"){
    document.getElementById('television').style.display="";
    document.getElementById('smartphone').style.display="";
  }else{
    document.getElementById(topic).style.display="";
  }
}

// ON LOAD - RUN
getList()
// AllItems=1

function checkSpace() {
  if (Object.keys(Kart).length<5){
    return true;
  }else{
    alert("Kart is Full")
    return false;
  }
}
function UpdateBar(){
  if (Object.keys(Kart).length>0){
    Kbar.style.display="";
  }else{
    Kbar.style.display="none";
  }
}

function addToCart(id,button) {
  if(checkSpace()){
    var qty = document.getElementById(id).children[4].children[0]
    if(id in Kart){
      a=1;
    }else{
      console.log(qty);
      Kart[id]=qty.value;
      qty.value=1;
      makeButtonRemove(button,id);
      makeKartItem(id);
    }
  }
}

function popFrmKart(id,button) {
    if(id in Kart){
      delete Kart[id]
      makeButtonAdd(button,id);
      removeKartItem(id);
    }
}

function makeButtonRemove(button,id){
  button.innerHTML='Remove <i class="fa fa-cart-plus"></i>';
  button.setAttribute("onclick","popFrmKart('"+id+"',this)");
}

function makeButtonAdd(button,id){
  button.innerHTML='Add <i class="fa fa-cart-plus"></i>';
  button.setAttribute("onclick","addToCart('"+id+"',this)");
}

function makeItemEntry(id) {
  return '<div class="n-selected-item" id="bar-'+id+'">'
    +'<span class="n-selected-close" onclick="decrementKart(\''+id+'\')">X</span>'
    +'<p class="n-selected-number">'+Kart[id]+'</p>'
    +document.getElementById(id).children[1].outerHTML
    +'</div>'
}

function makeKartItem(id){
  Kbar.innerHTML=makeItemEntry(id)+Kbar.innerHTML;
}
function removeKartItem(id){
  document.getElementById('bar-'+id).outerHTML=""
}
