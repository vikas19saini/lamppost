<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"/>
    <link rel="shortcut icon" href="img/favicon.png" type=""/>
    <title>Lamppost Design || services</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/owl.carousel.css" type="text/css" rel="stylesheet"/>
    <link href="css/aos.css" type="text/css" rel="stylesheet"/>
    <link href="css/style.css" type="text/css" rel="stylesheet" />
    <link href="css/header.css" type="text/css" rel="stylesheet" />
    <link href="css/footer.css" type="text/css" rel="stylesheet" />
    <link href="css/responsive.css" type="text/css" rel="stylesheet" />
</head>
<body>

<!-- Start header -->
   <?php @include("include/header.php") ?>
<!-- End header -->

<div class="work_main">
  <div class="row">
    <div class="work_area">
      <div class="work_left">
        <span class="active"><img src="img/work1.jpg" class="img-responsive" alt=""/></span>
        <span><img src="img/work2.jpg" class="img-responsive" alt=""/></span>
      </div>
      <div class="work_right">
        <ul>
           <li class="active">Sahiba <span>WEB DESIGN</span><i></i></li>
           <li>idoag <span>WEB DESIGN . BRANDING . CONTENT</span><i></i></li>
           <li>Checon Shivalik <span>WEB DESIGN</span><i></i></li>
           <li>HP Singh <span>WEB DESIGN . S.E.O . E-COMMERCE360</span><i></i></li>
           <li>Goyal Motors <span>WEB DESIGN . S.E.O</span><i></i></li>
           <li>HP Singh <span>WEB DESIGN . S.E.O . E-COMMERCE360</span><i></i></li>
           <li>Goyal Motors <span>WEB DESIGN . S.E.O</span><i></i></li>
        </ul>
      </div>
    </div>  
  </div>
</div>


<!-- Start footer -->
<?php @include("include/footer.php") ?>
<!-- End footer -->

<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
<script>window.jQuery || document.write('<script src="js/jquery-1.12.0.min.js"><\/script>')</script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/owl.carousel.js"></script>
<script type="text/javascript" src="js/aos.js"></script>
<script type="text/javascript" src="js/jarallax.js"></script>
<script type="text/javascript" src="js/main.js"></script>

<script>
$(document).ready(function(){
  $(".work_right ul li").mouseover(function(){
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });
});

</script>

</body>
</html>