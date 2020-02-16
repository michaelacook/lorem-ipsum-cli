#!/usr/bin/env node

const { getArgs } = require('../src/functions');
const { displayMsg } = require('../src/functions');
const options = require('../data/options');

const textGenerator = new (require('../src/TextGenerator'))();

// commandline arguments
const args = getArgs();
const paragraphs = parseInt(args[0]);
let html = false;
if (args.length > 1) {
    if (args[1] === '--html') {
        html = true;
    }
}

if (isNaN(paragraphs)) {
    displayMsg(options, args);   
    process.exit();
} 

const placeholder = textGenerator.generatePlaceholder(paragraphs, html);
placeholder.forEach(paragraph => process.stdout.write(paragraph));

