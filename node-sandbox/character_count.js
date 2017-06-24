var sentence = "I really want to work for Wingspan"

characters = sentence.split("");
var newHash = {};

characters.map(function(character){
	if (newHash[character]){
		newHash[character] += 1
	}
	else {
		newHash[character] = 1
	}
return newHash;
});

function sortAssocObject(newHash) {
    var sortable = [];
    for (var key in newHash) {
        sortable.push([key, newHash[key]]);
    }

    sortable.sort(function(a, b) {
        return (a[1] > b[1] ? -1 : (a[1] < b[1] ? 1 : 0));
    });

    var orderedList = {};
    for (var i = 0; i < sortable.length; i++) {
        orderedList[sortable[i][0]] = sortable[i][1];
    }

    return orderedList;
}
console.log(sortAssocObject(newHash));
