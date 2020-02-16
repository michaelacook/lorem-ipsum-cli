# Lorem Ipsum Text CLI
A simple commandline tool for generating lorem ipsum placeholder text at the commandline. No need to open a web browser, just open your terminal!

## New Features
Version 1.1.0 introduces line breaks to make working with output easier, and includes an option to wrap generated paragraphs in html `p` tags. E.g: 

```
$ lorem-ipsum 1 --html

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 Donec nisi lorem, facilisis eget enim ut, fermentum semper sem.
 In vestibulum sit amet ligula quis hendrerit.
 Maecenas rhoncus erat non tempor malesuada.
 Sed vitae nibh orci.
 Ut egestas auctor augue, sit amet suscipit purus aliquam eget.
 Suspendisse interdum mollis auctor.
 Ut sollicitudin sem lacus, eget mattis arcu consequat quis.
 Mauris diam felis, tempus in ex ac, tempor imperdiet ligula.
 </p> 
```

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