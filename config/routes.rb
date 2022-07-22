Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :trails, only: [:show, :index]
    resources :reviews, only: [:create, :index]
    resources :lists, only: [:create, :index, :update, :destroy]
    resources :lists_trails, only: [:create, :destroy]
  end

end
