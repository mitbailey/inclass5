// ADD NEW ITEM TO END OF LIST
var myList = document.getElementsByTagName('ul')[0];
myList.appendChild(document.createElement('li'));
myList.children[4].textContent = 'cream';

// ADD NEW ITEM START OF LIST
myList.insertBefore(document.createElement('li'), myList.children[0]);
myList.children[0].textContent = 'kale';

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listItems = document.getElementsByTagName('li');

for (var i = 0; i < listItems.length; i++)
{
    listItems[i].className = 'cool';
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
document.getElementsByTagName('h2')[0].textContent += ' (' + listItems.length + ')';