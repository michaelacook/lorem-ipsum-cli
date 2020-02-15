# Lorem Ipsum CLI
A simple commandline tool for generating lorem ipsum placeholder text at the commandline. No need to open a web browser, just open your terminal!

## How It Works 
Lorem Ipsum CLI is really simple. It uses 100 different Latin nonsense sentences taken from the internet and recombines them randomly and generates as many randomly-sized paragraphs as you want. By default the number of sentences in a paragraph will be a random integer between 4 and 10. However, this can be easily customized by changing the `min` and `max` arguments passed to `TextGenerator.generateParagraph` which is called on lines 46 and 50 in `TextGenerator.js`.

## Installing 
To install, run:

```
$ npm install lorem-ipsum-cli -g
```

## Usage 
To generate placeholder, run: 

```
$ lorem-ipsum [numberOfParagraphs]
```

E.g:

```
$ lorem-ipsum 3

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget est viverra, iaculis sem in, viverra elit. Nullam eu aliquam nibh, ut euismod ex. Aenean diam lacus, fermentum ut cursus vel, elementum vitae risus. Vestibulum a erat in ante bibendum sollicitudin a at ligula. Nulla velit augue, dignissim id nisi in, egestas accumsan nibh. Etiam consectetur dui quis vestibulum luctus. Mauris nulla libero, convallis sagittis diam at, interdum tempus sem. Donec nisi lorem, facilisis eget enim ut, fermentum semper sem. Aenean ac porta erat, in varius ex. 

Morbi congue ultrices mi. Aenean faucibus pellentesque elit rutrum lobortis. Donec eget nisi vitae ex condimentum aliquam. Nunc lobortis ornare erat, vitae dignissim orci volutpat vel. Nunc eu quam laoreet felis rutrum feugiat. Duis vel dictum mi. 

Donec eget nisi vitae ex condimentum aliquam. Vestibulum at est aliquet, accumsan risus vel, pretium augue. Fusce porta porttitor augue quis congue. Nunc eu quam laoreet felis rutrum feugiat. Vestibulum at est aliquet, accumsan risus vel, pretium augue.
```

Simply copy from your terminal using `ctrl+shift+c` and use as needed!

## License 
This project is licensed under the MIT license.