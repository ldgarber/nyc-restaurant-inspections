class Restaurant < ActiveRecord::Base
  validates :camis, uniqueness: true

  def address
    "#{self.building.to_i.to_s} #{self.street}\n#{self.boro}, NY #{self.zipcode.to_s}"
  end

  def as_json(options = {})
    super(( options || {}).merge ({
      :methods => [:address] 
    }))
  end

end
