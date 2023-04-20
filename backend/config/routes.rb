Rails.application.routes.draw do
  resources :categories
  resources :products
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/register', to: "users#create"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  
end
