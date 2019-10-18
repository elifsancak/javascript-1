/* repeat charecters
write a function that repeats the charecters in a string according to these rules:
- letters are doubled
- numbers are tripled
- anything else is quadrupled
*/

const repeatCharsTests = [
  { name: 'first', args: ['abc'], expected: 'aabbcc' },
  { name: 'second', args: ['123'], expected: '111222333' },
  { name: 'third', args: ['%-*>'], expected: '%%%%----****>>>>' },
  { name: 'fourth', args: ['h3LL0 W@r!|)'], expected: 'hh333LLLL000    WW@@@@rr!!!!||||))))' },
  { name: 'fifth', args: ['{:-<*>-:}'], expected: '{{{{::::----<<<<****>>>>----::::}}}}' },
  { name: 'sixth', args: [''], expected: '' },
  { name: 'seventh', args: [' '], expected: '    ' },
];
function repeatChars(str) {
  
      // write this!
        var array = str.split("");
        var empty =" ";
        array.forEach(function(str) {
          var code=str.charCodeAt(); 
          if (code<=90 && code>=65){
            yazi = str+str;
          }
          else if (code<=122 && code>=97) {
            yazi =str+str;
          }
          else if (code<=57 && code>=48 ) {
            yazi =str+str+str;
          }
          else if (code == 32 ) {
           yazi = str+str+str+str;
          }
          else{
            yazi = str+str+str+str;
          }
          
          empty=empty+yazi;
          
      });
      
      return empty;
    
    }
  /*var array = str.split('');
  var empty = " ";
  array.forEach(function(str){
    var arraycode = str.charCodeAt();
     if (arraycode<=90 && arraycode>=65){
       yazi = yazi+yazi;
      // return yazi;
     }
     else if (arraycode<=122 && arraycode>=97) {
      yazi = yazi+yazi;
    //  return yazi;
  }
     else if (arraycode<=57 && arraycode>=48 ) {
      yazi = yazi+yazi+yazi; 
   //   return yazi;
     }
     else if (empty == " ") {
       yazi = empty+empty+empty+empty;
      // return yazi;
     }
     else {
      yazi = yazi+yazi+yazi+yazi; 
     // return yazi;
     };
   return yazi;
  // write this!
})*/

evaluate(repeatChars, repeatCharsTests);



function repeatCharsHandler() {

  // read and process user input (this works, no need to change it!)
  const stringInput = document.getElementById('repeatChars-input').value;

  // pass user input through core logic (this works!  no need to change it)
  const repeatCharsed = repeatChars(stringInput);

  // report result to user (this works, no need to change it!)
  const outputField = document.getElementById('repeatChars-output');
  outputField.innerHTML = repeatCharsed;

  console.log('\n--- repeatCharsHandler ---');
  console.log('stringInput:', typeof stringInput, ',', stringInput);
  console.log('repeatCharsed:', typeof repeatCharsed, ',', repeatCharsed);
};
const repeatCharsButton = document.getElementById('repeatChars-button');
repeatCharsButton.addEventListener('click', repeatCharsHandler);