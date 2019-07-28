import React from "react";
import { connect } from "react-redux";
import {getAlbums } from "../services";
import Photo from "./photo";

const AlbumView = ({albumDetail}) => (
 <div style={{display: "inline-block"}}>
 <h3>{albumDetail.title}</h3>
 <div>
 {albumDetail.photos.map((photo, index) => <Photo key={index} photoInfo={photo}/>)}
 </div>
 </div>
 );


class Albums extends React.Component {
    componentDidMount() {
        this.props.fetchAlbumsDetails(1);
    }
    render() {
        return (
            <>
            {this.props.albumsDetails.map((albumDetail, index) => <AlbumView key={index} albumDetail={albumDetail}/>)}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    albumsDetails: state.albums
});

const mapDispatchToProps = (dispatch) => ({
    fetchAlbumsDetails: (userId) => dispatch(getAlbums(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Albums);