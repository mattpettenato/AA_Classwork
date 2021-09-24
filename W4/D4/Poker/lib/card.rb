class Card 
  attr_reader :val, :suit 
  def initialize(val, suit)
    @val, @suit = val, suit 
  end

  def to_s  
    " #{val} of #{suit} " 
  end 

end