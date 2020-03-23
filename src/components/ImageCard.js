import React from 'react';
import Zoom from 'react-reveal/Zoom';



class ImageCard extends React.Component {
	constructor(props) {
		super(props);

		this.state =  { spans: 0 };

		this.imageRef = React.createRef();
	}

	componentDidMount() {
		this.imageRef.current.addEventListener('load' , this.setSpans );
	}

	setSpans = () => {
		const height = this.imageRef.current.height;
		const spans = Math.ceil(height/10);
		this.setState({spans});
	}



	render() {
		const { description, urls  } = this.props.image;
		return(
			<Zoom  duration={1200} down>
				<div style = {{ gridRowEnd: `span ${this.state.spans}`, cursor: 'pointer' }} >
					<img ref={this.imageRef} alt = {description} src = {urls.regular}  />
				</div>
			</Zoom>
		);

	}
}



export default ImageCard;