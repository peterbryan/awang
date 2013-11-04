# Place holder/example file
#./ x path selector

$("./body"){
	  $('.//div[@class="main-logo"]')
  {
    remove();
  }
	add_class("mw_home")
/////////////////////////////////////
//Carusel Adding it to top of "Container Class"
/// Which is above of the search bar on main page
//
    $('.//div[@id="container"]'){
       $(".//div[@class='carousel']"){
        add_class('mw_hide')
        add_class('mw_carousel2')
        }


	   insert_top('div', id: 'mw_carousel_wrapper')
        $('.//div[@id="mw_carousel_wrapper"]')  
        {
          attribute('data-ur-set','carousel')
          attribute('data-ur-id','MainCarousel')

          insert('div',id:'mw_carousel_container'){
            attribute('data-ur-carousel-component','scroll_container')
          }
          insert('div',id:'mw_promotions')    {
            attribute('data-ur-id','MainCarousel')
            attribute('data-ur-carousel-component', 'view_container')
            attribute('data-ur-infinite', 'enabled')
            attribute('data-ur-autoscroll', 'enabled')
            attribute('data-ur-vertical-scroll', 'enabled')
            attribute("data-ur-fill", "1")
            insert('div', id:'mw_promo_images'){ //new div
              attribute('data-ur-carousel-component','scroll_container')
              attribute('data-ur-id','MainCarousel')
              attribute('data-ur-vertanical-scroll','disabled')
              move_here("//div[contains(@class, 'mw_carousel2')]//div[@class='main-promo-item-image'][1]/a[1]"){
                attribute('data-ur-compnent','item')
              }
            //insert('img',src: asset('something.jpg')
          }
              
          }// div mw_promotions end           
      } //Carousel_Wrapper End
     }//Container End

    $("//*[@id='mw_promo_images']/a[2]"){
        remove()
        }


	$$("#main"){
		    //remove(css(".carousel"))	
		##In Xpath 
		/**
		remove("./*[class='carousel']")
		**/
	}
	$('//*[@id="main"]/ul[@class="bottom-promo"]'){
		 remove()
	}
}