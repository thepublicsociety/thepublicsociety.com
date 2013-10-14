class WeeksController < ApplicationController
  use_tinymce :edit
  def edit
    @week = Week.find(params[:id])
    start = @week.projects.first.startdate
    y = start.split("/")[2]
    m = start.split("/")[0]
    d = start.split("/")[1]
    startdate = Date.new(y.to_i, m.to_i, d.to_i)
    if @week.days.count < 7
      0.upto 6 do |i|
        @week.days << Day.find_or_create_by_date(startdate + i)
      end
    end
  end
  def update
    @week = Week.find(params[:id])
    @week.update_attributes(params[:week])
    if @week.save
      redirect_to edit_project_path(@week.projects.first)
    else
      render :action => "edit"
    end
  end
end
