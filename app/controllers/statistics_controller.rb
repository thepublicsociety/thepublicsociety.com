class StatisticsController < ApplicationController
  load_and_authorize_resource
  def new
    @projects = Project.find(:all, :order => "actualclient asc, name asc")
    @stat = Statistic.new
    @day = Day.find_or_create_by_date(Date.today.to_s)
  end
  def create
    @project = Project.find(params[:project_id])
    @graph = Graph.find_or_create_by_name_and_project_id(params[:statistic][:category], params[:project_id])
    if Statistic.find_all_by_name_and_graph_id(params[:statistic][:name], @graph.id).empty?
      @stat = Statistic.create! do |s|
        s.category = params[:statistic][:category],
        s.name = params[:statistic][:name],
        s.value = params[:statistic][:value],
        s.color = params[:statistic][:color],
        s.date = params[:statistic][:date],
        s.graph_id = @graph.id
      end
      @project.statistics << @stat
    else
      @stat = Statistic.find_by_name_and_graph_id(params[:statistic][:name], @graph.id)
      newval = params[:statistic][:value].to_i + @stat.value
      @stat.update_attribute("value", newval)
      @stat.update_attribute("graph_id", @graph.id)
      @graph.project.statistics << @stat
    end
    
  end
  def destroy
    @stat = Statistic.find(params[:id])
    @stat.destroy
  end
  def edit
    @stat = Statistic.find(params[:id])
  end
  def update
    @stat = Statistic.find(params[:id])
    @graph = Graph.find(@stat.graph.id)
    
    @stat.update_attributes(params[:statistic])
    @stat.update_attribute("graph_id", @graph.id)
    #@graph.update_attribute("project_id", @graph.project.id)
    #@graph.project.statistics << @stat
    
    if @stat.save
      redirect_to statistic_list_path
    else
      render :action => "edit"
    end
  end
  
  def publish
    @stat = Statistic.find(params[:id])
    @stat.update_attribute("pub", true)
  end
  
  def unpublish
    @stat = Statistic.find(params[:id])
    @stat.update_attribute("pub", false)
  end
end
