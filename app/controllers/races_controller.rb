class RacesController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    @races = Race.all
    render json: @races, include: {user: {include: :notes}}, status: :ok
  end

  def show
    @race = Race.find(params[:id])
    render json: @race, include: :user, status: :ok
  end

  def create
    @race = Race.new(race_params)
    if @race.save
      render json: @race, status: :created
    else
      render json: {error:@race.errors}, status: :unprocessable_entity
    end
  end

  def update
    @race = Race.find(params[:id])
    if @race.update(race_params)
      render json: @race, status: :updated
    else
      render json: {error:@race.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    @race = Race.find(params[:id])
    if @race.destroy
      head 204
    end
  end

  private
  def race_params
    params.require(:race).permit(:name, :date:date, :description, :city, :state, :country, :organization, :distance, :website, :user_id)
  end
end
