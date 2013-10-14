class AdminsController < ApplicationController
  
  def index
    @user = current_user
  end
  def blogs
    if can? :manage, User
      @user = current_user
      @blogs = Blog.all
    else
      flash[:notice] = "You are not authorized to perform that action"
      redirect_to root_path
    end
  end
  def users
    if can? :manage, User
      @user = current_user
      @users = User.all
    else
      flash[:notice] = "You are not authorized to perform that action"
      redirect_to root_path
    end
  end
  def projects
    if can? :manage, User
      @user = current_user
      @clients = Client.find(:all, :include => :projects, :conditions => ["projects.archived = ?", false], :order => ["clients.name asc"])
      @projects = Project.find(:all, :include => :clients, :order => "clients.name asc", :conditions => ["archived = ?", false])
    else
      flash[:notice] = "You are not authorized to perform that action"
      redirect_to root_path
    end
  end
  def staffs
    if can? :manage, User
      @user = current_user
      @users = User.all
      @staffs = Staff.all
    else
      flash[:notice] = "You are not authorized to perform that action"
      redirect_to root_path
    end
  end
  def clients
    if can? :manage, User
      @user = current_user
      @clients = Client.find(:all, :order => "name asc")
    else
      flash[:notice] = "You are not authorized to perform that action"
      redirect_to root_path
    end
  end
  def statistics
    if can? :manage, User
      @clients = Client.find(:all, :include => :projects, :order => ["clients.name asc"])
      @user = current_user
      @stats = Statistic.all
      @projects = Project.find(:all, :order => "actualclient asc, name asc", :conditions => ["archived = ?", false])
    else
      flash[:notice] = "You are not authorized to perform that action"
      redirect_to root_path
    end
  end
  def archives
    if can? :manage, User
      @user = current_user
      @projects = Project.where("archived = ?", true)
    else
      flash[:notice] = "You are not authorized to perform that action"
      redirect_to root_path
    end
  end
  def graphs
     if can? :manage, User
      @user = current_user
      @clients = Client.find(:all, :include => :projects, :order => ["clients.name asc"])
      @projects = Project.find(:all, :order => "actualclient asc, name asc", :conditions => ["archived = ?", false])
    else
      flash[:notice] = "You are not authorized to perform that action"
      redirect_to root_path
    end
  end
end
