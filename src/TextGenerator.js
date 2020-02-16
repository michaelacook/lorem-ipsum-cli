/**
 * Methods for generating sentences and paragraphs
 */


module.exports = class TextGenerator
{
    constructor()
    {
        this.sentences = require('../data/sentences.js');
    }


    /**
     * Generate a paragraph of Latin nonsense text
     * Number of sentences generated randomly within a provided range
     * @param {Number} min - minimum number of sentences
     * @param {Number} max - max number of sentences
     * @param {Bool} first - whether first paragraph in a set
     * @param {Bool} html - whether to wrap paragraphs in p tags
     * @return {String} paragraph
     */
    generateParagraph(min, max, first=false, html=false)
    {
        let paragraph;
        html ? paragraph = "<p>" : paragraph = "";
        first ? paragraph += `${this.sentences[0]}\n ` : paragraph += "";
        const numberOfSentences = Math.floor(
            Math.random() * (max - min) + min
        );
        for (let i = 0; i <= numberOfSentences; i++) {
            paragraph += this.sentences[
                Math.floor(Math.random() * this.sentences.length)
            ] + "\n ";
        }
        if (html) {
            return paragraph + "</p> \n\n";
        }
        return paragraph + "\n\n";
    }


    /**
     * Generate a user-specified number of paragraphs of text
     * @param {Number} paragraphs - number of paragraphs to generate
     * @param {Bool} html - whether to generate paragraphs wrapped in p tags
     * @return {String} placeholder
     */
    generatePlaceholder(paragraphs, html)
    {
        const placeholder = new Array();
        const first = this.generateParagraph(4, 10, true, html);
        placeholder.push(first);
        if (paragraphs > 1) {
            for (let i = 1; i < paragraphs; i++) {
                let p = this.generateParagraph(4, 10, null, html);
                placeholder.push(p);
            }
        }
        return placeholder;
    }
}