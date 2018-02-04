package models

import java.sql.Date

import play.api.libs.json.Json

case class User(id: Long, login: String, password: String, name: String, email: String, registration: Date)

case class UserJson(id: Option[Long], login: String, password: String, name: String, email: String)

object User {
  implicit val _ = Json.format[User]
}

object UserJson {
  implicit val _ = Json.format[UserJson]
}