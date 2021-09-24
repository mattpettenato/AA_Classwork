require 'card'

describe Card do 
  subject(:card) {Card.new("Ace", :Heart)}

  describe '#initialize' do 
    it 'has a value and suit' do 
      expect(card.val).to eq("Ace") 
      expect(card.suit).to eq(:Heart)
    end 
  end 

end 

