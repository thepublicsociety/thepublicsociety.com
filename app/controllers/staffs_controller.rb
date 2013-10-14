class StaffsController < ApplicationController
  load_and_authorize_resource
  def new
    @staff = Staff.new
  end
  
  def create
    @staff = Staff.create(params[:staff])
    @staff.users << User.find_by_email(params[:useremail]) unless params[:useremail].blank?
    if @staff.save
      redirect_to staff_list_path
    else
      render :action => "new"
    end
  end
  
  def show
    @staff = Staff.find(params[:id])
  end
  
  def edit
    @staff = Staff.find(params[:id])
  end
  
  def update
    @staff = Staff.find(params[:id])
    @staff.update_attributes(params[:staff])
    @staff.users << User.find_by_email(params[:useremail]) unless params[:useremail].blank?
    if @staff.save
      redirect_to staff_list_path
    else
      render :action => "edit"
    end
  end
  
  def destroy
    @staff = Staff.find(params[:id])
    @staff.destroy
  end
  
  def index
    @staffs = Staff.all
  end
end
