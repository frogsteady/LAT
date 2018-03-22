package controllers

import javax.inject.{Inject, Singleton}

import play.api.mvc.{AbstractController, Action, Controller, ControllerComponents}

@Singleton
class Application @Inject() (
                                 userAction: UserInfoAction,
                                 cc: ControllerComponents
                               ) extends AbstractController(cc) {

  def index = userAction { implicit request: UserRequest[_] =>
    Ok(views.html.index("hi"))
  }

}