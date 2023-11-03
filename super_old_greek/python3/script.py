from re import sub
from unicodedata import normalize

original_text = None
correct_text = None

with open('../test_text.txt', 'r') as f:
    original_text = f.read()

with open('../correct_output.txt', 'r') as f:
    correct_text = f.read()

print(f"Starting with text: {original_text}")

modified_text = sub(
    r'(?!\n)([\u0300-\u036F]|[^\u0370-\u03FF]|͵)',
    '',
    normalize('NFD', original_text)
).upper()

print(f"Modified text to: {modified_text}")

print(f"Are the modified text and correct text the same? {modified_text == correct_text}")
