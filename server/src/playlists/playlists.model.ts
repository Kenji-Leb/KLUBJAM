import { Prisma } from '@prisma/client';

export class Playlists implements Prisma.PlaylistsCreateInput {
  title: string;
  playlist_image: string;
  user: Prisma.UsersCreateNestedOneWithoutPlaylistsInput;
}
