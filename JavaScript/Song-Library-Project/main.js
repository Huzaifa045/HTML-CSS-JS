// My Songs Basic

// HTML Elements
let goBtnEl = document.getElementById('go-btn');
let menuEl = document.getElementById('menu');
let outputEl = document.getElementById('output');

// Array of Songs

let songs = [
  {
    "name": "Circo Loco",
    "artist": "Drake",
    "album": "Her Loss",
    "genre": "Rap",
    "length": 3,
  },

  {
    "name": "One Up",
    "artist": "Central Cee",
    "album": "N/A",
    "genre": "Rap",
    "length": 4.3
  },

  {
    "name": "Lose Yourself",
    "artist": "Eminem",
    "album": "N/A",
    "genre": "Rap",
    "length": 3.2
  },

  {
    "name": "Major Distribution",
    "artist": "Drake",
    "album": "Her Loss",
    "genre": "Rap",
    "length": 2.2
  },
  {
    "name": "Rich Flex",
    "artist": "Drake",
    "album": "Her Loss",
    "genre": "Rap",
    "length": 1.5
  },
  {
    "name": "Hours in Silence",
    "artist": "Drake",
    "album": "Her Loss",
    "genre": "Rap",
    "length": 6.6
  },
  {
    "name": "Treacherous Twins",
    "artist": "Drake",
    "album": "Her Loss",
    "genre": "Rap",
    "length": 3.0
  },
  {
    "name": "Middle of the Ocean",
    "artist": "Drake",
    "album": "Her Loss",
    "genre": "Rap",
    "length": 5.96
  },
  {
    "name": "Never Gonna Give You Up",
    "artist": "Rick Astley",
    "album": "N/A",
    "genre": "Pop",
    "length": 3.33
  },
];

// Go Btn - Menu Listener
goBtnEl.addEventListener('click', goBtnHandler);

function goBtnHandler() {
  // Get Menu Selection
  let selection = menuEl.value;

  if (selection === 'display-all') {
    displaySongs();
  } else if (selection === 'add') {
    addSong();
  } else if (selection === 'remove') {
    removeSong();
  } else if (selection === 'display-name') {
    displayByName();
  } else if (selection === 'display-artist') {
    displayByArtist();
  } else if (selection === 'display-genre') {
    displayByGenre();    
  } else if (selection === 'display-album') {
    displayByAlbum();
  } else if (selection === 'length') {
    lengthThreePlus();
  }
}

// MENU FUNCTIONS
function displaySongs() {
  for (i= 0; i < songs.length ; i++) {
    outputEl.innerHTML += `<h4>${songs[i].name} - ${songs[i].artist} - ${songs[i].album}<br><h4>`;
  }
}

function addSong() {
  let name = prompt("Enter the name of a song");
  let artist = prompt("Please name the artist of that song");
  let album = prompt("Please enter the album from which the song belongs");
  let genre = prompt("Please enter the song genre");
  let length = prompt("Enter the length of the song.")
  let description = {'name': name, 'artist': artist, 'album': album, 'genre':genre, 'length':length}
  songs.push(description);
  for (let i = 0; i < songs.length; i++){
  outputEl.innerHTML = `New Song Added: <br> ${i}: ${name}`
  }
}

function removeSong() {
  let index = +prompt("Enter the number of the song you want to remove:");
  if (index >= 0 && index < songs.length) {
    songs.splice(index, 1);
    displayContacts();
  } else {
    alert("That is not a contact number");
  }
  console.log('Remove Song');
}

function displayByName() {
  let name = prompt("Enter the name of the song you want to display:");
  for (i= 0; i < songs.length ; i++) {
    if (songs[i].name === name) {
      outputEl.innerHTML += `<h4>${songs[i].name} - ${songs[i].artist} - ${songs[i].album}<br><h4>`;
    }
  }
}

function displayByArtist() {
  let artist = prompt("Enter the artist of the song you want to display:");
  for (i= 0; i < songs.length ; i++) {
    if (songs[i].artist === artist) {
      outputEl.innerHTML += `<h4>${songs[i].name} - ${songs[i].artist} - ${songs[i].album}<br><h4>`;
    }
  }
}

function displayByGenre() {
  let genre = prompt("Enter the genre of the song you want to display:");
  for (i= 0; i < songs.length ; i++) {
    if (songs[i].genre === genre) {
      outputEl.innerHTML += `<h4>${songs[i].name} - ${songs[i].artist} - ${songs[i].album}<br><h4>`;
    }
  }
}

function displayByAlbum() {
  let album = prompt("Enter the album of the song you want to display:");
  for (i= 0; i < songs.length ; i++) {
    if (songs[i].album === album) {
      outputEl.innerHTML += `<h4>${songs[i].name} - ${songs[i].artist} - ${songs[i].album}<br><h4>`;
    }
  }
}

function lengthThreePlus() {
  for (i= 0; i < songs.length ; i++) {
    if (songs[i].length > 3) {
      outputEl.innerHTML += `<h4>${songs[i].name} - ${songs[i].artist} - ${songs[i].album} - ${songs[i].length}<br><h4>`;
    }
  }
}



