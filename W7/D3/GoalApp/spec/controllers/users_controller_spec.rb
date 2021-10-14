require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  describe "GET #new" do
    it "render the new user form" do
      get :new
      expect(response).to render_template(:new)
    end
  end

  describe "POST #create" do
    let!(:valid_params) do
      { user:{username: "JarJar", password: 'password' } }
    end
    let!(:invalid_params) do
      { user:{username: "invalid", password: 'pard' } }
    end
    context "with valid params" do 
      it "creates a new user" do
        post :create, params: valid_params
        expect(User.last.username).to eq "JarJar"
      end
    end

    context "with invalid params" do
      before :each do
        post :create, params: invalid_params
      end
      it "render new user form" do
        expect(response).to render_template(:new)
      end
      it "flashes errors" do 
        expect(flash[:errors]).to be_present
      end
    end
  end

end
