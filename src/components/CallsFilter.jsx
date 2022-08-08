import Filters from './Filters'

function CallsFilter() {
	return (
		<div className='filterContainer'>
			<h1>Calls</h1>
			<h3 className='topic'>Filter</h3>

			<Filters
				topic={'CALL PARTICIPANTS'}
				placeholder={'Search for team members'}
			/>
			<Filters topic={'COMPANY NAME'} placeholder={'Type for Search'} />
			<Filters topic={'WORDS'} placeholder={'Search for words'} />
			<Filters topic={'TRACKERS'} placeholder={'Select'} />
			<Filters topic={'SMART TRACKERS'} placeholder={'Select'} />
		</div>
	)
}
export default CallsFilter
