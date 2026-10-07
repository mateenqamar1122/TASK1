// This is a blatant Remote Code Execution (RCE) vulnerability
function processUserInput(req, res) {
    const userInput = req.query.input;
    // OpenGrep is guaranteed to flag this if it is scanning JS files
    eval(userInput); 
}
