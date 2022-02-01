Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello' => 'application#hello_world'
  
  namespace :api do
    namespace :v1 do
      resources :users do
        post '/follow' => 'users#follow'
        post '/unfollow' => 'users#unfollow'
        resources :days
        resources :selected_days, only: [:index]
      end
      resources :foods
      resources :days do
        resources :comments
      end
      resources :day_foods
      resources :likes
      resources :selected_days do
      end
      resources :weights
      get '/today' => 'selected_days#today'
      get '/tomorrow' => 'selected_days#tomorrow'
      post '/login' => 'sessions#create'
      post '/logout' => 'sessions#destroy'
      delete '/dislike' => 'likes#dislike'
      get '/auth/facebook/callback' => 'sessions#create'
    end
  end

  get 'auth/:provider' => 'sessions#omniauth'
  get 'auth/failure' => redirect('/')
  get '/google-login' => redirect('/auth/google_oauth2')
  get 'auth/:provider/callback' => 'sessions#create'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
