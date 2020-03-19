// const fifteen = inventors.filter(inventor => {
//     if (inventor.year >= 1500 && inventor.year < 1600){
//         return true;
//     }
// });
// console.table(fifteen);

//---------the same

const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))
 
console.table(fifteen);


const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNaames);


// const ordered = inventors.sort(function(a, b){
//     if(a.year > b.year){
//         return 1;
//     }else {
//         return -1;
//     }
// });

//---------the same

const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(ordered);


const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);


const oldest = inventors.sort(function(a, b){
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1;
});
console.table(oldest);


const category = document.querySelector('.mw-catogory');
const links = Array.from(category.querySelectorAll('a'));
//const links = [...category.querySelectorAll('a')];
const de = links
            .map(link => link.textContent)
            .filter(streetName => streetName.includes('de'));


const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
});
console.log(alpha);


const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike','walk', 'car', 'van', 'car', 'truck', 'pogostick'];
const transportation = data.reduce(function(obj, item){
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
},{});
console.log(transportation);