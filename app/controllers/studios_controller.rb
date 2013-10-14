class StudiosController < ApplicationController
  def edit
    @studio = Studio.find(params[:id])
  end
  def update
    @studio = Studio.find(params[:id])
    @studio.update_attributes(params[:studio])
    if @studio.save
      redirect_to "/studio/list"
    else
      render :action => "edit"
    end
  end
end
