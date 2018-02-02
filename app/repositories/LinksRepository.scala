package repositories

import javax.inject.Inject

import models.{Link, User}
import play.api.db.slick.DatabaseConfigProvider
import slick.jdbc.JdbcProfile

import scala.concurrent.{ExecutionContext, Future}
import slick.jdbc.PostgresProfile.api._


class LinkTable(tag: Tag) extends Table[Link](tag, "links") {
  def id = column[Long]("id", O.PrimaryKey, O.AutoInc)

  def user_id = column[Long]("user_id")

  def content = column[String]("content")

  def * = (id, user_id, content) <> ((Link.apply _).tupled, Link.unapply)

  def userIdFk = foreignKey("user_id", user_id, TableQuery[UserTable])(_.id)
}

class LinksRepository @Inject()(dbConfigProvider: DatabaseConfigProvider)(implicit ec: ExecutionContext) {

  private val dbConfig = dbConfigProvider.get[JdbcProfile]
  import dbConfig._
  import profile.api._

  private val links = TableQuery[LinkTable]

  def create(user_id: Long, content: String): Future[Link] = db.run {
    (links.map(l => (l.user_id, l.content))
      returning links.map(_.id)
      into ((nameAge, id) => Link(id, nameAge._1, nameAge._2))
      ) += (user_id, content)
  }

  def read(id: Long): Future[Option[Link]] = db.run {
    links.filter(_.id === id).result.headOption
  }

  def readAll(): Future[Seq[Link]] = db.run {
    links.result
  }

  def update(id: Long, content: String): Future[Boolean] = db.run {
    links.filter(_.id === id).map(l => l.content)
      .update(content).map {
      case 0 => false
      case _ => true
    }
  }

  def delete(id: Long): Future[Boolean] = db.run {
    links.filter(_.id === id).delete
  }.map {
    case 0 => false
    case _ => true
  }

}
