require 'deck'

describe Deck do 
  subject(:deck) {Deck.new}

  describe '#initialize' do 
    it 'generates 52 card deck' do 
      expect(deck.deck.length).to be(52)
    end 

    it 'make sure all cards are in deck' do 
      expect
    end 

  end 
end 