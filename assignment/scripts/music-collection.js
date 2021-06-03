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
  //log out search criteria
  console.log(`Search query: ${searchCriteria}`);

  //if no search constraints, return entire collection
  if (searchCriteria.trim() == "") {
    return collection;
  }

  //initialize some variables
  let searchResults = [];
  let artists = [];
  let albums = [];
  let years = [];
  let andConstraints = false;

  //function search constraints will be OR by default; allow user to specify AND by beginning search with AND
  if (searchCriteria.trim().slice(0,3) === "AND") {
    andConstraints = true;
  }

  //parse searchCriteria string
  let searchArray = parseSearchString(searchCriteria);

  // populate artist array
  let counter = 0;
  for (let splitString of searchArray[0].split("\"")){
    if (counter%2 == 1) {
      artists.push(splitString);
    }
    counter += 1;
  }

  // populate album array
  counter = 0;
  for (let splitString of searchArray[1].split("\"")){
    if (counter%2 == 1) {
      albums.push(splitString);
    }
    counter += 1;
  }

  // populate year array
  for (let splitString of searchArray[2].replace("[","").replace("]","").split("\,")){
    if (splitString.indexOf("-") >= 0) {
      for (let num = Number(splitString.slice(0,splitString.indexOf("-")).trim()); num <= Number(splitString.slice(splitString.indexOf("-")+1,splitString.length).trim()); num++) {
        years.push(num);
      }
    } else {
      years.push(Number(splitString.trim()));
    }
  }
  // for some reason, years the above was resulting in an array of [0] if there was no year constraint; if this happens, get rid of 0
  if (years[0] == 0){
    years.shift();
  }
  if ( andConstraints ){
    for (let record of collection) {
      // if there's no constraint on a category, default to true so we allow anything true
      // if there is some constraint, default to false
      let artistMatch = artists.length == 0;
      let albumMatch = albums.length == 0;
      let yearMatch = years.length == 0;

      for (let artistSearch of artists){
        if (sanitizeAndCompare( artistSearch, record.artist ) ){
          artistMatch = true;
        }
      }
      for (let albumSearch of albums){
        if (sanitizeAndCompare( albumSearch, record.title )){
          albumMatch = true;
        }
      }
      for (let yearSearch of years){
        if (yearSearch == record.yearPublished){
          yearMatch = true;
        }
      }
      if (artistMatch && albumMatch && yearMatch) {
        searchResults.push(record);
      }
    }
  } else {
    for (let record of collection) {
      let addRecord = false;
      for (let artistSearch of artists){
        if (sanitizeAndCompare( artistSearch, record.artist ) ){
          addRecord = true;
        }
      }
      for (let albumSearch of albums){
        if (sanitizeAndCompare( albumSearch, record.title )){
          addRecord = true;
        }
      }
      for (let yearSearch of years){
        if (yearSearch == record.yearPublished){
          addRecord = true;
        }
      }
      if (addRecord) {
        searchResults.push(record);
      }
    }
  }
  return searchResults;
} //end function search

// search for multiple artists, albums, and years; try to include ones with weird characters like , and : and ' and &, just to make sure they don't break function
let testString = 'artist: ["Bob Dylan", "GZA", "Nick Cave & the Bad Seeds"] year: [1960-1969, 1995] album: ["Liquid Swords", "The Freewheelin\' Bob Dylan", "Mozart: Piano Sonatas", "Hi, How Are You"]';
let parseString = parseSearchString(testString);
console.log(testString, parseString);
console.log(search(testString,collection));

//make sure that no search criteria just returns the whole collection
console.log(search('', collection));

//make sure that not finding anything returns an empty array
console.log(search('artist: ["notABand"]', collection));
console.log(search('year: [1900]', collection) );
console.log(search('album: ["worstAlbumEver"]', collection));
console.log(search('asdf', collection));

//make sure I can search only by artist, only by album, only by year
console.log(search('artist: ["Bob Dylan"]', collection));
console.log(search('artist: ["Arcade Fire", "Mitski"]', collection));
console.log(search('year: [2000]', collection));
console.log(search('year: [1960-1965, 1973, 2015-2020]', collection));
console.log(search('album: ["The Freewheelin\' Bob Dylan"]', collection));
console.log(search('album: ["Disney\'s Robin Hood Soundtrack", "Nighthawks at the Diner", "Horses"]', collection));

//make sure I can search by two search criteria and make sure order doesn't matter
console.log(search('artist: ["Arcade Fire", "Mitski"] year: [2000]', collection));
console.log(search('year: [2000] artist: ["Arcade Fire", "Mitski"]', collection));
console.log(search('album: ["Deltron 3030"] year: [2020]', collection));
console.log(search('year: [2020] album: ["Deltron 3030"]', collection));
console.log(search('artist: ["Arcade Fire", "Mitski"] album: ["Deltron 3030"]', collection));

// REPEAT ABOVE QUERIES WITH AND CONSTRAINT
// search for multiple artists, albums, and years; try to include ones with weird characters like , and : and ' and &, just to make sure they don't break function
testString = 'AND artist: ["Bob Dylan", "GZA", "Nick Cave & the Bad Seeds"] year: [1960-1969, 1995] album: ["Liquid Swords", "The Freewheelin\' Bob Dylan", "Mozart: Piano Sonatas", "Hi, How Are You"]';
console.log(search(testString,collection));

//make sure that not finding anything returns an empty array
console.log(search('AND artist: ["notABand"]', collection));
console.log(search('AND year: [1900]', collection) );
console.log(search('AND album: ["worstAlbumEver"]', collection));

//make sure I can search only by artist, only by album, only by year
console.log(search('AND artist: ["Bob Dylan"]', collection));
console.log(search('AND artist: ["Arcade Fire", "Mitski"]', collection));
console.log(search('AND year: [2000]', collection));
console.log(search('AND year: [1960-1965, 1973, 2015-2020]', collection));
console.log(search('AND album: ["The Freewheelin\' Bob Dylan"]', collection));
console.log(search('AND album: ["Disney\'s Robin Hood Soundtrack", "Nighthawks at the Diner", "Horses"]', collection));

//make sure I can search by two search criteria and make sure order doesn't matter
console.log(search('AND artist: ["Arcade Fire", "Mitski"] year: [2018]', collection));
console.log(search('AND year: [2012] artist: ["Arcade Fire", "Mitski", "Swans"]', collection));
console.log(search('AND album: ["Deltron 3030"] year: [2020]', collection));
console.log(search('AND album: ["Deltron 3030"] year: [2000]', collection));
console.log(search('AND artist: ["Arcade Fire", "Mitski"] album: ["Be The Cowboy"]', collection));

console.log(search('AND artist: [" Bob DyLaN  "] year: [1960-1970]', collection));
