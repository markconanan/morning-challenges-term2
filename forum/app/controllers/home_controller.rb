class HomeController < ApplicationController
  def index
    @questions = Question.all
  end
  # def show
  #   @questions_asc = Question.order(created_at: desc)
  # end
  def about
  end
  def temp
    redirect_to root_path
  end
end
