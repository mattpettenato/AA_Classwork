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
require 'rails_helper'

RSpec.describe User, type: :model do

  
  describe 'validations' do
    # it "should have a username" do
    #   expect(User.last.username).not_to be nil #{should validate_presence_of(:username)}
    # end
    before :each do
    # FactoryBot.build(:user)
    # FactoryBot.create(:user)
      create(:user)
    end

    it {should validate_presence_of(:username)}
    it {should validate_uniqueness_of(:username)}

    it {should validate_presence_of(:session_token)}
    it {should validate_uniqueness_of(:session_token)}

    it {should validate_presence_of(:password_digest)}

    it {should validate_length_of(:password).is_at_least(6)}
  end

  describe "password=" do
    before :each do
        create(:user)
    end
    # subject(:user) { create(:user) }
    it "should set password_digest" do
      expect(User.last.password_digest).not_to be nil
    end
  end

  describe "find_by_credentials" do
    before :each do
        create(:user)
    end
    context "When credentials are valid,"
    it "should return user" do
      expect(User.find_by_credentials(User.last.username, "password")).to eq(User.last)
    end

    context "When credentials are invalid,"
    it "should return nil" do
      expect(User.find_by_credentials(User.last.username, "wordpass")).to eq(nil)
    end
  end

  describe "reset_session_token!" do
    before :each do
      create(:user)
    end
    it "should reset the session token" do
      last_session_token = User.last.session_token
      User.last.reset_session_token!
      expect(User.last.session_token).not_to eq last_session_token
    end
  end

end


