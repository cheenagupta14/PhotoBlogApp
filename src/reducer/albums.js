import {GET_USER_ALBUMS_SUCCESS} from "../actions/albums";

const userAlbumssInitState = [
    {
       id:"",
       title: "",
       photos: [{
        title: "",
        url: "",
        thumbnailUrl: ""
       }
       ]
    }
]

const AlbumsReducer = (state = userAlbumssInitState,action) => {
    switch(action.type){
        case GET_USER_ALBUMS_SUCCESS: {
            const albums = action.albums;
            const photos = action.photos;
            // map comments to posts
            albums.map((album) => {
               const photosInAlbum = photos.filter((photo) => photo.albumId === album.id);
               album["photos"] = photosInAlbum;
               return {...album}
            });
            return action.albums;
        }
        default:
            return state;
    }
}

export default AlbumsReducer;