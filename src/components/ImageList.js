import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';


const ImageList = ({images}) => {
	const imageurl = images.map( image =>{
		return(<ImageCard  key = { image.id }  image = {image} />);
	});
	return(
		<div className = 'image-list' >{imageurl}</div>
	);
}




export default ImageList;