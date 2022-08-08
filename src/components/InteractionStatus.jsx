import Stats from './Stats'
import { FaLightbulb } from 'react-icons/fa'

function InteractionStatus() {
	return (
		<div className='interaction-stats'>
			<h4 className='topic'>Interection Status</h4>
			<div className='tip'>
				<FaLightbulb className='bulb' />
				<div>1 tip for employee</div>
			</div>
			<Stats
				overView={'Talk Ratio'}
				stat={'11%'}
				recommend={'Within recommended Range'}
				color={'blue'}
			/>
			<Stats
				overView={'Longest Monologue'}
				stat={'2:09min'}
				recommend={'Within recommended Range'}
				color={'blue'}
			/>
			<Stats
				overView={'Longest Customer Story'}
				stat={'4:14min'}
				recommend={'Within recommended Range'}
				color={'blue'}
			/>
			<Stats
				overView={'Interactivity'}
				stat={'2.7'}
				recommend={'Below recommended range'}
				color={'orange'}
			/>
			<Stats
				overView={'Patience'}
				stat={'1.29secs'}
				recommend={'Within recommended Range'}
				color={'blue'}
			/>
		</div>
	)
}

export default InteractionStatus
