class Comment < ApplicationRecord
  has_many :subcomments, class_name: "Comment",
                        foreign_key: 'comment_id',
                        dependent: :destroy
  belongs_to :user
  belongs_to :post, optional: true 
  belongs_to :comment, optional: true 
end
