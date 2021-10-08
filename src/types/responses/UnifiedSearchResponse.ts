import type { Album } from '../Album';
import type { Artist } from '../Artist';
import type { Playlist } from '../Playlist';
import type { Track } from '../Track';

export interface UnifiedSearchResponse {
  albums: Album[];
  artists: Artist[];
  tracks: Track[];
  playlists: Playlist[];
}
