class GraphsController < ApplicationController
  load_and_authorize_resource
  def new
    @graph = Graph.new
    @projects = Project.find(:all, :include => :clients, :order => "clients.name asc")
  end
  
  def create
    @graph = Graph.create(params[:graph])
    if @graph.save
      redirect_to edit_graph_path(@graph)
    else
      render :action => "new"
    end
  end
  
  def edit
    @graph = Graph.find(params[:id])
  end
  
  def update
    @graph = Graph.find(params[:id])
    @graph.update_attributes(params[:graph])
    if params[:graph][:statistics_attributes].blank?
      if @graph.save
        redirect_to "/graph/list"
      else
        render :action => "edit"
      end
    else
      if @graph.graphtype == "area"
        if @graph.save
          redirect_to "/statistic/list"
        else
          render :action => "edit"
        end
      else
        if @graph.save
          redirect_to "/graph/list"
        else
          render :action => "edit"
        end
      end
    end
  end
  
  def destroy
    @graph = Graph.find(params[:id])
    @graph.destroy
  end
  
  def show
  end
  
  def display
    @graph = Graph.find(params[:id])
    @graph.update_attribute("shown", true)
  end
  def hide
    @graph = Graph.find(params[:id])
    @graph.update_attribute("shown", false)
  end
    
end
