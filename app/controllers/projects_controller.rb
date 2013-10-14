class ProjectsController < ApplicationController
  load_and_authorize_resource :except => [:show, :prcs, :work, :chronicle, :journal, :studio, :lab, :stats, :people, :mission, :ethic, :competencies, :contact, :staffpick, :graphselect]
  def new
    @project = Project.new
    @clients = Client.find(:all, :order => "name asc")
  end
  def create
    s = params[:project][:startdate]
    sy = s.gsub(/\d+(\/)/, "").to_i
    sd = s.gsub(/.....$/, "").gsub(/.../, "").to_i
    sm = s.gsub(/........$/, "").to_i
    e = params[:project][:enddate]
    ey = e.gsub(/\d+(\/)/, "").to_i
    ed = e.gsub(/.....$/, "").gsub(/.../, "").to_i
    em = e.gsub(/........$/, "").to_i
    st = Date.new(sy,sm,sd).to_time.to_i
    et = Date.new(ey,em,ed).to_time.to_i
    inception = Date.new(2010,1,1).to_time.to_i
    duration = ((((st-inception)/60)/60)/24).to_s + "-" + ((((et-st)/60)/60)/24).to_s
    
    #@project.update_attribute('duration', duration)
    
    @project = Project.create! do |p|
      p.name = params[:project][:name]
      p.enddate = params[:project][:enddate]
      p.startdate = params[:project][:startdate]
      p.description = params[:project][:description]
      p.fullbleed = params[:project][:fullbleed]
      p.secondaryphoto = params[:project][:secondaryphoto]
      p.tertiaryphoto = params[:project][:tertiaryphoto]
      p.quaternaryphoto = params[:project][:quaternaryphoto]
      p.quinaryphoto = params[:project][:quinaryphoto]
      p.actualclient = params[:client].blank? ? params[:newclient].blank? ? "none" : params[:newclient] : params[:client]
      p.blurb = params[:blurb]
      p.medium = params[:medium]
      p.duration = duration
    end
    nweeks = (((((et-st)/60)/60)/24)/7.to_f).ceil
    nweeks.times do |i|
      @project.weeks << Week.find_or_create_by_name(@project.name + " - week" + i.to_s)
    end
    if params[:client].empty?
      @project.clients << Client.find_or_create_by_name(params[:newclient]) unless params[:newclient].empty?
    else
      @project.clients << Client.find_or_create_by_name(params[:client]) unless params[:client].empty?
    end
    #staffs = params[:staff].split(",").collect(&:strip) unless params[:staff].nil?
    #unless staffs.nil?
    #  staffs.each do |s|
    #    @project.staffs << Staff.find_or_create_by_name(s) unless s.empty?
    #  end
    #end

    @project.categories << Category.find_or_create_by_name(params[:category]) unless params[:category].empty?
    startmonth = params[:project][:startdate].gsub(/\/.*/, "")
    startyear = params[:project][:startdate].gsub(/.*\//, "")
    endmonth = params[:project][:enddate].gsub(/\/.*/, "")
    endyear = params[:project][:enddate].gsub(/.*\//, "")
    
    unless startyear.empty?
      @project.years << Year.find_or_create_by_name(startyear) unless startyear.empty?
      if Year.find_by_name(startyear).months.count != 12
        months = %w{01 02 03 04 05 06 07 08 09 10 11 12}
        months.each do |m|
          d = Date.new(startyear.to_i, m.to_i, 1)
          abr = I18n.t("date.abbr_month_names")[d.month]
          y = Year.find_by_name(startyear)
          y.months << Month.find_or_create_by_name_and_abbr(startyear + m, abr)
          s = Date.new(startyear.to_i - 1, 12, 31)
          e = Date.new(startyear.to_i, 12, 31)
          days = e.mjd - s.mjd
          if y.days.count < days
            0.upto (days - 1) do |i|
              startdate = Date.new(startyear.to_i, 01, 01)
              y.days << Day.find_or_create_by_date(startdate + i)
            end
          end
          mo = Month.find_by_name(startyear + m)
          mdays = (Date.new(startyear.to_i,12,31).to_date<<(12-m.to_i)).day
          if mo.days.count < mdays
            0.upto (mdays - 1) do |i|
              startdate = Date.new(startyear.to_i, m.to_i, 01)
              mo.days << Day.find_or_create_by_date(startdate + i)
            end
          end
        end
      end
      @project.months << Year.find_by_name(startyear).months.find_by_name(startyear + startmonth) unless startyear.empty? || startmonth.empty?      
    end
    unless endyear.empty?
      @project.years << Year.find_or_create_by_name(endyear) unless endyear.empty?
      if Year.find_by_name(endyear).months.count != 12
        months = %w{01 02 03 04 05 06 07 08 09 10 11 12}
        months.each do |m|
          d = Date.new(endyear.to_i, m.to_i, 1)
          abr = I18n.t("date.abbr_month_names")[d.month]
          y = Year.find_by_name(endyear)
          y.months << Month.find_or_create_by_name_and_abbr(endyear + m, abr)
          s = Date.new(endyear.to_i - 1, 12, 31)
          e = Date.new(endyear.to_i, 12, 31)
          days = e.mjd - s.mjd
          if y.days.count < days
            0.upto (days - 1) do |i|
              startdate = Date.new(endyear.to_i, 01, 01)
              y.days << Day.find_or_create_by_date(startdate + i)
            end
          end
          mo = Month.find_by_name(endyear + m)
          mdays = (Date.new(endyear.to_i,12,31).to_date<<(12-m.to_i)).day
          if mo.days.count < mdays
            0.upto (mdays - 1) do |i|
              startdate = Date.new(endyear.to_i,m.to_,01)
              mo.days << Day.find_or_create_by_date(startdate + i)
            end
          end
        end
      end
      @project.months << Year.find_by_name(endyear).months.find_by_name(endyear + endmonth) unless endyear.empty? || endmonth.empty?
    end
    
    if @project.save
      if params[:project][:workthumb].blank?
        redirect_to project_list_path
      else
        render :action => 'crop'
      end
    else
      render :action => "new"
    end
  end
  
  def edit
    @project = Project.find(params[:id])
    @stat = Statistic.new
    @day = Day.find_or_create_by_date(Date.today.to_s)
    @clients = Client.find(:all, :order => "name asc")
  end
  def update
    @project = Project.find(params[:id])
    @project.update_attributes(params[:project])
    @project.update_attribute("actualclient", params[:client].blank? ? params[:newclient].blank? ? "none" : params[:newclient] : params[:client])
    if params[:project][:statistics_attributes].blank? && params[:project][:operations_attributes].blank? && params[:project][:photos_attributes].blank?
      if params[:project][:crop_w].blank?
        if params[:client].empty?
          @project.clients.clear unless params[:newclient].empty?
          @project.clients << Client.find_or_create_by_name(params[:newclient]) unless params[:newclient].empty?
        else
          @project.clients.clear unless params[:client].empty?
          @project.clients << Client.find_or_create_by_name(params[:client]) unless params[:client].empty?
        end
        
        #staffs = params[:staff].split(",").collect(&:strip) unless params[:staff].nil?
        #unless staffs.nil?
        #  @project.staffs.clear
        #  staffs.each do |s|
        #    @project.staffs << Staff.find_or_create_by_name(s) unless s.empty?
        #  end
        #end
        
        
        @project.categories.clear unless params[:category].empty?
        @project.categories << Category.find_or_create_by_name(params[:category]) unless params[:category].empty?
        startmonth = params[:project][:startdate].gsub(/\/.*/, "")
        startyear = params[:project][:startdate].gsub(/.*\//, "")
        endmonth = params[:project][:enddate].gsub(/\/.*/, "")
        endyear = params[:project][:enddate].gsub(/.*\//, "")
    
        unless startyear.empty? || endyear.empty?
          @project.years.clear
          @project.years << Year.find_or_create_by_name(startyear)
          @project.years << Year.find_or_create_by_name(endyear)
      
          if Year.find_by_name(startyear).months.count != 12
            months = %w{01 02 03 04 05 06 07 08 09 10 11 12}
            months.each do |m|
              d = Date.new(startyear.to_i, m.to_i, 1)
              abr = I18n.t("date.abbr_month_names")[d.month]
              Year.find_by_name(startyear).months << Month.find_or_create_by_name_and_abbr(startyear + m, abr)
            end
          end
          if Year.find_by_name(endyear).months.count != 12
            months = %w{01 02 03 04 05 06 07 08 09 10 11 12}
            months.each do |m|
              d = Date.new(endyear.to_i, m.to_i, 1)
              abr = I18n.t("date.abbr_month_names")[d.month]
              Year.find_by_name(endyear).months << Month.find_or_create_by_name_and_abbr(endyear + m, abr)
            end
          end
      
          @project.months.clear
          @project.months << Month.find_by_name(startyear + startmonth) unless startyear.empty? || startmonth.empty?      
          @project.months << Month.find_by_name(endyear + endmonth) unless endyear.empty? || endmonth.empty?
        end
        s = params[:project][:startdate]
        e = params[:project][:enddate]
        sy = s.gsub(/\d+(\/)/, "").to_i
        sd = s.gsub(/.....$/, "").gsub(/.../, "").to_i
        sm = s.gsub(/........$/, "").to_i
        ey = e.gsub(/\d+(\/)/, "").to_i
        ed = e.gsub(/.....$/, "").gsub(/.../, "").to_i
        em = e.gsub(/........$/, "").to_i
        st = Date.new(sy,sm,sd).to_time.to_i
        et = Date.new(ey,em,ed).to_time.to_i
        inception = Date.new(2010,1,1).to_time.to_i
        duration = ((((st-inception)/60)/60)/24).to_s + "-" + ((((et-st)/60)/60)/24).to_s
        nweeks = (((((et-st)/60)/60)/24)/7.to_f).ceil
        @project.weeks.clear
        nweeks.times do |i|
          @project.weeks << Week.find_or_create_by_name(@project.name + " - week" + i.to_s)
        end
        @project.update_attribute('duration', duration)
        if @project.save
          if params[:project][:workthumb].blank?
            sleep 0.5
            redirect_to project_list_path
          else
            render :action => 'crop'
          end
        else
          render :action => "edit"
        end
      else
        if @project.save
          if params[:project][:workthumb].blank?
            sleep 0.5
            redirect_to project_list_path
          else
            render :action => 'crop'
          end
        else
          render :action => "edit"
        end
      end
    else
      if @project.save
        sleep 0.5
        redirect_to edit_project_path(@project)
      end
    end
  end
  
  def destroy
    @project = Project.find(params[:id]).destroy
  end
  
  def show
    @project = Project.find(params[:id])
    @pphotos = @project.photos.find(:all, :order => "number asc")
    @projects = Project.find(:all, :include => :clients, :order => "clients.name asc", :conditions => ["published = ?", true])
    index = @projects.index(@project)
    unless index.nil?
      if index == @projects.count - 1
        @next = @projects[0]
      else
        @next = @projects[index+1]
      end
      @previous = @projects[index-1]
    end
    unless @project.photos.empty?
      @bgimg = @project.photos.first.image.to_file.blank? ? "/images/missing.png" : @project.photos.first.image.url
      @bgheight = Paperclip::Geometry.from_file(@project.photos.first.image.to_file).height.to_i unless @project.photos.first.image.to_file.blank?
      @bgwidth = Paperclip::Geometry.from_file(@project.photos.first.image.to_file).width.to_i unless @project.photos.first.image.to_file.blank?
    end
  end
  
  def prcs
    @project = Project.find(params[:id])
    @projects = Project.find(:all, :include => :clients, :order => "clients.name asc", :conditions => ["published = ?", true])
    index = @projects.index(@project)
    unless index.nil?
      if index == @projects.count - 1
        @next = @projects[0]
      else
        @next = @projects[index+1]
      end
      @previous = @projects[index-1]
    end
    unless @project.photos.empty?
      @bgimg = @project.photos.first.image.to_file.blank? ? "/images/missing.png" : @project.photos.first.image.url
      @bgheight = Paperclip::Geometry.from_file(@project.photos.first.image.to_file).height.to_i unless @project.photos.first.image.to_file.blank?
      @bgwidth = Paperclip::Geometry.from_file(@project.photos.first.image.to_file).width.to_i unless @project.photos.first.image.to_file.blank?
    end
  end
  
  def work
    @projects = Project.where("published = ?", true).sort_by{|p| DateTime.parse(p.enddate)}.reverse
    a = Client.find(:all, :include => :projects, :conditions => ["projects.published = ?", true], :order => ["clients.name asc"])
    n = 3
    @clients1 = (n - 3).step(a.size - 1, n).map { |i| a[i] }
    @clients2 = (n - 2).step(a.size - 1, n).map { |i| a[i] }
    @clients3 = (n - 1).step(a.size - 1, n).map { |i| a[i] }
  end
  
  def chronicle
    @projects = Project.where("published = ?", true)
    #@years = Year.find(:all, :order => "name asc")
    @years = Year.find(:all, :include => :projects, :order => "years.name asc", :conditions => ["projects.pubtotimeline = ?", true])
  end
  
  def journal
    @blogs = Blog.where("published = ?", true)
  end
  
  def stats
    @project = Project.find(params[:id])
    @projects = Project.find(:all, :include => :clients, :order => "clients.name asc", :conditions => ["published = ?", true])
    index = @projects.index(@project)
    unless index.nil?
      if index == @projects.count - 1
        @next = @projects[0]
      else
        @next = @projects[index+1]
      end
      @previous = @projects[index-1]
    end
    unless @project.photos.empty?
      @bgimg = @project.photos.first.image.to_file.blank? ? "/images/missing.png" : @project.photos.first.image.url
      @bgheight = Paperclip::Geometry.from_file(@project.photos.first.image.to_file).height.to_i unless @project.photos.first.image.to_file.blank?
      @bgwidth = Paperclip::Geometry.from_file(@project.photos.first.image.to_file).width.to_i unless @project.photos.first.image.to_file.blank?
    end
  end
  
  def studio
    @staff = Staff.where("name not like ?", "%&%")
    @bgimg = Studio.find(1).studiobg.to_file.blank? ? "/images/missing.png" : Studio.find(1).studiobg.url
    @bgheight = Paperclip::Geometry.from_file(Studio.find(1).studiobg.to_file).height.to_i unless Studio.find(1).studiobg.to_file.blank?
    @bgwidth = Paperclip::Geometry.from_file(Studio.find(1).studiobg.to_file).width.to_i unless Studio.find(1).studiobg.to_file.blank?
  end
  
  def lab
  end
  
  def publish
    @project = Project.find(params[:id])
    @project.update_attribute("published", true)
    @project.update_attribute("archived", false)
  end
  def pubtotimeline
    @project = Project.find(params[:id])
    @project.update_attribute("pubtotimeline", true)
  end
  def archive
    @project = Project.find(params[:id])
    @project.update_attribute("published", false)
    @project.update_attribute("pubtotimeline", false)
    @project.update_attribute("archived", true)
  end
  def unpub
    @project = Project.find(params[:id])
    @project.update_attribute("published", false)
  end
  def unpubtimeline
    @project = Project.find(params[:id])
    @project.update_attribute("pubtotimeline", false)
  end
  def people
    @staff = Staff.where("name not like ?", "%&%")
    @bgimg = @staff.first.staffphoto.url
    @bgheight = Paperclip::Geometry.from_file(@staff.first.staffphoto.to_file).height.to_i unless @staff.first.staffphoto.to_file.blank?
    @bgwidth = Paperclip::Geometry.from_file(@staff.first.staffphoto.to_file).width.to_i unless @staff.first.staffphoto.to_file.blank?
  end
  def competencies
    @staff = Staff.where("name not like ?", "%&%")
    @bgimg = Studio.find(2).studiobg.to_file.blank? ? "/images/missing.png" : Studio.find(2).studiobg.url
    @bgheight = Paperclip::Geometry.from_file(Studio.find(2).studiobg.to_file).height.to_i unless Studio.find(2).studiobg.to_file.blank?
    @bgwidth = Paperclip::Geometry.from_file(Studio.find(2).studiobg.to_file).width.to_i unless Studio.find(2).studiobg.to_file.blank?
  end
  def ethic
    @staff = Staff.where("name not like ?", "%&%")
    @bgimg = Studio.find(3).studiobg.to_file.blank? ? "/images/missing.png" : Studio.find(3).studiobg.url
    @bgheight = Paperclip::Geometry.from_file(Studio.find(3).studiobg.to_file).height.to_i unless Studio.find(3).studiobg.to_file.blank?
    @bgwidth = Paperclip::Geometry.from_file(Studio.find(3).studiobg.to_file).width.to_i unless Studio.find(3).studiobg.to_file.blank?
  end
  def mission
    @staff = Staff.where("name not like ?", "%&%")
    @bgimg = Studio.find(4).studiobg.to_file.blank? ? "/images/missing.png" : Studio.find(4).studiobg.url
    @bgheight = Paperclip::Geometry.from_file(Studio.find(4).studiobg.to_file).height.to_i unless Studio.find(4).studiobg.to_file.blank?
    @bgwidth = Paperclip::Geometry.from_file(Studio.find(4).studiobg.to_file).width.to_i unless Studio.find(4).studiobg.to_file.blank?
  end
  def contact
    @bgimg = Studio.find(1).studiobg.to_file.blank? ? "/images/missing.png" : Studio.find(1).studiobg.url
    @bgheight = Paperclip::Geometry.from_file(Studio.find(1).studiobg.to_file).height.to_i unless Studio.find(1).studiobg.to_file.blank?
    @bgwidth = Paperclip::Geometry.from_file(Studio.find(1).studiobg.to_file).width.to_i unless Studio.find(1).studiobg.to_file.blank?
  end
  def staffpick
    @staff = Staff.find(params[:staff])
    @bgimg = @staff.staffphoto.url
    @bgheight = Paperclip::Geometry.from_file(@staff.staffphoto.to_file).height.to_i unless @staff.staffphoto.to_file.blank?
    @bgwidth = Paperclip::Geometry.from_file(@staff.staffphoto.to_file).width.to_i unless @staff.staffphoto.to_file.blank?
  end
  def deletephotos
    project = params[:project]
    staff = params[:staff]
    photo = params[:photo]
    operation = params[:operation]
    studio = params[:studio]
    blog = params[:blog]
    client = params[:client]
    if photo == "companylogo"
      Project.find(project).companylogo.destroy
      Project.find(project).companylogo.clear
    elsif photo == "fullbleed"
      Project.find(project).fullbleed.destroy
      Project.find(project).fullbleed.clear
    elsif photo == "secondaryphoto"
      Project.find(project).secondaryphoto.destroy
      Project.find(project).secondaryphoto.clear
    elsif photo == "tertiaryphoto"
      Project.find(project).tertiaryphoto.destroy
      Project.find(project).tertiaryphoto.clear
    elsif photo == "quaternaryphoto"
      Project.find(project).quaternaryphoto.destroy
      Project.find(project).quaternaryphoto.clear
    elsif photo == "quinaryphoto"
      Project.find(project).quinaryphoto.destroy
      Project.find(project).quinaryphoto.clear
    elsif photo == "workthumb"
      Project.find(project).workthumb.destroy
      Project.find(project).workthumb.clear
    elsif photo == "linephoto"
      Project.find(project).linephoto.destroy
      Project.find(project).linephoto.clear
    elsif photo == "snapshot"
      Operation.find(operation).snapshot.destroy
      Operation.find(operation).snapshot.clear
    elsif photo == "snapshot2"
      Operation.find(operation).snapshot2.destroy
      Operation.find(operation).snapshot2.clear
    elsif photo == "staffphoto"
      Staff.find(staff).staffphoto.destroy
      Staff.find(staff).staffphoto.clear
    elsif photo == "stafflogo"
      Staff.find(staff).stafflogo.destroy
      Staff.find(staff).stafflogo.clear
    elsif photo == "studiobg"
      Studio.find(studio).studiobg.destroy
      Studio.find(studio).studiobg.clear
    elsif photo == "photo"
      Blog.find(blog).photo.destroy
      Blog.find(blog).photo.clear
    elsif photo == "photo2"
      Blog.find(blog).photo2.destroy
      Blog.find(blog).photo2.clear
    elsif photo == "photo3"
      Blog.find(blog).photo3.destroy
      Blog.find(blog).photo3.clear
    elsif photo == "photo4"
      Blog.find(blog).photo4.destroy
      Blog.find(blog).photo4.clear
    elsif photo == "photo5"
      Blog.find(blog).photo5.destroy
      Blog.find(blog).photo5.clear
    elsif photo == "logo"
      Client.find(client).logo.destroy
      Client.find(client).logo.clear
    end
  end
  
  def graphselect
    @graph = params[:graph]
    @projects = Project.where("published = ?", true)
    @years = Year.find(:all, :order => "name asc")
  end
end
