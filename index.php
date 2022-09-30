<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PORTOLIO DESIGN </title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" rel="stylesheet" type="text/css"> 
    <link href="css.css" rel="stylesheet" type="text/css" >
</head>

<body>
    <input type="checkbox" id="test">
    <script> $('body,html').on('click',function(){$('.menu').hide();})</script>
    <div class="sidebar">

        <ul>
            <li><a href="#about" > About me </a></li>
            <li><a href="#skill" > My Skill </a></li>
            <li><a href="#portofolio" >My Portofolio  </a></li>

        </ul>

    </div>

    <header>
        <div class="header-con">
            <h2><a href=""> Farhan Noval Hidayat </a> </h2>
            <ul>
                <li><a href="#about"> About Me </a></li>
                <li><a href="#skill"> My Skill </a></li>
                <li> <a href="#portofolio"> My Portofolio </a></li>
            </ul>

        <label for="test" class="mobile"> <i class="fa-solid fa-bars fa-2x"></i></label>

        </div>
    </header>


    <section class="banner">
        
        <div class="container">
            <div class="banner-left">
                <img src="img/Profile.jpg" alt="">
                <h2> HI, I'm a <span class="test-profile"></span></h2>
                <p>  I'live in Indonesia </p>
            </div>
        </div>
    </section>

    <section id="about">
        <div class="container">
            <h3> About </h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, labore? Dolorem neque corporis odio obcaecati nam, soluta eius illum itaque similique dolore ab alias cupiditate sed delectus est at voluptatibus quod sunt voluptate, atque impedit eos, doloremque ut! Qui, repellendus!</p>
            <br>

            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae sint explicabo illo ipsum est, autem rem quibusdam tempore unde omnis possimus! Cum officia ullam laborum inventore similique nostrum consequuntur, ipsa fugiat aspernatur quos odit? Nesciunt laborum molestias nostrum sapiente aspernatur.</p>
        </div>   
    </section>

    <section id="skill">
        <div class="container">
            <h3> My Skill </h3>
            
            <h4> HTML </h4>
            <div class="bar">
                <span class="nilai html"> 90% </span>
            </div>

            
            <h4> CSS </h4>
            <div class="bar">
                <span class="nilai css"> 80% </span>
            </div>

            
            <h4> JavaScript </h4>
            <div class="bar">
                <span class="nilai js"> 70% </span>
            </div>

            
            <h4> PHP </h4>
            <div class="bar">
                <span class="nilai php"> 70% </span>
            </div>

            
            <h4> Photosop </h4>
            <div class="bar">
                <span class="nilai pts"> 70% </span>
            </div>

            <h4> Figma  </h4>
            <div class="bar">
                <span class="nilai figma"> 85% </span>
            </div>
        </div>
    </section>

    <section id="portofolio">
        <div class="container">
        <h3> My Portofolio </h3>
            <div class="col-4">
                <a href="">
                    <img src="img/8.png" alt="">
                    <span> Portofolio 1 </spam>
                </a>
            </div>

            <div class="col-4">
                <a href="">
                    <img src="img/8.png" alt="">
                    <span> Portofolio 2 </spam>
                </a>
            </div>

            <div class="col-4">
                <a href="">
                    <img src="img/8.png" alt="">
                    <span> Portofolio 3 </spam>
                </a>
            </div>

            <div class="col-4">
                <a href="">
                    <img src="img/8.png" alt="">
                    <span> Portofolio 4 </spam>
                </a>
            </div>

            <div class="col-4">
                <a href="">
                    <img src="img/8.png" alt="">
                    <span> Portofolio 1 </spam>
                </a>
            </div>

            <div class="col-4">
                <a href="">
                    <img src="img/8.png" alt="">
                    <span> Portofolio 6 </spam>
                </a>
            </div>

            <div class="col-4">
                <a href="">
                    <img src="img/8.png" alt="">
                    <span> Portofolio 7 </spam>
                </a>
            </div>

            <div class="col-4">
                <a href="">
                    <img src="img/8.png" alt="">
                    <span> Portofolio 8 </spam>
                </a>
            </div>
        </div>

    </section>

    <section id="Contact">
        <div class="container">
            <h3> Contact </h3>
        </div>

        <div class="col-3"> 
            <h4> Alamat </h4>
            <p> Cibaduyut, Bandung, Jawa Barat. </p>
        </div>

        <div class="col-3"> 
            <h4> Email </h4>
            <p> Farhannovaal@gmail.com </p>
        </div>

        <div class="col-3"> 
            <h4> Instagram </h4>
            <p> <a href=""> Farhan Noval </a> </p>
        </div>
    </section>

        <footer>
            <div class=""> <small>Copyright  : 2022 - Vall </small>    </div>
        </footer>

<script src="edit.js"></script>
</body>
</html>