import sys

braille_dict = {
    'a': '⠁', 'b': '⠃', 'c': '⠉', # Complete Braille mapping here...
}

def text_to_braille(text):
    braille_text = ''.join(braille_dict.get(char, ' ') for char in text.lower())
    return braille_text

if __name__ == "__main__":
    input_text = sys.argv[1]
    print(text_to_braille(input_text))
