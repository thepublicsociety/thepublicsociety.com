class UsersController < ApplicationController
  load_and_authorize_resource
  def edit_user
    @user = User.find(params[:id])
  end
  
  def update_user
    if can? :manage, User
      @user = User.find(params[:id])
      unless params[:makeadmin].blank?
        @user.update_attribute("admin", true)
      else
        @user.update_attribute("admin", false)
      end
      @user.staffs << Staff.find_or_create_by_name(params[:staffname]) unless params[:staffname].empty?
      redirect_to user_list_path
    else
      flash[:notice] = "You are not authorized to perform that action"
      redirect_to root_path
    end
  end
  def destroy
    if can? :manage, User
      @user = User.find(params[:id])
      @user.destroy
    else
      flash[:notice] = "You are not authorized to perform that action"
      redirect_to root_path
    end
  end
end