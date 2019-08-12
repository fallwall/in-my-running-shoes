class AuthenticationController < ApplicationController
    
  def authorize_request
    header = request.headers['Authorization']
    header = header.split(' ').last if header
    begin
      @decoded = decode(header)
      @current_user = User.find(@decoded[:user_id])
    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: e.message }, status: :unauthorized
    rescue JWT::DecodeError => e
      render json: { errors: e.message }, status: :unauthorized
    end
  end

    def login
      @user = User.find_by_username(params[:username])
      if @user.authenticate(params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
        token = encode(user_id: @user.id, username: @user.username)
        render json: { token: token }, status: :ok
      else
        render json: { error: 'unauthorized' }, status: :unauthorized
      end
    end
  
    private
  
    def login_params
      params.permit(:username, :password)
    end


end
