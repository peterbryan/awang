$("./body") {
//attempt to remove the extra quotes that load



//removing the space between the Header and the search bar



	//removal of the main gloval nav
	remove("//*[@id='container']/div[2]/div[2]")

	$(".//div[@id='site']"){

		add_class('mw_accessories')
	
		$('.//[@class="mw_accessories"]'){
			//moving the content of accessories all page into the new class
			move_here("//*[@id='container']/div[3]")
			//move_here(".//div[@class='view view-product view-product_list']")
			
			//fix syntax to remove white space
			$("//*[@iframe(@name='google_conversion_frame'])"){
				remove();
				}
		}

	}
	//now to remove the white space in between the footer and the site
	//for that remove div class "clear"

}