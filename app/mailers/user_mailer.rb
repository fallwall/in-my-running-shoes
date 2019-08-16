class UserMailer < ApplicationMailer
  default from: "sherunsfreely@gmail.com"

  def welcome_email(user)
    @user = user
    mail(to: @user.email, subject: "Welcome #{@user.name}")
  end

  def goodbye_email(user)
    @user = user
    mail(to: @user.email, subject: "Laters, #{@user.name}")
  end
end
