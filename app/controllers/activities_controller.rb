class ActivitiesController < ApplicationController
  def index
    @activities = PublicActivity::Activity.order("created_at DESC").limit(20)
    render json: @activities, include: %i[owner recipient], status: :ok
  end

  def stats
    @race_count = PublicActivity::Activity.all.where(key: "race.create").count
    @note_count = PublicActivity::Activity.all.where(key: "note.create").count
    @user_count = User.all.count
    render json: {races: @race_count, notes: @note_count, users: @user_count}, status: :ok
  end
end
