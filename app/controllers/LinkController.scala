package controllers

import javax.inject.Inject

import models.LinkJson
import play.api.libs.json.Json
import play.api.mvc.{MessagesAbstractController, MessagesControllerComponents}
import repositories.LinksRepository

import scala.concurrent.{ExecutionContext, Future}


class LinkController @Inject()(repo: LinksRepository,
                               cc: MessagesControllerComponents
                              )(implicit ec: ExecutionContext)
  extends MessagesAbstractController(cc) {

  def readLinks = Action.async {
    repo.readAll().map { links =>
      Ok(Json.toJson(links))
    }
  }

  def create = Action.async {
    implicit request =>
      request.body.asJson.flatMap(_.asOpt[LinkJson]) match {
        case Some(l) => repo.create(l.user_id, l.content).map(c => Created(Json.toJson(c)))
        case _ => Future.successful(NotFound("Couldn't parse link json"))
      }
  }

  def read(id: Long) = Action.async {
    repo.read(id).map {
      case Some(u) => Ok(Json.toJson(u))
      case _ => NotFound(s"Link with $id was not found")
    }
  }

  def update(id: Long) = Action.async {
    implicit request =>
      request.body.asJson.flatMap(_.asOpt[LinkJson]) match {
        case Some(l) => repo.update(id, l.content).map {
          case true => NoContent
          case _ => NotFound(s"Link with $id was not found")
        }
        case _ => Future.successful(NotFound("Couldn't parse link json"))
      }
  }

  def delete(id: Long) = Action.async {
    repo.delete(id) map {
      case true => NoContent
      case _ => NotFound(s"Link with $id was not found")
    }
  }


}
