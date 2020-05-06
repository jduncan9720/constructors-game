function letters(character, beenGuessed) {
    this.storeChar = character,
    this.beenGuessed = beenGuessed,
    this.ifGuessed = function () {
        if (this.beenGuessed == true) {
            return this.storeChar;
        } else {
            return "_";
        }
    }
    this.guess = function(input){
        if(input == this.storeChar){
            this.beenGuessed == "true";
        }
    }
}

module.exports = letter.js;