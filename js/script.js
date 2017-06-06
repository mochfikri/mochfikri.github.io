// ToggleMenu
$(document).ready(function(){
	$('#nav_icon').click(function(){
		$('.nav_menu').toggleClass("menu_open");
	});
	$('#menu').click(function(){
		$('.nav_menu').toggleClass("menu_open");
	});
});
// end


// fixed background scrolling body

$('.page_scroll').on('click',function(e){

  var tujuan = $(this).attr('href');

  var elementTujuan = $(tujuan);

  $('body').animate({
    scrollTop: elementTujuan.offset().top -100
  }, 1000, 'easeInOutExpo');

  e.preventDefault();

});

// end



// parallax scroll
$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  //Navigasi
    if (wScroll >= 250) {
      $('.nav').addClass('nav_bc');
    }else{
      $('.nav').removeClass('nav_bc');
    };
	//end


  // jumbotron

  $('.jumbotron img').css({
    'transform' : 'translate(0px, '+ wScroll/3 +'%)'
  });
  $('.jumbotron h1').css({
    'transform' : 'translate(0px, '+ wScroll/2 +'%)'
  });
  $('.jumbotron p').css({
    'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
  });

  // portfolio

  if (wScroll > $('.portfolio').offset().top - 350) {
    $('.portfolio .col_3_folio').each(function(i){
      setTimeout(function(){
         $('.portfolio .col_3_folio').eq(i).addClass('open');
      },300 * (i+1));
    });
  };

});
// end

// validasi

function validasi(form){
  var erorText = '';

  for (i=0; i<3; i++){
		switch (i) {
			case 0: erorText = 'Nama';break;
			case 1: erorText = 'Email';break;
			case 2: erorText = 'Massage';break;
			default:

		}
    if(form[i].value.trim().length <= 0){
      sweetAlert("Gagal...", erorText + " Tidak boleh kosong!", "error");
      return false;
    };
  };
  if(form[i].value.trim().length != 0){
    swal("Berhasil!", "Data sudah terkirim!", "success");
    return false;
  };
};

// end
