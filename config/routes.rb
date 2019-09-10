Rails.application.routes.draw do
  get '/contact', to: 'home#contact', as: 'contact'
  get '/about', to: 'home#about', as: 'about'
  get '/help', to: 'home#help', as: 'help'
  get '/home', to: 'home#index', as: 'home'

  root 'home#index'
end
