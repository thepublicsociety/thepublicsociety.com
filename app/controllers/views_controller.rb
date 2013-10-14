class ViewsController < ApplicationController
  def index
    @user = current_user
    @years = Year.find(:all, :order => "name ASC")
    @months = Month.find(:all, :order => "name ASC")
    @clients = Client.all
    @staff = Staff.all
    @type = Type.all
    @category = Category.all
    @blogs = Blog.all
    @message = Message.last
    @projects = Project.all.sort_by{|p| p.startdate.sub(/\//, "").split("/").reverse.join.to_i}
  end
  def timeline
    @user = current_user
    @years = Year.find(:all, :order => "name ASC")
    @months = Month.find(:all, :order => "name ASC")
    @clients = Client.all
    @staff = Staff.all
    @type = Type.all
    @category = Category.all
    @blogs = Blog.where("publishedtotimeline = ?", true)
    @message = Message.last
    @projects = Project.where("pubtotimeline = ?", true).sort_by{|p| p.startdate.sub(/\//, "").split("/").reverse.join.to_i}
  end
end
