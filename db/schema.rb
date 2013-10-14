# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20131008153212) do

  create_table "blogs", :force => true do |t|
    t.integer  "user_id"
    t.string   "name"
    t.text     "content"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "category"
    t.string   "photo_file_name"
    t.string   "photo_content_type"
    t.integer  "photo_file_size"
    t.datetime "photo_updated_at"
    t.boolean  "publishedtotimeline", :default => false
    t.boolean  "published",           :default => false
    t.string   "photo2_file_name"
    t.string   "photo2_content_type"
    t.integer  "photo2_file_size"
    t.datetime "photo2_updated_at"
    t.string   "photo3_file_name"
    t.string   "photo3_content_type"
    t.integer  "photo3_file_size"
    t.datetime "photo3_updated_at"
    t.string   "photo4_file_name"
    t.string   "photo4_content_type"
    t.integer  "photo4_file_size"
    t.datetime "photo4_updated_at"
    t.string   "photo5_file_name"
    t.string   "photo5_content_type"
    t.integer  "photo5_file_size"
    t.datetime "photo5_updated_at"
    t.integer  "position"
  end

  create_table "categories", :force => true do |t|
    t.integer  "project_id"
    t.string   "name"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "categories_projects", :id => false, :force => true do |t|
    t.integer "category_id"
    t.integer "project_id"
  end

  add_index "categories_projects", ["category_id", "project_id"], :name => "index_categories_projects_on_category_id_and_project_id"

  create_table "clients", :force => true do |t|
    t.integer  "project_id"
    t.string   "name"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "role"
    t.string   "logo_file_name"
    t.string   "logo_content_type"
    t.integer  "logo_file_size"
    t.datetime "logo_updated_at"
  end

  create_table "clients_projects", :id => false, :force => true do |t|
    t.integer "client_id"
    t.integer "project_id"
  end

  add_index "clients_projects", ["client_id", "project_id"], :name => "index_clients_projects_on_client_id_and_project_id"

  create_table "days", :force => true do |t|
    t.string   "name"
    t.string   "date"
    t.text     "description"
    t.text     "notes"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "dailysnapshot_file_name"
    t.string   "dailysnapshot_content_type"
    t.integer  "dailysnapshot_file_size"
    t.datetime "dailysnapshot_updated_at"
  end

  create_table "days_months", :id => false, :force => true do |t|
    t.integer "day_id"
    t.integer "month_id"
  end

  add_index "days_months", ["day_id", "month_id"], :name => "index_days_months_on_day_id_and_month_id"

  create_table "days_stats", :id => false, :force => true do |t|
    t.integer "day_id"
    t.integer "stat_id"
  end

  add_index "days_stats", ["day_id", "stat_id"], :name => "index_days_stats_on_day_id_and_stat_id"

  create_table "days_weeks", :id => false, :force => true do |t|
    t.integer "day_id"
    t.integer "week_id"
  end

  add_index "days_weeks", ["day_id", "week_id"], :name => "index_days_weeks_on_day_id_and_week_id"

  create_table "days_years", :id => false, :force => true do |t|
    t.integer "day_id"
    t.integer "year_id"
  end

  add_index "days_years", ["day_id", "year_id"], :name => "index_days_years_on_day_id_and_year_id"

  create_table "graphs", :force => true do |t|
    t.string   "name"
    t.string   "type"
    t.boolean  "shown",      :default => false
    t.integer  "project_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "graphtype"
  end

  create_table "messages", :force => true do |t|
    t.string   "author"
    t.text     "content"
    t.string   "title"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "months", :force => true do |t|
    t.integer  "project_id"
    t.integer  "timeline_id"
    t.string   "name"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "abbr"
  end

  create_table "months_projects", :id => false, :force => true do |t|
    t.integer "month_id"
    t.integer "project_id"
  end

  add_index "months_projects", ["month_id", "project_id"], :name => "index_months_projects_on_month_id_and_project_id"

  create_table "months_timelines", :id => false, :force => true do |t|
    t.integer "month_id"
    t.integer "timeline_id"
  end

  add_index "months_timelines", ["month_id", "timeline_id"], :name => "index_months_timelines_on_month_id_and_timeline_id"

  create_table "months_years", :id => false, :force => true do |t|
    t.integer "month_id"
    t.integer "year_id"
  end

  add_index "months_years", ["month_id", "year_id"], :name => "index_months_years_on_month_id_and_year_id"

  create_table "operations", :force => true do |t|
    t.text     "description"
    t.string   "beggining"
    t.string   "ending"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "snapshot_file_name"
    t.string   "snapshot_content_type"
    t.integer  "snapshot_file_size"
    t.datetime "snapshot_updated_at"
    t.string   "snapshot2_file_name"
    t.string   "snapshot2_content_type"
    t.integer  "snapshot2_file_size"
    t.datetime "snapshot2_updated_at"
  end

  create_table "operations_projects", :id => false, :force => true do |t|
    t.integer "operation_id"
    t.integer "project_id"
  end

  add_index "operations_projects", ["operation_id", "project_id"], :name => "index_operations_projects_on_operation_id_and_project_id"

  create_table "pages", :force => true do |t|
    t.string   "url"
    t.integer  "unique_pageviews"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "photos", :force => true do |t|
    t.string   "caption"
    t.integer  "project_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.integer  "number"
  end

  create_table "projects", :force => true do |t|
    t.integer  "category_id"
    t.integer  "type_id"
    t.integer  "month_id"
    t.integer  "timeline_id"
    t.string   "name"
    t.text     "description"
    t.text     "duration"
    t.string   "startdate"
    t.string   "enddate"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "fullbleed_file_name"
    t.string   "fullbleed_content_type"
    t.integer  "fullbleed_file_size"
    t.datetime "fullbleed_updated_at"
    t.string   "medium"
    t.text     "blurb"
    t.boolean  "published",                    :default => false
    t.boolean  "pubtotimeline",                :default => false
    t.string   "companylogo_file_name"
    t.string   "companylogo_content_type"
    t.integer  "companylogo_file_size"
    t.datetime "companylogo_updated_at"
    t.string   "secondaryphoto_file_name"
    t.string   "secondaryphoto_content_type"
    t.integer  "secondaryphoto_file_size"
    t.datetime "secondaryphoto_updated_at"
    t.string   "tertiaryphoto_file_name"
    t.string   "tertiaryphoto_content_type"
    t.integer  "tertiaryphoto_file_size"
    t.datetime "tertiaryphoto_updated_at"
    t.string   "quaternaryphoto_file_name"
    t.string   "quaternaryphoto_content_type"
    t.integer  "quaternaryphoto_file_size"
    t.datetime "quaternaryphoto_updated_at"
    t.string   "quinaryphoto_file_name"
    t.string   "quinaryphoto_content_type"
    t.integer  "quinaryphoto_file_size"
    t.datetime "quinaryphoto_updated_at"
    t.string   "actualclient"
    t.boolean  "archived",                     :default => false
    t.string   "linephoto_file_name"
    t.string   "linephoto_content_type"
    t.integer  "linephoto_file_size"
    t.datetime "linephoto_updated_at"
    t.string   "workthumb_file_name"
    t.string   "workthumb_content_type"
    t.integer  "workthumb_file_size"
    t.datetime "workthumb_updated_at"
    t.string   "position"
  end

  create_table "projects_staffs", :id => false, :force => true do |t|
    t.integer "project_id"
    t.integer "staff_id"
  end

  add_index "projects_staffs", ["project_id", "staff_id"], :name => "index_projects_staffs_on_project_id_and_staff_id"

  create_table "projects_statistics", :id => false, :force => true do |t|
    t.integer "project_id"
    t.integer "statistic_id"
  end

  add_index "projects_statistics", ["project_id", "statistic_id"], :name => "index_projects_statistics_on_project_id_and_statistic_id"

  create_table "projects_timelines", :id => false, :force => true do |t|
    t.integer "project_id"
    t.integer "timeline_id"
  end

  add_index "projects_timelines", ["project_id", "timeline_id"], :name => "index_projects_timelines_on_project_id_and_timeline_id"

  create_table "projects_types", :id => false, :force => true do |t|
    t.integer "project_id"
    t.integer "type_id"
  end

  add_index "projects_types", ["project_id", "type_id"], :name => "index_projects_types_on_project_id_and_type_id"

  create_table "projects_weeks", :id => false, :force => true do |t|
    t.integer "project_id"
    t.integer "week_id"
  end

  add_index "projects_weeks", ["project_id", "week_id"], :name => "index_projects_weeks_on_project_id_and_week_id"

  create_table "projects_years", :id => false, :force => true do |t|
    t.integer "project_id"
    t.integer "year_id"
  end

  add_index "projects_years", ["project_id", "year_id"], :name => "index_projects_years_on_project_id_and_year_id"

  create_table "staffs", :force => true do |t|
    t.integer  "project_id"
    t.string   "name"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
    t.string   "position"
    t.text     "bio"
    t.string   "staffphoto_file_name"
    t.string   "staffphoto_content_type"
    t.integer  "staffphoto_file_size"
    t.datetime "staffphoto_updated_at"
    t.string   "stafflogo_file_name"
    t.string   "stafflogo_content_type"
    t.integer  "stafflogo_file_size"
    t.datetime "stafflogo_updated_at"
  end

  create_table "staffs_users", :id => false, :force => true do |t|
    t.integer "staff_id"
    t.integer "user_id"
  end

  add_index "staffs_users", ["staff_id", "user_id"], :name => "index_staffs_users_on_staff_id_and_user_id"

  create_table "statistics", :force => true do |t|
    t.string   "name"
    t.integer  "value"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "date"
    t.string   "category"
    t.string   "color"
    t.integer  "graph_id"
    t.boolean  "pub",        :default => true
  end

  create_table "stats", :force => true do |t|
    t.string   "name"
    t.text     "description"
    t.text     "notes"
    t.string   "type"
    t.integer  "numericalname"
    t.integer  "numericalvalue"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "studios", :force => true do |t|
    t.text     "content"
    t.string   "name"
    t.string   "title"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "studiobg_file_name"
    t.string   "studiobg_content_type"
    t.integer  "studiobg_file_size"
    t.datetime "studiobg_updated_at"
  end

  create_table "substats", :force => true do |t|
    t.integer  "statistic_id"
    t.integer  "value"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "timelines", :force => true do |t|
    t.integer  "project_id"
    t.integer  "month_id"
    t.string   "name"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "timelines_years", :id => false, :force => true do |t|
    t.integer "timeline_id"
    t.integer "year_id"
  end

  add_index "timelines_years", ["timeline_id", "year_id"], :name => "index_timelines_years_on_timeline_id_and_year_id"

  create_table "types", :force => true do |t|
    t.integer  "project_id"
    t.string   "name"
    t.text     "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", :force => true do |t|
    t.string   "email",                                 :default => "",    :null => false
    t.string   "encrypted_password",     :limit => 128, :default => ""
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                         :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "admin",                                 :default => false
    t.integer  "staff_id"
    t.string   "invitation_token",       :limit => 60
    t.datetime "invitation_sent_at"
    t.datetime "invitation_accepted_at"
    t.integer  "invitation_limit"
    t.integer  "invited_by_id"
    t.string   "invited_by_type"
  end

  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["invitation_token"], :name => "index_users_on_invitation_token"
  add_index "users", ["invited_by_id"], :name => "index_users_on_invited_by_id"
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

  create_table "weeks", :force => true do |t|
    t.integer  "ynum"
    t.integer  "mnum"
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "description"
    t.string   "snapshot_file_name"
    t.string   "snapshot_content_type"
    t.integer  "snapshot_file_size"
    t.datetime "snapshot_updated_at"
    t.string   "snapshot2_file_name"
    t.string   "snapshot2_content_type"
    t.integer  "snapshot2_file_size"
    t.datetime "snapshot2_updated_at"
  end

  create_table "weeks_years", :id => false, :force => true do |t|
    t.integer "week_id"
    t.integer "year_id"
  end

  add_index "weeks_years", ["week_id", "year_id"], :name => "index_weeks_years_on_week_id_and_year_id"

  create_table "years", :force => true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
