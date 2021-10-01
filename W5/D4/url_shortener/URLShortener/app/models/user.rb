class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validate(:check_email_valid)
  
  def check_email_valid
    unless self.email.split("").include?('@')
      errors[:email] << 'Invalid Email Address. Must Include @'
    end
  end


end