import AllCalls from './AllCalls'
import CallsFilter from './CallsFilter'
import Contacts from './Contacts'
import Header from './Header'

function Calls() {
	return (
		<>
			<Header />
			<div className='call-flex'>
				<CallsFilter />
				<AllCalls />
				<Contacts />
			</div>
		</>
	)
}
export default Calls
