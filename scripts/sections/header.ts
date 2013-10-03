$("./head"){
  inject('<link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.no-icons.min.css" rel="stylesheet"> <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">"')
}

$("./body") {

//Header Top Menu
insert_top('div', id: 'mw_header'){
  move_here('//a[@class="logo"]')
  move_here('//ul[@class="action-set"]')
  //flexbox: css attribute for css layouts
  //attempt to make the logo into an actual logo;
  $$(".a.logo"){
    attribute("src","http://jscssecaw.ctscdn.com/content/images/logo.png")
  }

$$("a.logo"){
  inner("")
  insert("img",src: "http://jscssecaw.ctscdn.com/content/images/logo.png")
  }
}

$('.//ul[@class="action-set"]'){
  //Menu Icon being added just after the acion-set
      //inject_at(position('after'),"<i class='icon-th-list'></i> Menu")
      //Injecting html that creates a new li element,
      // the menu including its icon as its easiest here as
      //there is only one 'action' element in the list
      //to avoid duplicates.

      //Update: When user goes to a specific item, there is more than one
      //action element.

      //$("./li[@class='action']"){
      inject("<li class='link'><i class='icon-th-list'></i> Menu</li>")
    
    //The Icons Being Added to action-set Go Here
    $$("a.change-country_link"){
      inject_at(position('before'), "<i class='icon-globe'></i>  ")
    }
    $("./li[@class='link']/a[contains(@href,'checkout')]"){ 
      inject_at(position('before'),"<i class='icon-shopping-cart'></i> ")
    }

    $("./li[@class='link']/a[contains(@href,'wishlist')]"){ 
      remove()
      //inject_at(position('before'),"<i class='icon-gift'></i> ")
    }

    $("./li[@class='link']/a[@href='/account']"){ 
      //inject_at(position('before'),"<i class='icon-user'></i> ")
    remove()
    }
    $("./li[@class='action']/a[contains(@href,'/logon')]"){ 
      inject_at(position('before'),"<i class='icon-check-sign'></i> ")
    }
    //we're also going to remove empty dividers
    //listed where this menu is at

    $("//*[@id='mw_header']/ul/li[7]"){
      remove()
    }
    $("//*[@id='mw_header']/ul/li[6]"){
    remove()
    }
    $("//*[@id='mw_header']/ul/li[5]"){ 
    remove()  
    }
    $("//*[@id='mw_header']/ul/li[4]"){ 
    remove()  
    }
    $("//*[@id='mw_header']/ul/li[3]"){ 
    remove()  
    }
    $("//*[@id='mw_header']/ul/li[8]"){ 
    remove()  
    }
////I need to figure out how to move elements of 
// a list arround.
    
  }
  $('.//div[@class="middle-nav"]'){
  //The Main logo in black font
  $("./div[@class='main-logo']"){ 
    inner("")

  } 
}


//Here I forcefully added the Header from coast-stores master
//to see If i can manipulate it enough to get it to work with
//alexander wang and get it to generate a 'Menu' buttton.


  ##########
  # <HEADER>
  ##########
  move_here(".//div[@id='header'][1]", "top") {
    log("==================== >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    name("header")
    attributes(id: "mw_header")
    
    # HEADER TOP
    insert("div", class: "mw_header_top") {
      insert("span", class: "sprites-logo logo") {
        wrap("a", href: "/")
      }
    }
    
    # HEADER BOTTOM
    insert("div", class: "mw_header_bottom") {
      attributes(data-ur-set: "toggler")
      

      #############
      # MINI BASKET
      #############
      move_here("//div[@id='mini_basket']"){
        $('./a'){
          inner('Bag')
        }
      }
      ##############
      # STORE FINDER
      ##############
      move_here("//li[@id='topnav_storefinder']"){
        name('div')
      }
      ######
      # MENU
      ######
      insert("div", class: "mw_menu") {
        attributes(data-ur-toggler-component: "button")
        text("Menu")
      }
      insert('div'){
        attributes(
          data-ur-toggler-component: "content",
          class: "navigation_container"
          )
        #####
        # NAV
        #####
        move_here('//ul[@id="mw_navigation"]') {
          insert_top('li', class: 'nav-button-mimic') {
            insert('a', href:'/pws/secure/ManageAccount.ice') {
              insert('span') {
                text('MY ACCOUNT')
              }
              # insert('span',class:'sprites-smallarrow')
            }
          }
        }
      }

      # CLEAR
      insert('div', class: "clr_both")
      
    }
  }  

  # SPACER FOR ABSOLUTE POSITIONED HEADER
  insert('div', class: "header_spacer") {
    move_to('//header', 'after')
  }





  
  #Fix for students page, must go here, double header issue
  $('//*[@id="nusleft"]'){
    $('div[@id="header"]'){
      attributes(id: 's_header')
    }
  }
  #end fix

  ############
  # NAVIGATION
  ############
  $(".//div[@id='container']//div[@class='global-nav']//ul[contains(@class, 'category')]") {
    attributes(
      id: "mw_navigation",
      data-ur-set: "tabs",
      data-ur-closeable: "true",
      class: "navigation"
      )

    #LEVEL 1
    $("./li[last()]") {
      add_class("mw_bottom")
    }

    $("./li") {
      %i = index()
      $("./span") {
        attributes(
          data-ur-tabs-component: "button",
          data-ur-tab-id: "sub_nav_" + %i
          )
      }
      #LEVEL2
      $("./div") {
        #EXTRACT UL OUT OF DIV WRAPPER
        $("./ul"){
          attributes(
            data-ur-tabs-component: "content",
            data-ur-tab-id: "sub_nav_" + %i
            )
          move_to("../..", "bottom")
        }
      }
      #NOW REMOVE WRAPPER
      remove("./div")
    }

    #CLEAN UP NAV
    remove(".//div[contains(@class, 'post_column')]")
    remove(".//div[contains(@class, 'level_3')]")
  }
}


