import type { Album } from './Album';
import type { Image } from './Image';
import type { Track } from './Track';

export interface Artist {
  id: string;
  name: string;
  picture: Image;
  albums?: Album[];
  topTracks?: Track[];
  library: boolean | null;
}
