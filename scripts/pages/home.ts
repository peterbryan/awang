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

	insert_top('div', id: 'mw_carousel_wrapper') {
      attribute('data-ur-set', 'carousel')
      attribute('data-ur-id', 'hero_carousel') 
      #attribute('data-ur-state', 'enabled') 

      move_here('//div[@id="mw_hidden_content"]') {
        remove('.//div[@id="welcome_text"]')
        attributes(style: "display: block") 
      # insert('div', id: 'mw_hidden_content') {
        #attribute('data-ur-set', 'carousel')
        attribute('data-ur-id', 'hero_carousel') 
        attribute('data-ur-carousel-component', 'view_container')
        attribute('data-ur-infinite', 'enabled')
        attribute('data-ur-autoscroll', 'enabled')
        attribute('data-ur-vertical-scroll', 'enabled')
        attribute("data-ur-fill", "1")
        
        $('.//div[@class="main-promo-item-image"]') {
        #insert('div', id: 'banner_imgs') {
          attribute('data-ur-carousel-component', 'scroll_container')
          attribute('data-ur-id', 'hero_carousel')
          attribute('data-ur-vertical-scroll', 'disabled')

          insert('img', src: asset('http://nl.yoox.biz/newsl/011013_af/130927_f13_rtw_hp_ctg_main.jpg'))
          # insert('img', src: asset('images/warehouse_hero2.jpg'))
          # insert('img', data-src: asset('images/warehouse_hero3.jpg'))
          
          #insert('a') {
          $('./a') {
            add_class(index())

            # hard coded until they provide clean urls
            # attributes(href: "new-in-garments/dept/fcp-category/list")

            $clean_url = fetch('./@href') {
              #replace("http://mstage.warehouse.co.uk", "")
            }
            attribute('href', $clean_url)

            $('./img') {
              $x_src = fetch("./@data-src")
              
              attribute("src", $x_src)
              # wrap("a") {
              #   attributes(data-ur-id: 'hero_carousel', data-ur-carousel-component: 'item')
              # }
            }
            wrap('div') {
              attribute('data-ur-id', 'hero_carousel') 
              attribute('data-ur-carousel-component', 'item')
            }
            
          } // a href
        } // banner imgs
        insert('div', data-ur-carousel-component:'dots')
      } //hidden_content

    # move the search box at the end for the home page only so it is below the hero carousel
      #move_here('//div[@id="sli_search"]', 'after')
    } // mw_carousel_wrapper
   }//end container


///////////////////////////////////


	$$("#main"){
		remove(css(".carousel"))	
		##In Xpath 
		/**
		remove("./*[class='carousel']")
		**/
	}
	$('//*[@id="main"]/ul[@class="bottom-promo"]'){
		 remove()
	}
}