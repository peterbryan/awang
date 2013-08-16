
$("./body") {

//Header Top Menu

  $$("a.logo"){
    inner("")
    insert("img",src: "http://jscssecaw.ctscdn.com/content/images/logo.png")
    move_to("//div[@class='top-nav']","top");
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