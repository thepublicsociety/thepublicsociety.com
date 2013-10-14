Tps::Application.routes.draw do
  resources :messages

  resources :pages

  devise_for :users, :path_prefix => 'd'
  devise_scope :user do
    get "login", :to => "devise/sessions#new"
    get "logout", :to => "devise/sessions#destroy"
    get "register", :to => "devise/registrations#new"
  end
  resources :projects
  resources :years
  resources :months
  resources :timelines
  resources :categories
  resources :types
  resources :staffs
  resources :clients
  resources :blogs
  resources :weeks
  resources :days
  resources :stats
  resources :statistics
  resources :operations
  resources :studios
  resources :graphs
  resources :substats
  resources :photos
  
  match "/admin" => "admins#index", :as => "user_root"
  match "/blog/list" => "admins#blogs"
  match "/user/list" => "admins#users"
  match "/project/list" => "admins#projects"
  match "/project/archives" => "admins#archives"
  match "/staff/list" => "admins#staffs"
  match "/client/list" => "admins#clients"
  match "/statistic/list" => "admins#statistics"
  match "/graph/list" => "admins#graphs"
  match "/user/delete" => "users#destroy"
  match "/user/:id/edit" => "users#edit_user"
  match "/user/:id/updateuser" => "users#update_user"
  match "/projects/:id/process" => "projects#prcs"
  match "/work" => "projects#work"
  match "/chronicle" => "projects#chronicle"
  match "/journal" => "projects#journal"
  match "/lab" => "projects#lab"
  match "/people" => "projects#people"
  match "/projects/:id/stats" => "projects#stats"
  match "/projects/:id/publish" => "projects#publish"
  match "/projects/:id/archive" => "projects#archive"
  match "/projects/:id/unpub" => "projects#unpub"
  match "/projects/:id/unpubtimeline" => "projects#unpubtimeline"
  match "/projects/:id/pubtotimeline" => "projects#pubtotimeline"
  match "/blogs/:id/publish" => "blogs#publish"
  match "/blogs/:id/publishtotimeline" => "blogs#publishtotimeline"
  match "/blogs/:id/unpublish" => "blogs#unpublish"
  match "/blogs/:id/unpublishtime" => "blogs#unpublishtime"
  match "/internal_error.html" => "internal_error#index"
  match "/search" => "blogs#search"
  match "/journalfilter" => "blogs#journalfilter"
  match "/staffpick" => "projects#staffpick"
  match "/deletephotos" => "projects#deletephotos"
  match "/competencies" => "projects#competencies"
  match "/ethic" => "projects#ethic"
  match "/studio" => "projects#mission"
  match "/studio/list" => "admins#studio"
  match "/graphs/:id/display" => "graphs#display"
  match "/graphs/:id/hide" => "graphs#hide"
  match "/graphselect" => "projects#graphselect"
  match "/stats/:id/publish" => "statistics#publish"
  match "/stats/:id/unpublish" => "statistics#unpublish"
  match "/contact" => "projects#contact"
  root :to => "views#timeline"

end
