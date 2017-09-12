Rails.application.routes.draw do
  scope '/api' do
    get :restaurant, to: 'restaurants#index'
  end
end
