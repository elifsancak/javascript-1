/*

write a little javascript to:
- take in the string 'toSort'
- sort all of the characters by charCode number
- and assign the new string to 'sorted'

the handler is already set up to:
- read user input to the variable 'toSort'
- write 'sorted' to the output

*/


function sortHandler() {

    // read and process user input (this works, no need to change it!)
    const toSort = document.getElementById('sort-input').value;
  
    // pass user input through core logic (write this! it doesn't work)
    //const sorted = `sort the charecters in ${toSort}`;
  
    function MESAJ(str) {
      
      let splitString = str.split("");
      let  splitString2 =  splitString.sort();
      let splitString3 = splitString2.join("");
      return (splitString3);
  }
      const sorted =  MESAJ(toSort);
      
     
    // report result to user (this works, no need to change it!)
    const outputField = document.getElementById('sort-output');
    outputField.innerHTML = sorted;
  
    console.log('\n--- sortHandler ---');
    console.log('toSort:', typeof toSort, ',', toSort);
    console.log('sorted:', typeof sorted, ',', sorted);
  };
  const sortButton = document.getElementById('sort-button');
  sortButton.addEventListener('click', sortHandler);
  