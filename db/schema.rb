# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_30_082114) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "day_id", null: false
    t.string "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["day_id"], name: "index_comments_on_day_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "day_foods", force: :cascade do |t|
    t.bigint "day_id", null: false
    t.bigint "food_id", null: false
    t.integer "qty"
    t.string "time"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["day_id"], name: "index_day_foods_on_day_id"
    t.index ["food_id"], name: "index_day_foods_on_food_id"
  end

  create_table "days", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_days_on_user_id"
  end

  create_table "foods", force: :cascade do |t|
    t.string "name"
    t.float "calories"
    t.float "fibres"
    t.float "sugars"
    t.float "proteins"
    t.float "fats"
    t.float "carbs"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "likes", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "day_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["day_id"], name: "index_likes_on_day_id"
    t.index ["user_id"], name: "index_likes_on_user_id"
  end

  create_table "selected_days", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "day_id", null: false
    t.string "date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["day_id"], name: "index_selected_days_on_day_id"
    t.index ["user_id"], name: "index_selected_days_on_user_id"
  end

  create_table "user_connections", id: false, force: :cascade do |t|
    t.integer "followed_id", null: false
    t.integer "follower_id", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "user_name"
    t.string "first_name"
    t.string "last_name"
    t.string "bio"
    t.string "email"
    t.string "password_digest"
    t.string "sex"
    t.datetime "dob", precision: 6
    t.integer "height"
    t.string "curr_weight"
    t.string "goal_weight"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.datetime "last_logged_in", precision: 6
    t.string "uid"
    t.string "provider"
    t.integer "profile_img"
    t.integer "bg_img"
  end

  add_foreign_key "comments", "days"
  add_foreign_key "comments", "users"
  add_foreign_key "day_foods", "days"
  add_foreign_key "day_foods", "foods"
  add_foreign_key "days", "users"
  add_foreign_key "likes", "days"
  add_foreign_key "likes", "users"
  add_foreign_key "selected_days", "days"
  add_foreign_key "selected_days", "users"
end
