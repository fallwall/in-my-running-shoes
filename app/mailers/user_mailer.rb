class UserMailer < ApplicationMailer
  default from: "sherunsfreely@gmail.com"

  def welcome_email(user)
    @user = user
    mail(to: @user.email, subject: "Welcome #{@user.name}")
  end
end
