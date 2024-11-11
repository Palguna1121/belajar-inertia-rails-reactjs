Rails.application.routes.draw do
  get "inertia-example", to: "inertia_example#index"
  get "home", to: "inertia_example#home"

  scope :users, as: :user do
    get "", to: "users#index", as: "index"
    get "create", to: "users#create", as: "create"
    post "store", to: "users#store", as: "store"
    get "edit/:id", to: "users#edit", as: "edit"
    put "update/:id", to: "users#update", as: "update"
    delete "delete/:id", to: "users#destroy", as: "destroy"
  end
  
  namespace :auth do
    get "login", to: "auth#login"
    post "login", to: "auth#create"
    get "register", to: "auth#register"
    post "register", to: "auth#store"
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/*
  get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  get "manifest" => "rails/pwa#manifest", as: :pwa_manifest

  # Defines the root path route ("/")
  root "inertia_example#home"
end
