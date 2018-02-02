package models

import play.api.libs.json.Json

case class Link(id: Long, user_id: Long, content: String)

case class LinkJson(id: Option[Long], user_id: Long, content: String)

object Link {
  implicit val _ = Json.format[Link]
}

object LinkJson {
  implicit val _ = Json.format[LinkJson]
}