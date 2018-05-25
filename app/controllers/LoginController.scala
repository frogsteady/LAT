package controllers

import javax.inject.{Inject, Singleton}

import play.api.data.Form
import play.api.libs.json.Json
import play.api.mvc._
import repositories.UserRepository
import services.UserService

import scala.concurrent.{ExecutionContext, Future}

@Singleton
class LoginController @Inject() (
  userAction: UserInfoAction,
  sessionGenerator: SessionGenerator,
  cc: ControllerComponents,
  userService: UserService,
  userRepository: UserRepository,
)(implicit ec: ExecutionContext)
    extends AbstractController(cc) {

  def login = userAction.async { implicit request: UserRequest[AnyContent] =>
    val successFunc = { userInfo: UserInfo =>
      userService.checkUserCredentials(userInfo.username, userInfo.password).flatMap{
        case true => sessionGenerator.createSession(userInfo).map {
          case (sessionId, encryptedCookie) =>
            val session = request.session + (SESSION_ID -> sessionId)
            Redirect(routes.Application.index())
              .withSession(session)
              .withCookies(encryptedCookie)
        }
        case false =>  Future.successful {
          Redirect(routes.Application.index()).flashing(FLASH_ERROR -> "Could not login! Please check your credentials.")
        }
      }
    }

    val errorFunc = { badForm: Form[UserInfo] =>
      Future.successful {
        BadRequest(views.html.sec.index(badForm)).flashing(FLASH_ERROR -> "Could not login!")
      }
    }

    form.bindFromRequest().fold(errorFunc, successFunc)
  }

  def signup = userAction.async { implicit request: UserRequest[AnyContent] =>
    val successFunc = { u: UserInfoFull =>
      userRepository.create(u.login, u.password, u.username, u.email).map(createdU => Created(Json.toJson(createdU)))
    }

    val errorFunc = { badForm: Form[UserInfoFull] =>
      Future.successful { InternalServerError("Internal Server Error occurred!") }
    }

    signUpFormForm.bindFromRequest().fold(errorFunc, successFunc)
  }

}
