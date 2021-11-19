function queryArtist() {
    // Step 2: Parse the data submitted through the form 
    // In other words, get the parameters from the URL (@name = 'artist')let params = (new URL(document.location)).searchParams;
    let params = (new URL(document.location)).searchParams;
    if (params.has('artist')) {
        let artistName = params.get('artist');
        console.log(artistName);
        
        // Step 3: Craft the MusicBrainz call/message for requesting information about the artist
        // GET request --> type 'search'
        let mbBaseURL = "https://musicbrainz.org/ws/2/";
        let mbResource = "artist?query=";
        let queryURL = mbBaseURL + mbResource + artistName;
        console.log(queryURL);
        
        // Step 4–6
        httpGet(queryURL, getMBID);
        // Step 4: Make the HTTP request call to MusicBrainz and wait for its response
        // When the response is ready, it will use the callback function getMBID().
        // getMBID() will perform steps 5 and 6, parsing the response of the server
        // and rendering the results in the browser.
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
    
    // Specify the request method and URL of the request, and send the request to the server
    xmlHttp.open("GET", theURL);
    xmlHttp.send();
    
    // Wait for the response to be ready and store it in a variable
    xmlHttp.onreadystatechange = function () {
        // Define a function to be called when the readyState property changes
        if (this.readyState == 4 && this.status == 200) {
            // when readyState is 4 and status is 200, the response is ready
            // Then, we call the callback function to parse the response and render the appropriate results
            cbFunction(this);
        }
    };
}

function getMBID(xhttp) {
    let retrievedData = xhttp.responseXML; // Returns the response as XML data
    console.log(retrievedData);
    
    // Step 5: Parse the response from the server
    let artistData = retrievedData.getElementsByTagName('artist')[0];
    console.log(artistData);
    let artistName = artistData.getElementsByTagName('name')[0].innerHTML;
    console.log(artistName);
    let artistMBID = artistData.id;
    console.log(artistMBID);
    let mBaseURL = "https://musicbrainz.org/ws/2/release-group?artist=";
    let queryURL = mBaseURL + artistMBID;
    console.log(queryURL);
    httpGet(queryURL, getAlbums)
}

function getAlbums(xhttp) {
    let retrievedData = xhttp.responseXML; // Returns the response as XML data
    console.log(retrievedData);
    var albums = [];
    let discography=retrievedData.getElementsByTagName('release-group');
    // get album only, not all released-groups
    for (var i = discography.length - 1; i >=0; i--) {
        let type=discography[i].getAttribute('type');
        console.log(type);
        if(type=='Album') {
            albums.push(discography[i]);
        }
    }
    sortedAlbums=albums.sort((a,b)=>new Date(a.getElementsByTagName('first-release-date')[0].innerHTML) - new Date(b.getElementsByTagName('first-release-date')[0].innerHTML));
    displayTable(sortedAlbums);
    //console.log(sortedAlbums);

}

function displayTable(albums) {
    let table = document.createElement('table');
    table.id = 'table';
    tr = document.createElement('tr');
    td1 = document.createElement('td');
    td2 = document.createElement('td');
    tr.appendChild(td1);
    td1.innerHTML = "<b>Album Name<b>";
    tr.appendChild(td2);
    td2.innerHTML = "<b>Date of Release<b>";
    table.appendChild(tr);
    
    for (row = 0; row < albums.length; row++) {
        tr = document.createElement('tr');
        td1 = document.createElement('td');
        tr.appendChild(td1);
        td1.innerHTML = albums[row].getElementsByTagName('title')[0].innerHTML;
        td2 = document.createElement('td');
        tr.appendChild(td2);
        td2.innerHTML = albums[row].getElementsByTagName('first-release-date')[0].innerHTML;
        table.appendChild(tr);
    }
    
    document.getElementById('table').appendChild(table);
    }

// Call to the main function at loading
window.onload = queryArtist;