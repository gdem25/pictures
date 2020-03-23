import axios from 'axios';


export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID aa3a0584d61ae9bc1c87af7da9ce9f7be5a568c8858c7c5fd100a3566668e885'
	}
});