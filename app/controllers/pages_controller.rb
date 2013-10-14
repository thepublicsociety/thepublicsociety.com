class PagesController < ApplicationController
  def get_analytics_profile
     Garb::Session.login(mekkagojira@gmail.com,bzbb6600)
     accounts = Garb::Account.all
     #Loop all Accounts for account_id
     accounts.each do |account|
       if account.id == "19470005-1"
         #Loop all Profiles for profile_id
         account.profiles.each do |profile|
          if profile.id == "metatroid.com"
            @profile = profile
            break
          end
        end
       end
     end
   end
   
   def update_all
     @pages = Page.all
     @pages.each do |page|
       get_analytics_profile if !@profile
       report = Garb::Report.new(@profile)
       report.metrics :unique_pageviews
       report.dimensions :page_path
       report.filters :page_path.contains => page.url
       page.unique_pageviews = report.results.first.unique_pageviews
       page.save
     end
   end 
     
   def index
     update_all
     @pages = Page.all
     respond_to do |format|
       format.html # index.html.erb
       format.xml  { render :xml => @pages }
     end
   end
end
