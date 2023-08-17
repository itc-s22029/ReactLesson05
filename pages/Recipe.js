import React, {useState,useEffect} from 'react';
import axios from 'axios';


const Top = () => {
        const [data, setData] = useState([]);
        const [isloading, setIsLoading] = useState(true);
        const [error, setError] = useState(null);
		
		

	const activateLasers = async() => {
		const baseURL = 'https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?applicationId=1064820932707466172';
		const num = Math.floor(Math.random() * 43)
		try {
			const posts = await axios.get(baseURL);
			setData(posts.data.result.large[num]);
			console.log(posts.data.result.large[num].categoryUrl);
			// console.log(num)
		} catch(error) {
			console.log(error);
		}
	}

	return (
		<button onClick={activateLasers}>
                        <a target="_blank" href={data.categoryUrl}>献立</a>
                </button>
	)
}


export default Top;

