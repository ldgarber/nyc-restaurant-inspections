class RestaurantsController < ApplicationController
  def index
    q = params[:q]
    p = params[:p]
    
    if q.blank? || p.blank?
      render status: 400, json: { error: 'Expected parameter `q`' }
    else
      render(
        status: 200, 
        json: Restaurant.where(["#{p} LIKE ?", "%#{q}%"]).limit(100)
      )
    end
  end
end
