
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  // console.log(currentScrollPos);
  // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
  // if (currentScrollPos > 20) {
  //   // I am using 'display' instead of 'top':
  //   document.getElementById("nav-scroll").style.display = "none";
  // } else {
  //   document.getElementById("nav-scroll").style.display = "initial";
  // }
};

$(".menu")
  .find("li")
  .each(function (i, ele) {
    $(ele).on("click", function () {
      $(`#${ele.className}`)[0].scrollIntoView(true);
    });
  });

$(".company")
  .find("p")
  .each(function (i, ele) {
    $(ele).on("click", function () {
      console.log(i);
      if (i === 0) {
        $(".company1").addClass("active");
        $(".company2").removeClass("active");
        $(".company3").removeClass("active");
        $(".company4").removeClass("active");

        $(".details").html(`
      <h3>Mentor @ Admec</h3>
      <h5>Dec 2021 - Present</h5>
      <section class="job_description">
        <p>
          <img src="./includes/img/triangle.png" alt="" />
          Teaching, guiding students from the design to the
          development process.
        </p>
        <p>
          <img src="./includes/img/triangle.png" alt="" />
          By using frontend technologies such as Adobe XD, Html5,
          Css3, Bootstrap, Sass, JavaScript, jQuery.
        </p>
        <p>
          <img src="./includes/img/triangle.png" alt="" />
          And backend technologies are Php, MySQL, Ajax, Json.
        </p>
        <p>
          <img src="./includes/img/triangle.png" alt="" />
          Wordpress for cms, in terms of creating blogging website or
          develop a customized theme in wordpress using php.
        </p>
      </section>
      `);
      } else if (i === 1) {
        $(".company2").addClass("active");
        $(".company1").removeClass("active");
        $(".company3").removeClass("active");
        $(".company4").removeClass("active");
        $(".details").html(`
      <h3>Freelance Developer @ FYW</h3>
      <h5>Mar 2021 - Dec 2021</h5>
      <section class="job_description">
        <p>
          <img src="./includes/img/triangle.png" alt="" />
          Worked as a freelance web developer for Findyourwish, technologies i have used while working here such as  Html5,
          Css3, Bootstrap, JavaScript, jQuery.
        </p>
        <p>
          <img src="./includes/img/triangle.png" alt="" />
          Some of the live projects i have worked on <br/>
          <div class="live_projects">
          <div>
          <img src="./includes/img/triangle.png" alt="" /> <a href="https://dfl.xyz/" target="_blank">DFL</a> 
          </div>
          <div>
          <img src="./includes/img/triangle.png" alt="" /> <a href="http://samairasandhuofficial.com/" target="_blank">Samaira Sandhu</a> 
          </div>
         <div>
         <img src="./includes/img/triangle.png" alt="" /> <a href="https://findyourwish.com/" target="_blank">FYW Payments</a> 
         </div>
          </div>
        </p>
        
      </section>
      `);
      } else if (i === 2) {
        $(".company3").addClass("active");
        $(".company1").removeClass("active");
        $(".company2").removeClass("active");
        $(".company4").removeClass("active");
        $(".details").html(`
      <h3>Web Designer @ Sharp Vision</h3>
      <h5>Jan 2021 - Mar 2021</h5>
      <section class="job_description">
        <p>
          <img src="./includes/img/triangle.png" alt="" />
          Design responsive and interactive website.
        </p>
        <p>
          
          By using frontend technologies such as :   <br/>       
            <span>Html</span>  <br/>        
            <span>Css</span>    <br/>      
            <span>Sass</span>   <br/>       
            <span>Bootstrap</span>   <br/>       
            <span>Javascript</span>     <br/>     
            <span>jQuery</span>          
        </p>  
      </section>
      `);
      }
    });
  });

// $('.logo').on('click',function(){
//     $("html, body").animate({
//         scrollTop: 0
//       }, 600);
//       return false;
// });

$(".headers")
  .find("h2")
  .each(function (i, ele) {
    $(ele).on("click", function () {
      if (i === 0) {
        $(".skill_head1").addClass("active");
        $(".skill_head2").removeClass("active");
        $(".technology").html(`
      <section class="language">
                    <label for="">html 5</label>
                    <section class="bar">
                      <section class="progress html"></section>
                    </section>
                  </section>
                  <section class="language">
                    <label for="">css 3</label>
                    <section class="bar">
                      <section class="progress css"></section>
                    </section>
                  </section>
                  <section class="language">
                    <label for="">SASS</label>
                    <section class="bar">
                      <section class="progress ss"></section>
                    </section>
                  </section>
                  <section class="language">
                    <label for="">BOOTSTRAP</label>
                    <section class="bar">
                      <section class="progress bs"></section>
                    </section>
                  </section>
                  <section class="language">
                    <label for="">JQUERY</label>
                    <section class="bar">
                      <section class="progress jq"></section>
                    </section>
                  </section>
                  <section class="language">
                    <label for="">JAVASCRIPT</label>
                    <section class="bar">
                      <section class="progress js"></section>
                    </section>
                  </section>
                  <section class="language">
                    <label for="">REACT</label>
                    <section class="bar">
                      <section class="progress rt"></section>
                    </section>
                  </section>
                  <section class="language">
                    <label for="">ADOBE XD</label>
                    <section class="bar">
                      <section class="progress xd"></section>
                    </section>
                  </section>
      `);
      } else {
        $(".skill_head2").addClass("active");
        $(".skill_head1").removeClass("active");
        $(".technology").html(`
      <section class="language">
      <label for="">php</label>
      <section class="bar">
        <section class="progress php"></section>
      </section>
    </section>
    <section class="language">
      <label for="">sql</label>
      <section class="bar">
        <section class="progress sql"></section>
      </section>
    </section>
    <section class="language">
      <label for="">wordpress</label>
      <section class="bar">
        <section class="progress wp"></section>
      </section>
    </section>
    <section class="language">
    <label for="">ajax</label>
    <section class="bar">
      <section class="progress wp"></section>
    </section>
  </section>
  <section class="language">
  <label for="">json</label>
  <section class="bar">
    <section class="progress wp"></section>
  </section>
</section>
      `);
      }
    });
  });




$('.projectSlider').find('i').each(function (i, ele) {
  if (i === 0) {
    $(ele).on('click', function () {
      $(".next").addClass("activeIcon");
      $(".prev").removeClass("activeIcon");
      $('.counter').html('01');
      $('.app_name').html('Responsive Portfolio');
      $('.project_language').html('Javascript');
      $('.project_desc').html('A complete responsive portfolio website, built with html 5 and css 3. This website contains my few practice projects of javascript and jQuery which i built in my learning phase.');
      $('.project_link').html(`
      <a href="https://spideyhere.github.io/responsive-portfolio/" target="_blank"
      >View Project</a
    >
      `);
      $('.demo').html(`
      <section class="preview1">
      <img src="./includes/img/portfolio01.png" alt="" />
    </section>
    <section class="preview2">
      <img src="./includes/img/portfolio02.png" alt="" />
    </section>
    <section class="preview3">
      <img src="./includes/img/portfolio03.png" alt="" />
    </section>
    <section class="preview4">
      <img src="./includes/img/portfolio04.png" alt="" />
    </section>
      `);
    })
  }
  else if (i === 1) {
    $(ele).on('click', function () {
      $(".prev").addClass("activeIcon");
      $(".next").removeClass("activeIcon");
      $('.counter').html('02');
      $('.app_name').html('Feedback App');
      $('.project_language').html('React Js');
      $('.project_desc').html(`A feedback app made with react js and firebase as in
      backend, this app was made for the students of admec to
      submit their feedback regarding the training process and
      how was their experience with tutor.The data get saved
      into the firebase and the app is also hosted on firebase.`);
      $('.project_link').html(`
      <a href="https://admec-feedback.web.app" target="_blank"
                        >View Project</a
                      >
      `);
      $('.demo').html(`
      <section class="preview1">
      <img src="./includes/img/mockup.png" alt="" />
    </section>
    <section class="preview2">
      <img src="./includes/img/mockup2.png" alt="" />
    </section>
    <section class="preview3">
      <img src="./includes/img/mockup4.png" alt="" />
    </section>
    <section class="preview4">
      <img src="./includes/img/mockup3.png" alt="" />
    </section>
      `);
    })
  }
})




//cursor moving
function cusror_move() {
  let cursor = document.querySelector(".cursor");
  let cursor2 = document.querySelector(".cursor-2");

  document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
  });
}
cusror_move();
