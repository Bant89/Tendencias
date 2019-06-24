const functions = {
   isAnagram: (...args) => {
       let resultado = args.map(word => {
                    return word.toLowerCase()
                               .split('')
                               .sort()
                               .join('');
       });

       if(resultado[0] == resultado[1]) return true;
       return false;
   },
   loadFile: route => {
       let fs = require('fs');
       let path = require('path');
       let arreglo = fs.readFileSync(route, (err, data) => {
           if (err) throw err;
            return data.toString();
       });
       return arreglo;   
   },
   completeKata: () => {
       let words = loadFile('wordlist.txt');
        let result = [...Array(words.length)];
        
   }
}
module.exports = functions;