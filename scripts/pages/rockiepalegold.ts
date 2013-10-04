$("./body"){



	$(".//div[@id='site']"){
		add_class('mw_item')

		//removing content and putting
		//the images on a tab using uranium
		$('.//div[@class="product-visual"]'){
				remove();
				}
		$('.//ul[@class="alternate-visuals-set"]'){
				remove();
				}
		$('.//div[@id="detail_visualalternate"]'){
				remove();
				}

		$('.//*[@id="product_options"]/div/div[2]/fieldset/ul/li[3]'){
				remove();
				}
		$('.//*[@id="detail_sku"]/div[3]/ul[1]/li[2]'){
				remove();
				}
		$(".//*[@iframe[@name='google_conversion_frame']"){
				remove();
				}
		$('/html/body/noscript'){
				remove();
				}
		$('.//div[@class="header_spacer"]'){
				remove();
				}
		$('.//div[@class="global-nav"]'){
			remove();
		}
		$('.//div[@class="view-header clearfix"]'){
			remove();
		}


		$('.//*[@id="detail_visual"]'){
			//remove class="alt variant-thumbnail-set view-set"

			inject(" Image <div data-ur-set='tabs'>
				<span data-ur-tabs-component='button' data-ur-tab-id='first' data-ur-state='enabled'>First</span>
				<span data-ur-tabs-component='button' data-ur-tab-id='second'> Second </span>
				<span data-ur-tabs-component='button' data-ur-tab-id='third'> Third </span>
				<span data-ur-tabs-component='button' data-ur-tab-id='fourth'> Fourth </span>

				<div data-ur-tabs-component='content' data-ur-tab-id='first' data-ur-state='enabled'>
				<img width='290px' height='300px' src='http://imagesecaw.ctscdn.com/image/660/940/ceaf116d-e39c-4a4a-ad2d-852495779c37.jpg'/>
				</div>

				<div data-ur-tabs-component='content' data-ur-tab-id='second'>
				<img width='290px' height='300px' src='http://imagesecaw.ctscdn.com/image/259/369/ff11a8f9-24f1-4a5a-a540-7ab0c4c39763.jpg'/>
				</div>

				<div data-ur-tabs-component='content' data-ur-tab-id='third'>
				<img width='290px' height='300px' src='http://imagesecaw.ctscdn.com/image/259/369/e1c3eaab-39ab-416c-9877-78c42de6816f.jpg'/>
				</div>

				<div data-ur-tabs-component='content' data-ur-tab-id='fourth'>
				<img width='290px' height='300px' src='http://imagesecaw.ctscdn.com/image/259/369/375c54d3-a7d4-48c3-9e57-7b678ee76df5.jpg'/>
				</div>

				</div>")


		}
	}
}