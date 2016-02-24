elems = [ [1],[1,2],[1,2,3], [1,2,3,4] ]

elems.each do |elem|
  p elem
 end 

sam = elems.sample 
p sam

puts "How many bees do you see?"

answer = gets.chomp

if answer.to_i == sam.length
  p "Yes!"
else 
  p "no..."
end

