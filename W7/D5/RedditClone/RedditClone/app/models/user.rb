class User < ApplicationRecord
  #aaspire
  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_null: true} 
  validates :password_digest, presence: true
  
  has_many :subreddits,
  foreign_key: :mod_id,
  class_name: "Sub"

  has_many :posts,
  foreign_key: :author_id,
  class_name: "Post"
  
  after_initialize :ensure_session_token
  
  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.is_password?(password)
    return nil
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_password?(password)
    pwo = BCrypt::Password.new(password_digest)
    pwo.is_password?(password)
  end

  def reset_session_token # session sandwich
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

end
