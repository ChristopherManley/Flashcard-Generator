// BasicCard constructor per instructions
exports.BasicCard = function(front, back) {
    this.front = front;
    this.back = back;
};

// ClozeCard constructor - hides special text for flash cards
exports.ClozeCard = function(text, cloze) {

    // Guarantees that user input does not have to be capitalized 
    var textToLower = text.toLowerCase();
    var clozeToLower = cloze.toLowerCase();

    // Puts cloze statement within text
    if (!textToLower.includes(clozeToLower)) {
        console.log('Error' + cloze);
        return;
    }
    // Easier to read variables for export
    this.full = text;
    this.cloze = cloze;
    this.partial = text.replace(cloze, '...');
};