package services

import javax.inject.Inject

import models.User
import repositories.UserRepository
import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future



class UserService @Inject()(userRepository: UserRepository){

  def checkUserCredentials(login: String, password: String): Future[Boolean] = {
    userRepository.read(login).map{
      case Some(user) => user.password==password
      case None => false
    }
  }

}
