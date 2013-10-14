class SubstatsController < ApplicationController
  load_and_authorize_resource
  def new
    @stat = Substat.new
  end
  
  def create
    @stat = Statistic.find(params[:id])
    @substat = @stat.substats.create(params[:substat])
    if @substat.save
      redirect_to "/"
    else
      render :action => "new"
    end
  end
  
  def edit
    @stat = Substat.find(params[:id])
  end
  
  def update
    @stat = Substat.find(params[:id])
    @stat.update_attributes(params[:substat])
    if @stat.save
      redirect_to "/"
    else
      render :action => "edit"
    end
  end
  
  def destroy
    @stat = Substat.find(params[:id])
    @stat.destroy
  end
end
