package controllers

import javax.inject.Inject

import ch.qos.logback.core.util.OptionHelper
import org.apache.commons.mail.{DefaultAuthenticator, HtmlEmail}
import play.api.Environment
import play.api.mvc.{AbstractController, MessagesControllerComponents}

import scala.concurrent.{ExecutionContext, Future}
import scala.io.Source
import scala.util.Random

class EmailService @Inject()(cc: MessagesControllerComponents, configuration: play.api.Configuration)(implicit ec: ExecutionContext) extends AbstractController(cc) {

  def sendEmail = Action.async {
    val email = new HtmlEmail()
    email.addTo("anton@idalko.com")
    email.setSubject("subject")
    email.setHtmlMsg(renderVerifyEmailBodyHtml())
    doSendEmail(email)

    Future.successful(Ok("A verify email was sent"))
  }

  def doSendEmail(email: HtmlEmail): String = {
    val properties = configuration.underlying
    email.setStartTLSEnabled(properties.getBoolean("mail.smtp.ssl"))
    email.setFrom(properties.getString("mail.smtp.from"))
    email.setHostName(properties.getString("mail.smtp.host"))
    email.setAuthenticator(new DefaultAuthenticator(properties.getString("mail.smtp.user"), properties.getString("mail.smtp.pass")))
    email.send()
  }

  def renderVerifyEmailBodyHtml(): String = {
    val confirmingFile = Environment.simple().getFile("public/email/confirming.html")
    val confirmingHtml = Source.fromFile(confirmingFile).getLines.mkString
    confirmingHtml
  }

  def randomNumericalString(): String = {
    (100000.0 + new Random().nextDouble() * (1000.0 - 100000.0)).toLong.toString
  }
}

