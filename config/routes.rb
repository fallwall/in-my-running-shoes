Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/users/verify', to: 'users#verify'
  
  resources :users 
  resources :races do
      resources :notes
  end

  get '/newest5', to: 'races#newest5'
 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
