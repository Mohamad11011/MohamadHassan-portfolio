//Custom cursor to follow cursor
document.addEventListener("mousemove", function(event) {
  const x = event.pageX - 10;
  const y = event.pageY - 10;
  const cursor = document.querySelector(".cursor");
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
});


$("#CV").click(function(){
  $("#CV-PDF").show();
  
}); 




var btn = $('#top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
