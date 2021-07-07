<html>
    <head>
        <title>Nile - 24/7</title>
        <link rel="stylesheet" href="../css/nile-min-1.css">
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
<body class="n-nomargin">
    
  <!-- Nav Bar -->
    <div class="n-navbar n-blue ">
        <div class="n-left n-button n-blue-hover n-rounded"><i class="fa fa-shopping-basket n-padding"></i>  Nile-Shopping</div>
        <div class=" n-right">
            <button class="n-button n-rounded n-blue-hover"><i class="fa fa-home"></i>Home</button>
            <button class="n-button n-rounded n-blue-hover"><i class="fa fa-reorder"></i>Shop</button>
            <button class="n-button n-rounded n-blue-hover"><i class="fa fa-cart-plus"></i> Cart</button>
            <button class="n-button n-rounded n-blue-hover"><i class="fa fa-user"></i>Login</button>
        </div>
    </div>
    <div class="n-content">
      <div class="n-categories">
        Categories
        <li class="n-category n-padding n-blue-hover" onclick="SwitchTab('all')">All Items</li>
        <ul>
          <li class="n-category n-padding n-blue-hover" onclick="SwitchTab('television')">Televisions</li>
          <li class="n-category n-padding n-blue-hover" onclick="SwitchTab('smartphone')">Smartphones</li>
        </ul>
      </div>
      <div class="n-items">
        <div class="n-item" id="phone1" >
            <h5 class="n-center">Items Loading from Server</h5>
        </div>
      </div>
    </div>
    
<!-- Information Bar -->
    <div class=" n-blue n-info" id="tooltip"><p>This is an information Bar</p></div>

<!-- Bottom Bar -->
    <div class="n-selected-bar n-blue n-inline n-center">
        <span class="n-button n-rounded n-blue-hover n-fixed-left">Total: Rs.<span id="n-text-large KartTotal">0.0</span></span>
        <a class="n-button n-rounded n-blue-hover n-fixed-right"><i class="fa fa-cart-plus"></i> CheckOut Items</a>
    </div>
</body>
<script src="../js/nile.js"></script>

</html>
