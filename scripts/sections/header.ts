
$("./body") {

//I Need to find out how to make this on every page

//Header Top Menu

  $$("a.logo"){
    inner("")
    insert("img",src: "http://jscssecaw.ctscdn.com/content/images/logo.png")
    move_to("//div[@class='top-nav']","top");
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

    # #should remove the 'in the press image - the selector has no specific id so if the <li> gets reorderd it will break'
    # remove('//*[@id="dept_features"]/ul/li[6]')

    # #remove the 'A FRESH COATING' img in the feature tab
    # remove('//*[@id="dept_features"]/ul/li[4]')
  }



}
