import { FaSearch, FaCaretDown } from 'react-icons/fa'
import ActualContact from './ActualContact'

function Contacts() {
	return (
		<div className='contacts-container'>
			<div className='contacts-title'>Contacts</div>
			<div className='contact-placing'>
				<label htmlFor='search'>
					<FaSearch className='search-logo-contact' />
				</label>
				<input
					className='input-chat'
					id='search'
					type='text'
					placeholder='Find Contact'
					style={{ width: '170px', color: 'grey', marginRight: '80px' }}
				/>

				<div className='sort-by'>
					Sort By <FaCaretDown style={{ cursor: 'pointer' }} />
				</div>
			</div>
			<ActualContact name={'ABC'} time={'a minute ago'} />
			<ActualContact name={'ABC'} time={'8 hours ago'} />
			<ActualContact name={'ABC'} time={'a hour ago'} />
			<ActualContact name={'ABC'} time={'5 minutes ago'} />
			<ActualContact name={'ABC'} time={'30 minutes ago'} />
			<ActualContact name={'ABC'} time={'3 hours ago'} />
			<ActualContact name={'ABC'} time={'2 days ago'} />
			<ActualContact name={'ABC'} time={'5 days ago'} />
			<ActualContact name={'ABC'} time={'3 months ago'} />
		</div>
	)
}
export default Contacts
