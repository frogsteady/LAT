package controllers


import javax.inject.Inject

import models.UserJson
import play.api.libs.json.Json
import play.api.mvc.{MessagesAbstractController, MessagesControllerComponents}
import repositories.UserRepository

import scala.concurrent.{ExecutionContext, Future}


class UserController @Inject()(repo: UserRepository,
                               cc: MessagesControllerComponents
                              )(implicit ec: ExecutionContext)
  extends MessagesAbstractController(cc) {

  def readUsers = Action.async {
    repo.readAll().map { users =>
      Ok(Json.toJson(users))
    }
  }

  def createUser = Action.async {
    implicit request =>
      request.body.asJson.flatMap(_.asOpt[UserJson]) match {
        case Some(u) => repo.create(u.login, u.password, u.name, u.email).map(createdU => Created(Json.toJson(createdU)))
        case _ => Future.successful(NotFound("Couldn't parse user json"))
      }
  }

  def readUser(id: Long) = Action.async {
    repo.read(id).map {
      case Some(u) => Ok(Json.toJson(u))
      case _ => NotFound(s"User with $id was not found")
    }
  }

  def updateUser(id: Long) = Action.async {
    implicit request =>
      request.body.asJson.flatMap(_.asOpt[UserJson]) match {
        case Some(u) => repo.update(id, u.login, u.name, u.password, u.email).map {
          case true => NoContent
          case _ => NotFound(s"User with $id was not found")
        }
        case _ => Future.successful(NotFound("Couldn't parse user json"))
      }
  }

  def deleteUser(id: Long) = Action.async {
    repo.delete(id) map {
      case true => NoContent
      case _ => NotFound(s"User with $id was not found")
    }
  }


}
