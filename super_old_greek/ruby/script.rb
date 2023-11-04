correct_text = File.read('../correct_output.txt')

original_text = File.read('../test_text.txt')

puts "Starging with text: #{original_text}"

modified_text = original_text.unicode_normalize(
  form=:nfd
).gsub(
  /(?!\n)([\u0300-\u036F]|[^\u0370-\u03FF]|͵)/,
  ''
).upcase

puts "Modified text to: #{modified_text}"

puts "Are the correct and modified texts the same? #{modified_text == correct_text}"
