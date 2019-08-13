class NotesController < ApplicationController
  before_action :authorize_request, except: %i[index show]

  def index
    @race = Race.find(params[:race_id])
    @notes = Note.where(race_id: @race.id)
    render json: @notes, status: :ok
  end

  def show
    @race = Race.find(params[:race_id])
    @note = Note.find(params[:id])
    render json: @note, status: :ok
  end

  def create
    @note = Note.new(note_params)
    if @note.save
      render json: @note, status: :created
    else
      render json: {errors: @note.errors}, stauts: :unprocessable_entity
    end
  end

  def update
    @note = Note.find(params[:id])
    if @note.update(note_params)
      render json: @note, status: :updated
    else
      render json: {errors: @note.errors}, stauts: :unprocessable_entity
    end
  end

  def destroy
    @note = Note.find(params[:id])
    if @note.destroy
      head 204
    end
  end

  private

  def note_params
    params.require(:note).permit(:message, :finish_time, :bib_number, :race_id)
  end
end
