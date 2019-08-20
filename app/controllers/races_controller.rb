class RacesController < ApplicationController
  before_action :authorize_request, except: %i[index show newest5 search]
  # before_action :load_activities, only: %i[index show create update destroy]

  def index
    if params[:tag]
      @races = Race.tagged_with(params[:tag])
    elsif params[:search]
      @races = Race.where("name LIKE ?", "%#{params[:search]}")
    else
      @races = Race.all
    end
    render json: @races, status: :ok
  end

  def newest5
    @races = Race.all.order("created_at DESC").limit(5)
    render json: @races, include: :user, status: :ok
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

  def load_activities
    @activities = PublicActivity::Activity.order('created_at DESC').limit(20)
  end

  def race_params
    params.require(:race).permit(:name, :date, :description, :city, :state, :country, :organization, :distance, :website, :user_id, :all_tags)
  end

end