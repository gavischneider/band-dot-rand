interface Artist {
  id: number;
  name: string;
  external_urls: any;
  images: any;
  albums: [];
  relatedArtists: [];
}

interface Album {
  id: string;
  name: string;
  release_date: number;
  href: string;
}

export type { Artist, Album };
