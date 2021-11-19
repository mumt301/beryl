function queryArtist() {
    // Step 2: Parse the data submitted through the form, get the parameters from the URL (@name = 'artist')
    let params = (new URL(document.location)).searchParams;
    if (params.has('artist')) {
        let artistName = params.get('artist');
        console.log(artistName);
        // Step 3: Craft the MusicBrainz call/message for requesting information about the artist
        let mbBaseURL = "https://musicbrainz.org/ws/2/";
        let mbResource = "artist?query=";
        let queryURL = mbBaseURL + mbResource + artistName;
        console.log(queryURL);
        // Step 4–6
        httpGet(queryURL, getMBID);
    }
}

/*
    Auxiliary functions
    - httpGet, function for executing the XMLHttpRequest object
    - callback functions (for each AJAX task)
*/

// Step 4: Make the HTTP request call to MusicBrainz
function httpGet(theURL, cbFunction) {
    let xmlHttp = new XMLHttpRequest(); // Creates a new XMLHttpRequest object
    xmlHttp.open("GET", theURL); // Specifies the request method and URL of the request
    xmlHttp.send(); // Sends the request to the server
    // Callback function
    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            cbFunction(this);
        }
    };
}

function getMBID(xhttp) {
    let retrievedData = xhttp.responseXML;
    console.log(retrievedData);
    // Step 5: Parse the response from the server
    let artistData = retrievedData.getElementsByTagName('artist')[0];
    console.log(artistData);
    let artistName = artistData.getElementsByTagName('name')[0].innerHTML;
    console.log(artistName);
    let artistMBID = artistData.id;
    console.log(artistMBID);
    let mBaseURL = "https://musicbrainz.org/ws/2/release-group?artist="; // Defining a new base URL
    let queryURL = mBaseURL + artistMBID;
    console.log(queryURL);
    httpGet(queryURL, getAlbums)
}

// Function to get artist's discography
function getAlbums(xhttp) {
    let retrievedData = xhttp.responseXML;
    console.log(retrievedData);
    var discography = []; // Creating a variable to store artist's discography
    let albums=retrievedData.getElementsByTagName('release-group');
    // For loop to add data into discography variable (adding album only, not all released-groups)
    for (var i = albums.length - 1; i >=0; i--) {
        let type=albums[i].getAttribute('type');
        console.log(type);
        if(type=='Album') {
            discography.push(albums[i]);
        }
    }
    // Creating a new variable with sorted discography data by date (oldest to newest)
    sortedDisco=discography.sort((a,b)=>new Date(a.getElementsByTagName('first-release-date')[0].innerHTML) - new Date(b.getElementsByTagName('first-release-date')[0].innerHTML));
    displayTable(sortedDisco);
}

// Function to display discography data in a table
function displayTable(discography) {
    // Creating a table tag
    let table = document.createElement('table');
    table.id = 'table';
    // Creating table row and table data tags 
    tr = document.createElement('tr');
    td1 = document.createElement('td');
    td2 = document.createElement('td');
    // Adding data (table headers) inside respective elements
    td1.innerHTML = "<b>Album Name<b>";
    td2.innerHTML = "<b>Date of Release<b>";
    // Appending data to its respective rows and table
    tr.appendChild(td1);
    tr.appendChild(td2);
    table.appendChild(tr);
    
    // For loop to add album title/name and release date to table
    for (row = 0; row < discography.length; row++) {
        tr = document.createElement('tr');
        td1 = document.createElement('td');
        td2 = document.createElement('td');
        td1.innerHTML = discography[row].getElementsByTagName('title')[0].innerHTML;
        td2.innerHTML = discography[row].getElementsByTagName('first-release-date')[0].innerHTML;
        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
    }
    
    // Appending the table to the divider with id='table'
    document.getElementById('table').appendChild(table);
    }

// Calling the main function at loading
window.onload = queryArtist;
