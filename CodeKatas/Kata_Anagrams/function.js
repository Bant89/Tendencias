const functions = {
    isAnagram: (...words) => {
        let result = words.map(e => {
            let res = e.toLowerCase()
                       .split('')
                       .sort()
                       .join('');
            return res;
        });
        if(result[0] === result[1]) return true;
        return false;
    }
}
module.exports = functions;