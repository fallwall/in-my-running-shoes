Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  resources :users do
    resources :races do
      resources :notes
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
