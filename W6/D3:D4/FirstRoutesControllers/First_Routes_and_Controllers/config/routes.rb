                #     users GET    /users(.:format)                                                                         users#index
                #           POST   /users(.:format)                                                                         users#create
                #  new_user GET    /users/new(.:format)                                                                     users#new
                # edit_user GET    /users/:id/edit(.:format)                                                                users#edit
                #      user GET    /users/:id(.:format)                                                                     users#show
                #           PATCH  /users/:id(.:format)                                                                     users#update
                #           PUT    /users/:id(.:format)                                                                     users#update
                #           DELETE /users/:id(.:format)                                                                     users#destroy

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:index, :create, :show, :update, :destroy]

  resources :artworks, only: [:index, :create, :show, :update, :destroy]

  resources :artwork_shares, only: [:create, :destroy]


  # get 'users', to: 'users#index', as: 'users'
  # post 'users', to: 'users#create'
  # get 'users/new', to: 'users#new', as: 'new_user'
  # get 'users/:id', to: 'users#edit', as: 'edit_user'
  # get 'users/:id', to: 'users#show', as: 'user'
  # patch 'users/:id', to: 'users#update'
  # put 'users/:id', to: 'users#update'
  # delete 'users/:id', to: 'users#destroy'
  


end
