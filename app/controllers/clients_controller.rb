class ClientsController < ApplicationController
  load_and_authorize_resource
  def new
    @client = Client.new
  end
  def create
    if Client.find_by_name(params[:client][:name]).blank?
      @client = Client.create(params[:client])
      projects = params[:projects].split(",").collect(&:strip) unless params[:projects].blank?
      unless projects.blank?
        projects.each do |p|
          @client.projects << Project.find_by_name(p) unless p.empty?
        end
      end
      if @client.save
        redirect_to client_list_path
      else
        render :action => "new"
      end
    else
      redirect_to client_list_path
    end
  end
  def show
    @client = Client.find(params[:id])
  end
  def edit
    @client = Client.find(params[:id])
  end
  def update
    @client = Client.find(params[:id])
    @client.update_attributes(params[:client])
    projects = params[:projects].split(",").collect(&:strip) unless params[:projects].blank?
    unless projects.blank?
      @client.projects.clear
      projects.each do |p|
        @client.projects << Project.find_by_name(p) unless p.empty?
      end
    end
    if @client.save
      redirect_to client_list_path
    else
      render :action => "new"
    end
  end
  def destroy
    @client = Client.find(params[:id])
    @client.destroy
  end
  def index
    @clients = Client.all
  end
end
