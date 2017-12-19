$(document).ready(function(){

  window.onload = function(){
   var canvas = document.getElementById("canvas");
   var ctx = canvas.getContext("2d");
   var img = document.getElementById("body");
   ctx.drawImage(img, 130, 250, 350, 350);
 };
window.onload();

  $('#eye1').click(function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("eye1");
    ctx.clearRect(250, 200, 50, 50);
    ctx.clearRect(320, 200, 50, 50);
    ctx.rect(250, 200, 50, 50);
    ctx.rect(320, 200, 50, 50);
    ctx.fillStyle = "rgb(204, 166, 232)";
    ctx.fill();
    ctx.drawImage(img, 250, 200, 50, 50);
    ctx.drawImage(img, 320, 200, 50, 50);
  });
  $('#eye2').click(function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("eye2");
    ctx.clearRect(250, 200, 50, 50);
    ctx.clearRect(320, 200, 50, 50);
    ctx.rect(250, 200, 50, 50);
    ctx.rect(320, 200, 50, 50);
    ctx.fillStyle = "rgb(204, 166, 232)";
    ctx.fill();
    ctx.drawImage(img, 250, 200, 50, 50);
    ctx.drawImage(img, 320, 200, 50, 50);
  });
  $('#eye3').click(function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("eye3");
    ctx.clearRect(250, 200, 50, 50);
    ctx.clearRect(320, 200, 50, 50);
    ctx.rect(250, 200, 50, 50);
    ctx.rect(320, 200, 50, 50);
    ctx.fillStyle = "rgb(204, 166, 232)";
    ctx.fill();
    ctx.drawImage(img, 250, 200, 50, 50);
    ctx.drawImage(img, 320, 200, 50, 50);
  });

  $('#head1').click(function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = "img/bear-head.svg";
    ctx.drawImage(img, 210, 140, 200, 200);
  });
  $('#head2').click(function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = "img/cat-head.svg";
    ctx.drawImage(img, 200, 100, 220, 250);
  });
  $('#mouth1').click(function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("mouth1");
    // ctx.clearRect(285, 270, 50, 50);
    ctx.rect(285, 270, 50, 50);
    ctx.fillStyle = "rgb(204, 166, 232)";
    ctx.fillRect(285, 270, 50, 50);
    ctx.drawImage(img, 285, 270, 50, 50);
  });
  $('#mouth2').click(function(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("mouth2");
    // ctx.clearRect(285, 270, 50, 50);
    ctx.rect(285, 270, 50, 50);
    ctx.fillStyle = "rgb(204, 166, 232)";
    ctx.fillRect(285, 270, 50, 50);
    ctx.drawImage(img, 285, 270, 50, 50);
  });


});
