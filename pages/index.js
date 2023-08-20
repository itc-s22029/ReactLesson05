import Meta from 'components/meta'
import Container from 'components/container'
import Hero from 'components/hero'

function Home() {
	return (
		<Container>
		<Meta pageTitle="ごはん" />

			<Hero
				title="献立"
				button1="ごはんを検索する"
		/>
		</Container>
	)
}
    
export default Home
