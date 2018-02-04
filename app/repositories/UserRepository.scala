package repositories

import java.sql.Timestamp
import java.sql.Date
import java.util.Calendar
import javax.inject.Inject

import models.{Link, User}
import play.api.db.slick.DatabaseConfigProvider
import slick.jdbc.JdbcProfile
import slick.jdbc.PostgresProfile.api._

import scala.concurrent.{ExecutionContext, Future}

import scala.concurrent.{ExecutionContext, Future}

class UserTable(tag: Tag) extends Table[User](tag, "users") {
  def id = column[Long]("id", O.PrimaryKey, O.AutoInc)

  def login = column[String]("login")

  def name = column[String]("name")

  def password = column[String]("password")

  def email = column[String]("email")

  def registration = column[Date]("registration")

  def * = (id, login, name, password, email, registration) <> ((User.apply _).tupled, User.unapply)
}

class UserRepository @Inject()(dbConfigProvider: DatabaseConfigProvider)(implicit ec: ExecutionContext) {

  private val dbConfig = dbConfigProvider.get[JdbcProfile]
  import dbConfig._
  import profile.api._

  private val users = TableQuery[UserTable]

  def create(login: String, password: String, name: String, email: String): Future[User] = db.run {
    (users.map(p => (p.login, p.password, p.name, p.email, p.registration))
      returning users.map(_.id)
      into ((t, id) => User(id, t._1, t._2, t._3, t._4, t._5))
      += (login, password, name, email, new Date(Calendar.getInstance().getTimeInMillis)))
  }

  def read(id: Long): Future[Option[User]] = db.run {
    users.filter(_.id === id).result.headOption
  }

  def readAll(): Future[Seq[User]] = db.run {
    users.result
  }

  def update(id: Long, login: String, name: String, password: String, email: String): Future[Boolean] = db.run {
    users.filter(_.id === id).map(u => (u.login, u.name, u.password, u.email))
      .update(login, name, password, email).map {
      case 0 => false
      case _ => true
    }
  }

  def delete(id: Long): Future[Boolean] = db.run {
    users.filter(_.id === id).delete
  }.map {
    case 0 => false
    case _ => true
  }

}
