// helper functions


/** 
 * Get commandline arg
 */
const getArgs = () => {
    if (process.argv.length > 2) {
        return process.argv.slice(2);
    }
}


/**
 * Display console message
 * @param {Object} msgs - data object containing key-value pairs of supported options and messages
 * @param {String} arg - option entered on stdin
 */
const displayMsg = (msgs, arg) => {
    if (msgs[arg]) {
        process.stdout.write(msgs[arg]);
    } else {
        process.stdout.write(msgs["error"]);
    }
} 


module.exports = {
    getArgs,
    displayMsg
}