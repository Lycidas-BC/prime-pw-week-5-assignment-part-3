console.log('***** Music Collection *****')

let collection = [];

//function to add records into collection
function addToCollection(title, artist, yearPublished){
  //create record object with input properties
  let record = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  } //end object record

  //push newly created record onto collection array
  collection.push(record);

  //return new records
  return record;
} //end function addToCollection

console.log("Initial collection", collection);
//console.log(`addToCollection("The Beatles", "Abbey Road", 1969): ${addToCollection("The Beatles", "Abbey Road", 1969)}`);
console.log("Add to collection: The Beatles, Abbey Road, 1969", addToCollection("The Beatles","Abbey Road", 1969));
console.log("Updated collection", collection);
