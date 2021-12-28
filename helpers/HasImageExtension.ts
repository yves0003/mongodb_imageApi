export const hasImageExtension = (url: string) => {
    if (!String.prototype.endsWith) {
        String.prototype.endsWith = function(searchString, position) {
        var subjectString = this.toString();
        if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.lastIndexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
        };
    }
    const valToSearch = ["JPEG","JPG","PNG"]

    for (let val of valToSearch) {
        if (url.toLowerCase().endsWith(val.toLowerCase())) {
           return true
        }
    }
    return false
}

