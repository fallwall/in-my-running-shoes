class UsersController < ApplicationController
  before_action :set_user, only: %i[show update destroy]
  before_action :authorize_request, except: :create

  def index
    @users = User.all
    render json: @users, include: {races: {include: :note}}, status: :ok
  end

  def show
    @user = User.find(params[:id])
    render json: @user, include: :races, status: :ok
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def update
  @user = User.find(params[:id])
    if @user.update(user_params)
      render json: @user, status: :updated
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user = User.find(params[:id])
    if @user.destroy
      head 204
    end
  end

  private
  
  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :name, :email, :dob, :password)
  end

end
