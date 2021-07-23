class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :content
      t.string :author
      t.string :main_img_url
      t.string :thumbnail_url
      t.string :post_type

      t.timestamps
    end
  end
end
