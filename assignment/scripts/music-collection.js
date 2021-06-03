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

//a function which compares input strings without regard for unnecessary whitespace or capitalization - handy for search functions
function sanitizeAndCompare (string1, string2){
  return string1.trim().toLowerCase() == string2.trim().toLowerCase();
} //end sanitizeAndCompare

//find all albums in a collection by a particular artist
//(I know the instructions didn't tell us to take the collection as an input, but I figured this way we can use the same function to search someone else's collection too)
function findByArtist(artist, collection){
  let albumsByArtist = [];
  //go through record collection one at a time
  for(let record of collection){
    //compare input artist to artist of current record. trim string and convert to lower case so that whitespace and capitalization don't have to match
    if( sanitizeAndCompare(artist, record.artist) ) {
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
console.log("Find albums by '  hArRy nIlSSoN  ' (with Spongebob capitalization and unnecessary whitespace - should find one):");
showCollection(findByArtist("  hArRy nIlSSoN  ", collection));

//search for Bob Dylan - four results
console.log("Find albums by Bob Dylan (four):");
showCollection(findByArtist("Bob Dylan", collection));

//Stretch goal: create an extra flexible search function
//allow multiple search criteria, including by date range, multiple years multiple artists at a time, and/or multiple albums

// function for use in parseSearchString. if all three search constraints exist, this function will figure where a particular constraint is stored in the searchArray and just return that array element
function whichArrayElement (mainIndex, otherIndex1, otherIndex2, array){
  //if main index is bigger than the others, it's in searchArray[2]; if smaller, it's in searchArray[0]; else it's in searchArray[1]
  return mainIndex > otherIndex1 && mainIndex > otherIndex2 ? array[2] :
  mainIndex < otherIndex1 && mainIndex < otherIndex2 ? array[0] : array[1];
} //end whichArrayElement

//searchCriteria string format : artist: (artist1), (artist2) AND/OR year: year1-year2 (or year1, year2, year3) AND/OR album: album1, album2
function parseSearchString (searchString) {
  //separate search strings by category
  let searchArray = searchString.trim().toLowerCase().split(/artist:|album:|year:/);
  searchArray.shift();

  //make sure search items are in the expected order

  //grab indexes of artist for determining order in original string
  let artistIndex = searchString.indexOf("artist:");
  let albumIndex = searchString.indexOf("album:");
  let yearIndex = searchString.indexOf("year:");

  //initialize variables
  let artist = "";
  let album = "";
  let year = "";

  //separate scenarios: all three search constraints exist, only two exist, only one exist
  if ( artistIndex >=0 && albumIndex >=0 && yearIndex >=0 ) {
    //all three exist; if an index is bigger than the others, it's in searchArray[2]; if smaller, it's in searchArray[0]; else it's in searchArray[1]
    console.log(artistIndex, albumIndex, yearIndex, searchArray);
    artist = whichArrayElement(artistIndex, albumIndex, yearIndex, searchArray);
    album = whichArrayElement(albumIndex, yearIndex, artistIndex, searchArray);
    year = whichArrayElement(yearIndex, artistIndex, albumIndex, searchArray);
  } else if (artistIndex >=0 && albumIndex >=0) {
    //artist and album constraints exist
    artist = artistIndex > albumIndex ? searchArray[1] : searchArray[0];
    album = artistIndex > albumIndex ? searchArray[0] : searchArray[1];
  } else if (albumIndex >=0 && yearIndex >=0) {
    //album and year constraints exist
    album = albumIndex > yearIndex ? searchArray[1] : searchArray[0];
    year = albumIndex > yearIndex ? searchArray[0] : searchArray[1];
  } else if (artistIndex >=0 && yearIndex >=0) {
    //artist and year constraints exist
    artist = artistIndex > yearIndex ? searchArray[1] : searchArray[0];
    year = artistIndex > yearIndex ? searchArray[0] : searchArray[1];
  } else if (artistIndex >=0) {
    //only artist constraint exists
    artist = searchArray[0];
  } else if (albumIndex >=0) {
    //only album constraint exists
    album = searchArray[0];
  } else if (yearIndex >=0) {
    //only year constraint exists
    year = searchArray[0];
  }
  searchArray = [artist, album, year];
  return searchArray;
} //end parseSearchString

function search(searchCriteria, collection){
  let artist = [];
  let album = [];
  let year = [];
  //parse searchCriteria string
  let searchArray = parseSearchString(searchCriteria);

  // populate artist array
  let counter = 0;
  for (let splitString of searchArray[0].split("\"")){
    if (counter%2 == 1) {
      artist.push(splitString);
    }
    counter += 1;
  }
  console.log(artist);

  // populate album array
  counter = 0;
  for (let splitString of searchArray[1].split("\"")){
    if (counter%2 == 1) {
      album.push(splitString);
    }
    counter += 1;
  }
  console.log(album);

  // populate year array
  counter = 0;
  for (let splitString of searchArray[2].replace("[","").replace("]","").split("\,")){
    if (splitString.indexOf("-") >= 0) {
      console.log(splitString.slice(0,splitString.indexOf("-")).trim());
      for (let num = Number(splitString.slice(0,splitString.indexOf("-")).trim()); num <= Number(splitString.slice(splitString.indexOf("-")+1,splitString.length).trim()); num++) {
        year.push(num);
        console.log(num);
      }
    } else {
      year.push(Number(splitString.trim()));
    }
  }
  console.log(year);

} //end function search

let testString = 'artist: ["Bob Dylan", "GZA", "Nick Cave & the Bad Seeds"] year: [1960-1969, 1995] album: ["Liquid Swords", "The Freewheelin\ Bob Dylan", "Mozart: Piano Sonatas", "Hi, How Are You"]';
let parseString = parseSearchString(testString);
console.log(testString, parseString);
search(testString,collection);
