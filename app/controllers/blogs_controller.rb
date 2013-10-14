class BlogsController < ApplicationController
  load_and_authorize_resource :except => [:search, :journalfilter, :show]
  use_tinymce :new, :edit
  def new
    @blog = Blog.new
  end
  
  def create
    @user = current_user
    @blog = Blog.create(params[:blog])
    if @blog.save
      redirect_to blog_list_path
    else
      render :action => "new"
    end
  end
  
  def show
    @blog = Blog.find(params[:id])
  end
  
  def edit
    @blog = Blog.find(params[:id])
  end
  
  def update
    @blog = Blog.find(params[:id])
    @blog.update_attributes(params[:blog])
    unless params[:newdate].blank?
      ndate = Date.parse params[:newdate]
      @blog.update_attribute("created_at", ndate)
    end
    if @blog.save
      redirect_to blog_list_path
    else
      render :action => "edit"
    end
  end
  
  def destroy
    @blog = Blog.find(params[:id])
    @blog.destroy
  end
  
  def index
    
  end
  
  def publish
    @blog = Blog.find(params[:id])
    @blog.update_attribute("published", true)
  end
  
  def publishtotimeline
    @blog = Blog.find(params[:id])
    @blog.update_attribute("publishedtotimeline", true)
  end
  
  def unpublish
    @blog = Blog.find(params[:id])
    @blog.update_attribute("published", false)
  end
  
  def unpublishtime
    @blog = Blog.find(params[:id])
    @blog.update_attribute("publishedtotimeline", false)
  end
  
  def search
    term = params[:terms]
    @blogs = Blog.where("published = ?", true).where("category like ? or name like ? or content like ?", "%#{term}%", "%#{term}%", "%#{term}%")
  end
  def journalfilter
    cat = params[:category]
    if cat == "All"
      @blogs = Blog.where("published = ?", true)
    else
      @blogs = Blog.where("category = ?", "#{cat.downcase}")
    end
  end
end
