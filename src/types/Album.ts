import type { Artist } from './Artist';
import type { Image } from './Image';
import type { Track } from './Track';

export interface Album {
  id: string;
  title: string;
  art: Image;
  tracks: Track[];
  artists: Artist[];
  explicit: boolean;
  type: string;
  artistString: string;
  library: boolean | null;
}
