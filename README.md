# Lorem Ipsum CLI
A simple commandline tool for generating lorem ipsum placeholder text at the commandline. No need to open a web browser, just open your terminal!

## How It Works 
Lorem Ipsum CLI is really simple. It uses 100 different Latin nonsense sentences taken from the internet and recombines them randomly and generates as many randomly-sized paragraphs as you want. By default the number of sentences in a paragraph will be a random integer between 4 and 10. However, this can be easily customized by changing the `min` and `max` arguments passed to `TextGenerator.generateParagraph` which is called on lines 46 and 50 in `TextGenerator.js`.

## Installing 
To install, run:

```
$ npm install lorem-ipsum-text-cli -g
```

## Usage 
To generate placeholder, run: 

```
$ lorem-ipsum [numberOfParagraphs]
```

Simply copy from your terminal using `ctrl+shift+c` and use as needed!

## License 
This project is licensed under the MIT license.