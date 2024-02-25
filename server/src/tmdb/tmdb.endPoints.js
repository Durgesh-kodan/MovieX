import tmdbConfig from "./tmdb.config.js";

const tmdbEndpoints = {
  MediaList: ({ mediaType, mediaCategory, page }) => tmdbConfig.getURl(
    `${mediaType}/${mediaCategory}` , page
  ),
  mediaDetail:({mediaType,mediaId}) => tmdbConfig.getURl(
    `${mediaType}/${mediaId}`
  ),
  mediaGenres:({mediaType})=> tmdbConfig.getURl(
    `genre/${mediaGenre}/list`
  ),
  mediaCredits:({mediaType,mediaId}) => tmdbConfig.getURl(
    `${mediaType}/${mediaId}/credits`
  ),
  mediaVideos:({mediaType,mediaId}) => tmdbConfig.getURl(
    `${mediaType}/${mediaId}/videos`
  ),
  mediaRecommend:({mediaType,mediaId}) => tmdbConfig.getURl(
    `${mediaType}/${mediaId}/recommendations`
  ),
  mediaImages:({mediaType,mediaId}) => tmdbConfig.getURl(
    `${mediaType}/${mediaId}/Images`
  ),
  mediaSearch:({mediaType,query , page}) => tmdbConfig.getURl(
    `Search/${mediaType}`,{query,page}
  ),
  personDetail:({personId})=> tmdbConfig.getURl(
    `person${personId}`
  ),
  personMedias:({personId})=> tmdbConfig.getURl(
    `person${personId}/combined_credits`
  ),
};

export default { tmdbEndpoints };
