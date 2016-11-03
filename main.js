// The dataset we'll be alphabetizing and rendering to the screen.
var dataset = [
  {
    name: 'Bob',
    age: '32',
    hair: 'Brown'
  },
  {
    name: 'Frank',
    age: '47',
    hair: 'Blonde'
  },
   {
    name: 'Sally',
    age: '24',
    hair: 'Red'
  },
   {
    name: 'Bill',
    age: '72',
    hair: 'Black'
  },
  {
    name: 'Zoey',
    age: '67',
    hair: 'Gray'
  }
];

var alphabetize = function() {
    // The sort() method will alphabetize the array objects based on the "name" key by comparing each
    // object against each other.
    var sorted = dataset.sort(function(a,b) {
       var nameA = a.name.toLowerCase();
      var nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
      // The map() method creates a new array made up of HTML tags that include the data from
      // each array object.
    }).map((item) => {
      return `
        <div>
          <h4>${item.name}</h4>
          <p>${item.age} years old</p>
          <p>${item.hair} hair</p>
        </div>
      `;
      // The join() method removes the commas between array objects so they don't render to
      // the screen.
    }).join('');
    var display = document.querySelector('#list');
    display.innerHTML = sorted;
};

alphabetize();