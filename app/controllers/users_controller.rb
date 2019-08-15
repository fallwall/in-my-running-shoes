class UsersController < ApplicationController
  before_action :set_user, only: %i[show update destroy]
  before_action :authorize_request, except: %i[create index newusers show_public]

  def index
    @users = User.all
    render json: @users
  end

  def newusers
    @users = User.all.order("updated_at DESC")
    render json: @users, except: %i[password_digest created_at updated_at dob email], status: :ok
  end

  def show_public
    @user = User.find(params[:id])
    render json: @user, 
    except: %i[password_digest created_at updated_at dob email], 
    :include => {
      :races => {:only => %i[id name]},
      :notes => {:only => %i[id message race_id]}}, status: :ok
  end

  def show
    render json: @user, status: :ok
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
    if @user.update(user_params)
      render json: @user, status: :updated
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @user.destroy
      head 204
    end
  end

  def verify
    @user = {
      id: @current_user[:id],
      username: @current_user[:username]
    }
    render json: @user
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :name, :email, :dob, :password)
  end

end
