class RestaurantsController < ApplicationController
  def index
    q = params[:q]
    
    if q.blank?
      render status: 400, json: { error: 'Expected paramter `q`' }
    else
      render(
        status: 200, 
        json: Restaurant.where(["name LIKE ?", "%#{q}%"]).limit(100)
      )
    end
  end
end
