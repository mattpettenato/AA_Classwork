require 'towers_of_hanoi'

describe Towersgame do
  subject(:tower) {Towersgame.new}
  let (:tower2) {Towersgame.new} 
  
  describe '#initialize' do 
    it 'creates new towers' do
      expect(tower.towers).to eq([[4,3,2,1], [], []])
    end

  end

  describe '#move' do 
    it 'moves a ring' do 
      expect(tower.move(0, 2)).to eq([[4,3,2], [], [1]])
      # expect(tower.move(0, 1)).to eq([[4,3], [2], [1]])
    end

    it 'can never have larger ring above smaller ring' do 
      tower2.towers = [[4,3,2], [], [1]]
      
      expect{tower2.move(0,2)}.to raise_error("Error: larger ring is above smaller ring")
    end 

  end

  describe '#winner?' do
    it 'You win when the game is over' do
    tower.towers = [[], [], [4, 3, 2, 1]]
    expect(tower.winner?).to eq('you win!')
    end
  end
end