console.log('***** Music Collection *****')

let collection = [];

//function to add records into collection
function addToCollection(artist, title, yearPublished){
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

//test function:
console.log("Initial collection", collection);
//console.log(`addToCollection("Roger Miller", "Disney's Robin Hood Soundtrack", 1973): ${addToCollection("Roger Miller", "Disney's Robin Hood Soundtrack", 1973)}`);
console.log("Add to collection: Roger Miller, Disney's Robin Hood Soundtrack, 1973", addToCollection("Roger Miller", "Disney's Robin Hood Soundtrack", 1973));
//console.log("Updated collection", collection);
console.log("Add to collection: Tom Waits, Nighthawks at the Diner, 1975", addToCollection("Tom Waits", "Nighthawks at the Diner", 1975));
//console.log("Updated collection", collection);
console.log("Add to collection: Nina Simone, Emergency Ward, 1972", addToCollection("Nina Simone", "Emergency Ward", 1972));
//console.log("Updated collection", collection);
console.log("Add to collection: Nick Cave & the Bad Seeds, Skeleton Tree, 2016", addToCollection("Nick Cave & the Bad Seeds", "Skeleton Tree", 2016));
//console.log("Updated collection", collection);
console.log("Add to collection: Robert Johnson, King of the Delta Blues Singers, 1961", addToCollection("Robert Johnson", "King of the Delta Blues Singers", 1961));
//console.log("Updated collection", collection);
console.log("Add to collection: Swans, The Seer, 2012", addToCollection("Swans", "The Seer", 2012));
console.log("Updated collection (6 records)", collection);
console.log("Add to collection: Bob Dylan, The Freewheelin' Bob Dylan, 1963", addToCollection("Bob Dylan", "The Freewheelin' Bob Dylan", 1963));
//console.log("Updated collection", collection);
console.log("Add to collection: Bob Dylan, Highway 61 Revisited, 1965", addToCollection("Bob Dylan", "Highway 61 Revisited", 1965));
//console.log("Updated collection", collection);
console.log("Add to collection: Bob Dylan, Blood on the Tracks, 1975", addToCollection("Bob Dylan", "Blood on the Tracks", 1975));
//console.log("Updated collection", collection);
console.log("Add to collection: Bob Dylan, Rough and Rowdy Ways, 2020", addToCollection("Bob Dylan", "Rough and Rowdy Ways", 2020));
//console.log("Updated collection", collection);
console.log("Add to collection: Patti Smith, Horses, 1975", addToCollection("Patti Smith", "Horses", 1963));
//console.log("Updated collection", collection);
console.log("Add to collection: Mitski, Be The Cowboy, 2018", addToCollection("Mitski", "Be The Cowboy", 2018));
//console.log("Updated collection", collection);
console.log("Add to collection: Arcade Fire, The Suburbs, 2010", addToCollection("Arcade Fire", "The Suburbs", 2010));
//console.log("Updated collection", collection);
console.log("Add to collection: GZA, Liquid Swords, 1995", addToCollection("GZA", "Liquid Swords", 1995));
//console.log("Updated collection", collection);
console.log("Add to collection: Deltron 3030, Deltron 3030, 2000", addToCollection("Deltron 3030", "Deltron 3030", 2000));
//console.log("Updated collection", collection);
console.log("Add to collection: Harry Nilsson, Nilsson Schmilsson, 1971", addToCollection("Harry Nilsson", "Nilsson Schmilsson", 1971));
//console.log("Updated collection", collection);
console.log("Add to collection: Daniel Johnston, Hi, How Are You?, 1983", addToCollection("Daniel Johnston", "Hi, How Are You?", 1983));
//console.log("Updated collection", collection);
console.log("Add to collection: Allen Toussaint, The Bright Mississippi, 2009", addToCollection("Allen Toussaint", "The Bright Mississippi", 2009));
//console.log("Updated collection", collection);
console.log("Add to collection: Mississippi John Hurt, Today!, 1966", addToCollection("Mississippi John Hurt", "Today!", 1966));
//console.log("Updated collection", collection);
console.log("Add to collection: Mitsuko Uchida, Mozart: Piano Sonatas, 2003", addToCollection("Mitsuko Uchida", "Mozart: Piano Sonatas", 2003));
//console.log("Updated collection", collection);
console.log("Add to collection: Blind Willie Johnson, The Complete Blind Willie Johnson, 2007", addToCollection("Blind Willie Johnson", "The Complete Blind Willie Johnson", 2007));
console.log("Updated collection", collection);

// print collection array
function showCollection(collection){
  //log array length
  console.log(collection.length);

  //loop over array elements, formatting and printing each object
  for (let record of collection){
    console.log(`${record.title} by ${record.artist}, published in ${record.yearPublished}`);
  }
 } //end function showCollection

//test showCollection
showCollection(collection);

//find all albums in a collection by a particular artist
//(I know the instructions didn't tell us to take the collection as an input, but I figured this way we can use the same function to search someone else's collection too)
function findByArtist(artist, collection){
  let albumsByArtist = [];
  //go through record collection one at a time
  for(let record of collection){
    //compare input artist to artist of current record. trim string and convert to lower case so that whitespace and capitalization don't have to match
    if( artist.trim().toLowerCase() == record.artist.trim().toLowerCase() ) {
      albumsByArtist.push(record);
    }
  }
  //return array of successful matches
  return albumsByArtist;
} //end function findByArtist

//search for William Shatner - no results
console.log("Find albums by William Shatner (none):");
showCollection(findByArtist("William Shatner", collection));

//search for GZA - one result
console.log("Find albums by GZA (one):");
showCollection(findByArtist("GZA", collection));

//search for Harry Nilsson - unsanitized input, one result
console.log("Find albums by '  hArRy nIlSSoN  ' (with Spongebobbed capitalization and unnecessary whitespace - should find oneone):");
showCollection(findByArtist("  hArRy nIlSSoN  ", collection));

//search for Bob Dylan - four results
console.log("Find albums by Bob Dylan (four):");
showCollection(findByArtist("Bob Dylan", collection));
