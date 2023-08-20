import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'
import styles from 'styles/home.module.css'
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import PostBody from 'components/post-body'
import Image from 'next/image'
import home from 'images/home.jpg'

function Home() {
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
		<Container>
			<Meta pageTitle="ごはん" />

		<figure>
			<Image
				src={home} alt="" layout="responsive" sizes="(min-width: 1152px, 100vw" />
		</figure>


			<Hero
				title="献立"/>

		<PostBody>
			<h2>今日のごはんどうしよう？</h2>
			<p>日々を生活する中でごはんは必ず食べるものです。しかし、毎日ごはんを食べると何を食べようか、何が今食べたいのか、献立に迷いがでてきます。そんなとき、カテゴリーごとに表示してくれるサービスがあれば少しでもごはん選びが楽になると思います！</p>
			<h2>今日のごはんをさがしてみよう！カテゴリーごとにレシピがでてきます！</h2>
			<div className={styles.flexContainer}>
				<div className={styles.button}>
					<span onClick={activateLasers}>
      			<a target="_blank" href={data.categoryUrl}>ごはんをさがす</a>
    			</span>
				</div>
			</div>
		</PostBody>

		</Container>
	)
}

export default Home
