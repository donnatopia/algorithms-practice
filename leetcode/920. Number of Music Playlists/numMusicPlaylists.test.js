const numMusicPlaylists = require('./numMusicPlaylists');

xdescribe('920. Number of Music Playlists', () => {

  it('should return the number of possible playlists that you can create', () => {
    expect(numMusicPlaylists(3, 3, 1)).toBe(6);
    expect(numMusicPlaylists(2, 3, 0)).toBe(6);
    expect(numMusicPlaylists(2, 3, 1)).toBe(2);
  });

});