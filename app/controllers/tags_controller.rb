class TagsController < ApplicationController
  def index
    @tags = Tag.all
    render json: @tags, except: %i[created_at updated_at]
  end
end