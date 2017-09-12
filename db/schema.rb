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
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170912010055) do

  create_table "restaurants", force: :cascade do |t|
    t.float    "camis"
    t.string   "name"
    t.string   "boro"
    t.float    "building"
    t.string   "street"
    t.integer  "zipcode"
    t.float    "phone"
    t.string   "cuisine_description"
    t.date     "inspection_date"
    t.string   "action"
    t.string   "violation_code"
    t.text     "violation_description"
    t.string   "critical_flag"
    t.integer  "score"
    t.string   "grade"
    t.date     "grade_date"
    t.date     "record_date"
    t.string   "inspection_type"
    t.datetime "created_at",            null: false
    t.datetime "updated_at",            null: false
  end

end
