#!/usr/bin/env node

const { getArgs } = require('../src/functions');
const { displayMsg } = require('../src/functions');
const options = require('../data/options');

const textGenerator = new (require('../src/TextGenerator'))();

const arg = getArgs();
const paragraphs = parseInt(arg[0]);

if (isNaN(paragraphs)) {
    displayMsg(options, arg);   
    process.exit();
} 

const placeholder = textGenerator.generatePlaceholder(paragraphs);
placeholder.forEach(paragraph => process.stdout.write(paragraph));


