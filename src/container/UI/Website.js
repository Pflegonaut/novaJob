<style>
    .quiz-wrapper {
      display: block;
      margin: 0 auto;
      max-width: 300px;
      position: relative;
      font-family: "Open Sans", Open Sans, sans-serif;
      font-size: 16px;
      line-height: 1.4;
    }
    .quiz-wrapper:after {
      content: '';
      display: block;
      width: 100%;
      padding-top: 200%;
    }
    .quiz-phone {
/*      -webkit-box-shadow: inset 0px 0px 32px 0px rgba(179,179,179,1);
      -moz-box-shadow: inset 0px 0px 32px 0px rgba(179,179,179,1);
      box-shadow: inset 0px 0px 32px 0px rgba(179,179,179,1);*/
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 40px;
    background: rgb(212,212,212);
      background: -moz-linear-gradient(0deg, rgba(212,212,212,1) 0%, rgba(241,241,241,1) 100%);
      background: -webkit-linear-gradient(0deg, rgba(212,212,212,1) 0%, rgba(241,241,241,1) 100%);
      background: linear-gradient(0deg, rgba(212,212,212,1) 0%, rgba(241,241,241,1) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#d4d4d4",endColorstr="#f1f1f1",GradientType=1);
    }
    .Xquiz-phone:before {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      background-color: #fff;
      height: 1%;
      width: 10%;
      top: 3%;
      border-radius: 4px;
      border-top: 1px solid #999;
    }
    .Xquiz-phone:after {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      background-color: rgba(220,220,220,1);
      height: 4%;
      width: 10%;
      bottom: 1%;
      border-radius: 100%;
      border-top: 1px solid #666;
    }
    .quiz-content {
      -webkit-box-shadow: inset 0px 0px 3px 0px rgba(179,179,179,1);
      -moz-box-shadow: inset 0px 0px 3px 0px rgba(179,179,179,1);
      box-shadow: inset 0px 0px 3px 0px rgba(179,179,179,1);
      background-color: #fff;
      text-align: center;
      position: absolute;
      height: 94%;
      width: 90%;
      left: 5%;
      top: 3%;
      height: calc(100% - 20px);
      width: calc(100% - 20px);
      top: 10px;
      left: 10px;
      overflow: hidden;
      border-radius: 34px;
    }
    .quiz-content:before {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      background-color: rgba(241,241,241,1);
      height: 20px;
      width: 40%;
      top: 0px;
      border-radius: 8px;
      border-top-right-radius: 0;
      border-top-left-radius: 0;
      -webkit-box-shadow: inset 0px 0px 3px 0px rgba(179,179,179,1);
      -moz-box-shadow: 0px 0px 3px 0px rgba(179,179,179,1);
      box-shadow: 0px 0px 3px 0px rgba(179,179,179,1);
          z-index: 999;
    }
    .quiz-phone:after {
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background-color: #eee;
        height: 4px;
        width: 20%;
        top: 17px;
        border-radius: 2px;
        -webkit-box-shadow: inset 0px 0px 3px 0px rgba(179,179,179,1);
        -moz-box-shadow: 0px 0px 3px 0px rgba(179,179,179,1);
        box-shadow: inset 0px 0px 3px 0px rgba(179,179,179,1);
          z-index: 999;
      }
    .quiz-content-half {
      height: 50%;
      position: relative;
    z-index: 1;
      width: 100%;
      overflow: auto;
    }
    .quiz-content:after {
      content: '';
      display: block;
      position: absolute;
      width: 250%;
      height: 50%;
      left: 50%;
      transform: translateX(-50%);
      top: -5%;
      border-radius: 100%;
      background: rgb(193,229,245);
      background: -moz-linear-gradient(0deg, rgba(193,229,245,1) 0%, rgba(255,255,255,0) 100%);
      background: -webkit-linear-gradient(0deg, rgba(193,229,245,1) 0%, rgba(255,255,255,0) 100%);
      background: linear-gradient(0deg, rgba(193,229,245,1) 0%, rgba(255,255,255,0) 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#c1e5f5",endColorstr="#ffffff",GradientType=1);
    }
    .quiz-content-top {
      padding: 5%;
      box-sizing: border-box;
        display: flex;
  align-items: center;
  justify-content: center;
    }
    .quiz-question {
      position: relative;
    }
    .quiz-question>span {
      color: #FF5B99;
      font-weight: bold;
    }
    .quiz-content-bottom {
      display: flex;
      flex-flow: column;
      padding: 5% 0;
      box-sizing: border-box;
    }
    .quiz-button {
      height: 25%;
      max-width: 90%;
      font-weight: bold;
      text-decoration: none;
      color: #000;
      background-color: #fff;
      margin: 4px 5%;
      box-sizing: border-box;
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      -webkit-box-shadow: 0px 3px 5px 0px rgba(179,179,179,1);
      -moz-box-shadow: 0px 3px 5px 0px rgba(179,179,179,1);
      box-shadow: 0px 3px 5px 0px rgba(179,179,179,1);
      transition: 100ms ease-in-out all;
    }
    .quiz-button:hover {
      color: #fff;
      background-color: rgba(48, 170, 150, .8);
    }
    .quiz-overlay {
      background-color: #fff;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0%;
      top: 0%;
      padding: 10px;
      z-index: 9;
      opacity: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      top: 100%;
      -webkit-box-shadow: inset 0px 0px 3px 0px rgba(179,179,179,1);
      -moz-box-shadow: inset 0px 0px 3px 0px rgba(179,179,179,1);
      box-shadow: inset 0px 0px 3px 0px rgba(179,179,179,1);
      overflow: hidden;
      border-radius: 34px;
    }
    .quiz-overlay-answer {
      opacity: 0;
      background-color: #fff;
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5%;
      overflow: auto;
    }
    .quiz-overlay-answer>div {
      padding: 10px;
    }
    .quiz-title {
      font-weight: bolder;
      font-size: 24px;
    }
    .quiz-true i.fas, .quiz-true .quiz-title {
      color: #749C2C;
    }
    .quiz-true {
background: rgb(116,156,44);
background: -moz-linear-gradient(0deg, rgba(116,156,44,0.50) 0%, rgba(255,255,255,0) 25%);
background: -webkit-linear-gradient(0deg, rgba(116,156,44,0.50) 0%, rgba(255,255,255,0) 25%);
background: linear-gradient(0deg, rgba(116,156,44,0.50) 0%, rgba(255,255,255,0) 25%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#749c2c",endColorstr="#ffffff",GradientType=1);
    }
    .quiz-false {
background: rgb(171,6,8);
background: -moz-linear-gradient(0deg, rgba(171,6,8,0.50) 0%, rgba(255,255,255,0) 25%);
background: -webkit-linear-gradient(0deg, rgba(171,6,8,0.50) 0%, rgba(255,255,255,0) 25%);
background: linear-gradient(0deg, rgba(171,6,8,0.50) 0%, rgba(255,255,255,0) 25%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ab0608",endColorstr="#ffffff",GradientType=1);
    }
     .quiz-false i.fas, .quiz-false .quiz-title {
      color: #AB0608;
    }
    .quiz-overlay i.fas {
      font-size: 72px;
      -webkit-animation-name: pulse;
      animation-name: pulse;
      -webkit-animation-duration: 1s;
      animation-duration: 1s;
      -webkit-animation-fill-mode: both;
      animation-fill-mode: both;
        -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
    }
    @-webkit-keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@media (max-height: 768px) { 
.quiz-wrapper {transform: scale(0.7);}
 }
@media (max-height: 550) { 
.quiz-wrapper {transform: scale(0.5);}
 }
  </style>
  <script>
(function($){
$(function(){
  
  console.log('Quiz loaded...');
  
  $('.quiz-button').each(function(){
    var btn = $(this);
    var answer = btn.data('quiz');
    btn.click(function(){
      console.log(answer);
      $('.quiz-overlay').animate({
    top: 0,
        opacity: 1
  }, 300, function() {
    
     if (answer == true) {
        console.log('TRUE');
       $('.quiz-true').animate({opacity: 1}, 150);
      } else {
        console.log('FALSE');
        $('.quiz-false').animate({opacity: 1}, 150);
      }
        
  });

    });
  });
  
});
})(jQuery);
  </script>
</head>

<body>
  
  <div class="quiz-wrapper">
    <div class="quiz-phone">
      <div class="quiz-content">
        <div class="quiz-content-half quiz-content-top">
          
          <p class="quiz-question"><b>Frage:</b><br><br>Wir haben uns umgehört und uns gefragt, wie zufrieden die Azubis mit dem Online Lernangebot sind. Was glauben Sie?</p>
        </div>
        <div class="quiz-content-half quiz-content-bottom">
          <a href="#answer-a" data-quiz="false" class="quiz-button">A: die Hälfte</a>
          <a href="#answer-b" data-quiz="false" class="quiz-button">B: ein Viertel</a>
          <a href="#answer-c" data-quiz="true" class="quiz-button">C: mehr als zwei Drittel</a>
          <a href="#answer-d" data-quiz="false" class="quiz-button">D: alle sind zufrieden</a>
        </div>
        <div class="quiz-overlay">
          <div class="quiz-true quiz-overlay-answer">
            <div>
              <i class="fas fa-check"></i>
            <p class="quiz-title">RICHTIG</p>
              <p>Richtig! Wir finden zwei Drittel zuviel. Lasst uns das zusammen ändern. </p>
              </div>
          </div>
          <div class="quiz-false quiz-overlay-answer">
            <div>
              <i class="fas fa-times"></i>
            <p class="quiz-title">FALSCH</p>
              <p>Leider sind es tatsächlich zwei Drittel. Lasst uns das zusammen ändern.</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>

