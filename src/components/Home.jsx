import Header from './Header'
import DateSlide from './DateSlide'
import InteractionStatus from './InteractionStatus'
import GroupChat from './GroupChat'
import image from '../callAttendent.png'

function Home() {
	return (
		<>
			<Header />
			<DateSlide />
			<div className='content'>
				<InteractionStatus />
				<img className='call-image' src={image} alt='image' />
				<GroupChat />
			</div>
		</>
	)
}
export default Home
