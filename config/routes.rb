Rails.application.routes.draw do
  get 'card/new'
  get 'card/show'
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }
  devise_scope :user do
    get 'addresses', to: 'users/registrations#new_address'
    post 'addresses', to: 'users/registrations#create_address'
    get 'profiles', to: 'users/registrations#new_profile'
    post 'profiles', to: 'users/registrations#create_profile'
  end

  root 'items#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :home, only: [:index, :new, :edit]
  resources :users, only: [:show] do
    collection do
      get :favorites
    end
  end
  
  resources :items do
    resources :purchase, only: [:index] do
      collection do
        get 'index', to: 'purchases#index'
        post 'pay', to: 'purchases#pay'
        get 'done', to: 'purchases#done'
      end
    end
    collection do
      get 'category/get_category_children', to: 'items#get_category_children', defaults: { format: 'json' }
       get 'category/get_category_grandchildren', to: 'items#get_category_grandchildren', defaults: { format: 'json' }
    end
    member do
      post   '/favorite/:item_id' => 'favorites#favorite',   as: 'favorite'
      delete '/favorite/:item_id' => 'favorites#unfavorite', as: 'unfavorite'
    end
  end
  resources :categories, only: [:index] do
    member do
      get 'parent'
      get 'child'
      get 'grandchild'
    end
  end
  resources :profiles, only: [:new, :show, :create]
  resources :addresses, only: [:new]
  resources :card, only: [:new, :show] do
    collection do
      post 'show', to: 'card#show'
      post 'pay', to: 'card#pay'
      post 'delete', to: 'card#delete'
    end
  end
  resources :comments, only:[:create,:update,:destroy] do
    member do
      get 'restore'
    end
  end


end
