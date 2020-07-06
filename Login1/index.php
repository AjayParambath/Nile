<html>
    <head>
        <title>Nile - 24/7</title>
        <link rel="stylesheet" href="../css/nile-min.css">
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <style >
    button{}
        .button1 {
              background-color: #4CAF50;
              color: white;
              padding: 14px 20px;
              margin: 8px 0;
              border: none;
              cursor: pointer;
              width: 100%;
            }
         .button1:hover {
              opacity: 0.8;
                }
    </style>
 
<body class="n-nomargin"  >
  <!-- Nav Bar -->
    <div class="n-navbar n-blue ">
        <div class="n-left n-button n-blue-hover n-rounded"><i class="fa fa-shopping-basket n-padding"></i>  Nile-Shopping</div>
        <div class=" n-right">
            <a href="../index.php">
               <button class="n-button n-rounded n-blue-hover"><i class="fa fa-home"></i>Home</button>
            </a>
            <a href="../shop/index.php">
               <button class="n-button n-rounded n-blue-hover"><i class="fa fa-reorder"></i>Categories
               </button>
            </a>
            <a href="../cart/index.php">
                <button class="n-button n-rounded n-blue-hover"><i class="fa fa-cart-plus"></i> Cart</button>
            </a>
            <a href="/index.php">
                <button class="n-button n-rounded n-blue-hover"><i class="fa fa-user"></i>Login</button>
            </a>
        </div>
    </div>








<!--*Main Content-->


<form action="../cart/index.php" method="post">
  <div class="imgcontainer">
    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatar">
  </div>

  <div class="container">
    <div class="n-f-width">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>
    <br>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
    <br>
    </div>
    <button type="submit" class="button button1">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"> Remember me
    </label>
  </div>

  <div class="container" style="background-color:#f1f1f1">
    <button type="button" class="cancelbtn button button1">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
</form>













<!-- Bottom Bar -->
    <div class="n-selected-bar n-blue n-inline n-center">
        <div class="n-selected-item "><img class="n-image" src="https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/m/5/p/na-128-a-pafb0023in-motorola-4-original-imafhmzvrhbrzs5c.jpeg?q=70" alt=""></div>
        <div class="n-selected-item "><img class="n-image" src="https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/m/5/p/na-128-a-pafb0023in-motorola-4-original-imafhmzvrhbrzs5c.jpeg?q=70" alt=""></div>
        <a class="n-button n-rounded n-blue-hover n-right">CheckOut Items</a>
    </div>
</body>
</html>