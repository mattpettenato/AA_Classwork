# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  birth_date  :date             not null
#  color       :string           not null
#  description :text             not null
#  name        :string           not null
#  sex         :string(1)        not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'action_view'
class Cat < ApplicationRecord

  ActionView::Helpers::DateHelper
  COLOR = %w(orange black brown).freeze
  validates :birth_date, :color, :name, :sex, :description, presence: true
  validates :color, inclusion: COLOR
  validates :sex, inclusion: %w(F M)



  def age
    now = Time.now.utc.to_date
    now.year - self.birth_date.year - ((now.month > self.birth_date.month || (now.month == self.birth_date.month && now.day >= self.birth_date.day)) ? 0 : 1)
  end

end
