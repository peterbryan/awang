# Place holder/example file
#./ x path selector

$("./body"){
	add_class("mw_home")
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