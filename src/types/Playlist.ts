import type { Image } from './Image';
import type { Track } from './Track';
import type { User } from './User';

export interface Playlist {
  id: string;
  title: string;
  trackCount: number;
  image: Image;
  duration: number;
  user: User;
  tracks: Track[];
  library: boolean | null;
  type: 'public' | 'private';
}
