$(document).ready(function(){

// ToggleMenu
	$('#nav_icon,#menu').click(function(){
		$('.nav_menu').toggleClass("menu_open");
	});
// end

// page scroll
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
			//about
			$('.p_kiri').addClass('p_muncul');
			$('.p_kanan').addClass('p_muncul');
			//end
    }else{
      $('.nav').removeClass('nav_bc');
    };
	//end

	if (wScroll > $('.skillbar').offset().top - 300) {
    $('.skill-percent , .skill-bar').each(function(){
      $(this).find('.percent , .slide-bar').animate({
        width:$(this).attr('data-percent')
      },5000,'easeInOutExpo');
    });
  };

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
	//Default href on portfolio and client
	$('.lightbox,.clientdef').on('click',function(e){
		e.preventDefault();
	});
	//end

});//end windows scroll
// end


}); // akhir document ready


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

