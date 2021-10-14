# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

  after_initialize :ensure_session_token

  attr_reader :password
  validates :session_token, :username, :password_digest, presence: true
  validates :username, :session_token, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def generate_session_token
    SecureRandom::urlsafe_base64
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def is_password?(password)
    pwo = BCrypt::Password.new(self.password_digest)
    pwo.is_password?(password)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
  end

  def generate_session_token
    SecureRandom::urlsafe_base64
  end
end
