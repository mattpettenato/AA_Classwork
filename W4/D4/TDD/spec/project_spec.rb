require 'project'

describe '#my_uniq' do 
  let (:first_arr) { [1, 2, 1, 3, 3] }
  it 'returns unique elements' do 
    expect(first_arr.my_uniq).to eq([1,2,3])
  end 

  it "doesn't modify first arr" do 
    first_arr.my_uniq
    expect(first_arr).to be(first_arr)
  end 
end 

describe '#two_sum' do
  let (:first_arr) { [-1, 0, 2, -2, 1] }
  it 'returns dictionary-wise index of pairs that sum to zero' do 
    expect(first_arr.two_sum).to eq([[0, 4], [2, 3]])
  end
end

describe '#my_transpose' do 
  let (:rows) { [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ] }
  let (:cols) { [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
  ]}
  it 'will transpose rows into cols, cols into rows.' do
    expect(rows.my_transpose).to eq(cols)
    expect(cols.my_transpose).to eq(rows)
  end
end 

describe '#stock_picker' do 
  let (:stocks) {[1,5,3,6,8,1,9,1]}
  it 'returns the most profitable days after buying then selling' do 
    expect(stocks.stock_picker).to eq([[0,6],[5,6]])
  end 

  it 'you cannot sell before you buy' do 
    expect(stocks.stock_picker).to_not eq([[0,6],[5,6],[6,7]])
  end 
  
end 

