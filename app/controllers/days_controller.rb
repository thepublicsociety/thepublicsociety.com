class DaysController < ApplicationController
  def edit
    @day = Day.find(params[:id])
  end
  
  def update
    @day = Day.find(params[:id])
    @day.update_attributes(params[:day])
    if @day.save
      redirect_to edit_day_path(@day)
    else
      render :action => "edit"
    end
  end
end
