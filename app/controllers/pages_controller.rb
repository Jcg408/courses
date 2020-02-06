class PagesController < ApplicationController
  def index
  end

  def episodes 

    @episodes = Course.first.episodes

    render json: {episode: @episodes}
  end
end
