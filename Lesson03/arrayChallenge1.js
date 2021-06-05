//array with 5 strings
let floweringTrees = ['Magnolia', 'Oleander', 'Red Bird of Paradise', 
            'Witch Hazel', 'Ornamental Cherry'];
console.log(floweringTrees);

//add an elementt to the end of the array
floweringTrees.push('Smoke Tree')
console.log(floweringTrees);

//remove the third element
floweringTrees.splice(2, 1);
console.log(floweringTrees);

//create a string from the elements and comma separate them
 const floweringTreesList = floweringTrees.join(',')
 console.log(floweringTrees);