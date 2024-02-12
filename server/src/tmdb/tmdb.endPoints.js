import tmdbConfig from "./tmdb.config";

const tmdbEndpoints = {
  MediaList: ({ mediaType, mediaCategory, page }) => tmdbConfig.getURl(
    `${mediaType}/${mediaCategory}` , page
  ),
  mediaDetail:({mediaType,mediaId}) => tmdbConfig.getURl(
    `${mediaType}/${mediaId}`
  )
};

export default { tmdbEndpoints };
