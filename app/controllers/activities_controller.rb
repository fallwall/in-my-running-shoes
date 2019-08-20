class ActivitiesController < ApplicationController
  def index
    @activities = PublicActivity::Activity.order("created_at DESC").limit(20)
    render json: @activities, include: :owner
  end
end
