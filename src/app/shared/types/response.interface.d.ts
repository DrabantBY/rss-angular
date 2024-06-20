interface ThumbnailInterface {
  url: string;
  width: number;
  height: number;
}

interface ThumbnailsInterface {
  default: ThumbnailInterface;
  medium: ThumbnailInterface;
  high: ThumbnailInterface;
  standard: ThumbnailInterface;
  maxres: ThumbnailInterface;
}

interface StatisticsInterface {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

interface PageInfoInterface {
  totalResults: number;
  resultsPerPage: number;
}

export interface ResponseItemInterface {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: ThumbnailsInterface;
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
  statistics: StatisticsInterface;
}

export interface ResponseInterface {
  TODO: string;
  kind: string;
  etag: string;
  pageInfo: PageInfoInterface;
  items: ResponseItemInterface[];
}
