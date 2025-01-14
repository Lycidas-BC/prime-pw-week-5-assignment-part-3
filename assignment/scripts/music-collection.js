console.log('***** Music Collection *****')

let collection = [];

//function to add records into collection
function addToCollection(artist, title, yearPublished, tracks){
  //create record object with input properties
  let record = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: {}
  } //end object record
  // populate tracks object
  for (let track in tracks) {
    record.tracks['track_'+track] = {
      name: tracks[track][0],
      duration: tracks[track][1]
    }
  }
  //push newly created record onto collection array
  collection.push(record);

  //return new records
  return record;
} //end function addToCollection

//test function:
console.log("Initial collection", collection);
//console.log(`addToCollection(Tom Waits, Nighthawks at the Diner, 1975): ${addToCollection("Tom Waits", "Nighthawks at the Diner", 1975)}`);
//console.log("Add to collection: Tom Waits, Nighthawks at the Diner, 1975", addToCollection("Tom Waits", "Nighthawks at the Diner", 1975));

addToCollection("Tom Waits", "Nighthawks at the Diner", 1975);

let tracks = [
  ["My Sweet Lord / Today Is A Killer", "18:35"],
  ["Poppies", "4:45"],
  ["Isn't It A Pity", "11:11"]
]
addToCollection("Nina Simone", "Emergency Ward", 1972,tracks);

tracks = [
  ["Jesus Alone", "5:52"],
  ["Rings of Saturn", "3:28"],
  ["Girl in Amber", "4:51"],
  ["Magneto", "5:22"],
  ["Anthrocene", "4:34"],
  ["I Need You", "5:58"],
  ["Distant Sky", "5:36"],
  ["Skeleton Tree", "4:01"]
]
addToCollection("Nick Cave & the Bad Seeds", "Skeleton Tree", 2016, tracks);

addToCollection("Robert Johnson", "King of the Delta Blues Singers", 1961);

addToCollection("Swans", "The Seer", 2012);

console.log("Updated collection (6 records)", collection);

tracks = [
  ["Blowin' in the Wind", "2:48"],
  ["Girl from the North Country", "3:22"],
  ["Masters of War", "4:34"],
  ["Down the Highway", "3:27"],
  ["Bob Dylan's Blues", "2:23"],
  ["A Hard Rain's a-Gonna Fall", "6:55"],
  ["Don't Think Twice, It's All Right", "3:40"],
  ["Bob Dylan's Dream", "5:03"],
  ["Oxford Town", "1:50"],
  ["Talkin' World War III Blues", "6:28"],
  ["Corrina, Corrina", "2:44"],
  ["Honey, Just Allow Me One More Chance", "2:01"],
  ["I Shall Be Free", "4:40"]
]
addToCollection("Bob Dylan", "The Freewheelin' Bob Dylan", 1963, tracks);

addToCollection("Bob Dylan", "Highway 61 Revisited", 1965);


addToCollection("Bob Dylan", "Blood on the Tracks", 1975);

addToCollection("Bob Dylan", "Rough and Rowdy Ways", 2020);

addToCollection("Patti Smith", "Horses", 1963);

addToCollection("Mitski", "Be The Cowboy", 2018);

addToCollection("Arcade Fire", "The Suburbs", 2010);
tracks = [
  ["Liquid Swords","4:31"],
  ["Duel of the Iron Mic","4:06"],
  ["Living in the World Today","4:23"],
  ["Gold","3:57"],
  ["Cold World","5:31"],
  ["Labels","2:54"],
  ["4th Chamber","4:37"],
  ["Shadowboxin'","3:30"],
  ["Hell's Wind Staff / Killah Hills 10304","5:09"],
  ["Investigative Reports","3:50"],
  ["Swordsman","3:21"],
  ["I Gotcha Back","5:01"],
  ["B.I.B.L.E.","4:33"]
]
addToCollection("GZA", "Liquid Swords", 1995,tracks);

addToCollection("Deltron 3030", "Deltron 3030", 2000);

addToCollection("Harry Nilsson", "Nilsson Schmilsson", 1971);

addToCollection("Daniel Johnston", "Hi, How Are You?", 1983);

addToCollection("Allen Toussaint", "The Bright Mississippi", 2009);

addToCollection("Mississippi John Hurt", "Today!", 1966);

addToCollection("Mitsuko Uchida", "Mozart: Piano Sonatas", 2003);

addToCollection("Blind Willie Johnson", "The Complete Blind Willie Johnson", 2007);

console.log("Updated collection", collection);

// print collection array
function showCollection(collection){
  //log array length
  console.log(collection.length);

  //loop over array elements, formatting and printing each object
  for (let record of collection){
    console.log(`${record.title} by ${record.artist}, published in ${record.yearPublished}`);
    let trackNum = 1;
    for (let track of Object.values(record.tracks)){
      console.log(`${trackNum}. ${track.name}: ${track.duration}`);
      trackNum += 1;
    }
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
function whichArrayElement (mainIndex, otherIndex1, otherIndex2, otherIndex3, array){
  //if main index is bigger than the others, it's in searchArray[2]; if smaller, it's in searchArray[0]; else it's in searchArray[1]
  return mainIndex > otherIndex1 && mainIndex > otherIndex2 ? array[2] :
  mainIndex < otherIndex1 && mainIndex < otherIndex2 ? array[0] : array[1];
} //end whichArrayElement

//searchCriteria string format : AND artist: ["artist1","artist2"] year: [year1-year2, year3] album: ["album1", "album2"] track: ["track1", "track2"]
function parseSearchString (searchString) {
  //separate search strings by category
  let searchArray = [];
  let artistIndex = searchString.toLowerCase().indexOf("artist:");
  let albumIndex = searchString.toLowerCase().indexOf("album:");
  let yearIndex = searchString.toLowerCase().indexOf("year:");
  let trackIndex = searchString.toLowerCase().indexOf("track:");

  //if there's an artist search constraint, push it into search array; else, push an empty string
  if (artistIndex >= 0) {
    searchArray.push(searchString.toLowerCase().substring(searchString.indexOf("[",artistIndex)+1,searchString.indexOf("]",artistIndex)));
  } else {
    searchArray.push("");
  }

  //if there's an album search constraint, push it into search array; else, push an empty string
  if (albumIndex >= 0) {
    searchArray.push(searchString.toLowerCase().substring(searchString.indexOf("[",albumIndex)+1,searchString.indexOf("]",albumIndex)));
  } else {
    searchArray.push("");
  }

  //if there's a year search constraint, push it into search array; else, push an empty string
  if (yearIndex >= 0) {
    searchArray.push(searchString.toLowerCase().substring(searchString.indexOf("[",yearIndex)+1,searchString.indexOf("]",yearIndex)));
  } else {
    searchArray.push("");
  }

  //if there's an track search constraint, push it into search array; else, push an empty string
  if (trackIndex >= 0) {
    searchArray.push(searchString.toLowerCase().substring(searchString.indexOf("[",trackIndex)+1,searchString.indexOf("]",trackIndex)));
  } else {
    searchArray.push("");
  }

  return searchArray;
} //end parseSearchString

//search collection for all results that match searchCriteria
//searchCriteria should have format: AND artist: ["artist1","artist2"] year: [year1-year2, year3] album: ["album1", "album2"] track: ["track1", "track2"]
//default behavior is to OR between categories; if user specifies AND by putting it at beginning of string, categories will be ANDed.
//formatting is strict: without [] around search lists and "" individual artists, albums, or tracks that search crterion will be ignored
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
  let tracks = [];
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
  for (let splitString of searchArray[2].split("\,")){
    if (splitString.indexOf("-") >= 0) {
      for (let num = Number(splitString.slice(0,splitString.indexOf("-")).trim()); num <= Number(splitString.slice(splitString.indexOf("-")+1,splitString.length).trim()); num++) {
        years.push(num);
      }
    } else {
      years.push(Number(splitString.trim()));
    }
  }
  // if there's no year constraint, the above results in [0]. I just want an empty array.
  if (years[0] == 0){
    years.shift();
  }

  //populate tracks array
  counter = 0;
  for (let splitString of searchArray[3].split("\"")){
    if (counter%2 == 1) {
      tracks.push(splitString);
    }
    counter += 1;
  }

//search through collection one record at a time, comparing it to artists, albums, years, and tracks in search criteria
  if ( andConstraints ){
    for (let record of collection) {
      // if there's no constraint on a category, default to true so we allow anything true
      // if there is some constraint, default to false
      let artistMatch = artists.length == 0;
      let albumMatch = albums.length == 0;
      let yearMatch = years.length == 0;
      let trackMatch = tracks.length == 0;

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
      for (let trackOnRecord of Object.values(record.tracks)){
        for (let trackSearch of tracks) {
          if (sanitizeAndCompare(trackOnRecord.name, trackSearch)) {
            trackMatch = true;
          }
        }
      }
      if (artistMatch && albumMatch && yearMatch && trackMatch) {
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
      for (let trackOnRecord of Object.values(record.tracks)){
        for (let trackSearch of tracks) {
          if (sanitizeAndCompare(trackOnRecord.name, trackSearch)) {
            addRecord = true;
          }
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
let testString = 'track: ["Poppies"] artist: ["Bob Dylan", "GZA", "Nick Cave & the Bad Seeds"] year: [1960-1969, 1995] album: ["Liquid Swords", "The Freewheelin\' Bob Dylan", "Mozart: Piano Sonatas", "Hi, How Are You?"]';
let parseString = parseSearchString(testString);
console.log(testString, parseString);
showCollection(search(testString, collection));

//make sure that no search criteria just returns the whole collection
showCollection(search('', collection));

//make sure that not finding anything returns an empty array
showCollection(search('artist: ["notABand"]', collection));
showCollection(search('year: [1900]', collection) );
showCollection(search('album: ["worstAlbumEver"]', collection));
showCollection(search('track: ["nothingnothingnothing"]', collection));
showCollection(search('asdf', collection));

//make sure I can search only by artist, only by album, only by year
showCollection(search('artist: ["Bob Dylan"]', collection));
showCollection(search('artist: ["Arcade Fire", "Mitski"]', collection));
showCollection(search('year: [2000]', collection));
showCollection(search('year: [1960-1965, 1975, 2015-2020]', collection));
showCollection(search('album: ["The Freewheelin\' Bob Dylan"]', collection));
showCollection(search('album: ["Nighthawks at the Diner", "Horses"]', collection));

//make sure I can search by two search criteria and make sure order doesn't matter
showCollection(search('artist: ["Arcade Fire", "Mitski"] year: [2000]', collection));
showCollection(search('year: [2000] artist: ["Arcade Fire", "Mitski"]', collection));
showCollection(search('album: ["Deltron 3030"] year: [2020]', collection));
showCollection(search('year: [2020] album: ["Deltron 3030"]', collection));
showCollection(search('artist: ["Arcade Fire", "Mitski"] album: ["Deltron 3030"]', collection));
showCollection(search('AND artist: ["Bob Dylan", "GZA"] track: ["Duel of the Iron Mic", "I Shall Be Free"]', collection));

// REPEAT ABOVE QUERIES WITH AND CONSTRAINT
// search for multiple artists, albums, and years; try to include ones with weird characters like , and : and ' and &, just to make sure they don't break function
testString = 'AND artist: ["Bob Dylan", "GZA", "Nick Cave & the Bad Seeds"] year: [1960-1969, 1995] album: ["Liquid Swords", "The Freewheelin\' Bob Dylan", "Mozart: Piano Sonatas", "Hi, How Are You?"]';
showCollection(search(testString,collection));

//make sure that not finding anything returns an empty array
showCollection(search('AND artist: ["notABand"]', collection));
showCollection(search('AND year: [1900]', collection) );
showCollection(search('AND album: ["worstAlbumEver"]', collection));

//make sure I can search only by artist, only by album, only by year
showCollection(search('AND artist: ["Bob Dylan"]', collection));
showCollection(search('AND artist: ["Arcade Fire", "Mitski"]', collection));
showCollection(search('AND year: [2000]', collection));
showCollection(search('AND year: [1960-1965, 1975, 2015-2020]', collection));
showCollection(search('AND album: ["The Freewheelin\' Bob Dylan"]', collection));
showCollection(search('AND album: ["Nighthawks at the Diner", "Horses"]', collection));

//make sure I can search by two search criteria and make sure order doesn't matter
showCollection(search('AND artist: ["Arcade Fire", "Mitski"] year: [2018]', collection));
showCollection(search('AND year: [2012] artist: ["Arcade Fire", "Mitski", "Swans"]', collection));
showCollection(search('AND album: ["Deltron 3030"] year: [2020]', collection));
showCollection(search('AND album: ["Deltron 3030"] year: [2000]', collection));
showCollection(search('AND artist: ["Arcade Fire", "Mitski"] album: ["Be The Cowboy"]', collection));
showCollection(search('AND artist: [" Bob DyLaN  "] year: [1960-1970]', collection));
showCollection(search('AND track: ["Oxford Town"]', collection));
