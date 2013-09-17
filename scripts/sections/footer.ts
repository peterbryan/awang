 $("./body") {


 	insert_bottom('div', id: 'mw_footer'){
	//move_here("//*[@id='footer-nav']")
	move_here("//*[@class='footer-nav']")
	move_here('//ul[@class="social-set"]')
	move_here('//*[@id="aw-copyright"]')
}

$('.//div[@id="mw_footer"]'){

 		//Adding the icons to the footer
 		$('./ul[@class="social-set"]'){
 			
 			
 			$("./li[@class='social']/a[contains(@href,'http://twitter')]"){

 				inject_at(position('before'),"<a href='http://twitter.com/AlexanderWangNY'> <i class='icon-twitter-sign'></i></a> ")
 			}

 			$("./li[@class='social']/a[contains(@href,'http://www.facebook')]"){
 				
 				inject_at(position('before'),"<a href='http://www.facebook.com/pages/ALEXANDER-WANG/63263972393'> <i class='icon-facebook-sign'></i></a> ")
 			}

 			$("./li[@class='social']/a[contains(@title,'Mailing')]"){
 				
 				inject_at(position('before'),"<i class='icon-envelope-alt'></i> ")
 			}
 		}


 	}



 }