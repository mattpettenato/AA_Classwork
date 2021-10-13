Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resource :session, only: [:create, :new]
  resource :session, only: [:destroy]
  resources :users, only: [:show, :new, :create]
end
