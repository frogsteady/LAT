package controllers

import play.api.mvc.{Action, Controller}

class Application extends Controller {
  def index = Action {
//    Ok("Your new application is ready.")
    Ok(views.html.index("hi"))
  }

}
