/* Question 40: Album: Write a function called make_album() that builds a Object describing a music album.
                The function should take in an artist name and an album title, and it should return a Object
                containing these two pieces of information. Use the function to make three dictionaries representing
                different albums. Print each return value to show that Objects are storing the album information correctly.
                Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
                If the calling line includes a value for the number of tracks, add that value to the album’s Object.
                Make at least one new function call that includes the number of tracks on an album. */

type album = {
    artist : string,
    title : string,
    tracks? : number
}

function make_album(artist_name: string, title_name: string, num_tracks?: number) : album {
    let Album : album = { 
        artist : artist_name,
        title : title_name,
    }
    if (num_tracks !== undefined){
        Album.tracks = num_tracks
    }
    return Album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album"));

let Album_with_tracks = make_album("album4" , "fourth Album" , 43)
console.log(Album_with_tracks);

// output:

// { artist: 'Artist One', title: 'The First Album' }
// { artist: 'Artist Two', title: 'The Second Album' }
// { artist: 'Artist Three', title: 'The Third Album' }
// { artist: 'album4', title: 'fourth Album', tracks: 43 }