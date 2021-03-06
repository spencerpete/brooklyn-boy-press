Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'

  resources :comments
  resources :posts, only: [:index, :show] 
  resources :users
  post '/subcomments', to: 'comments#create_subcomment'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
