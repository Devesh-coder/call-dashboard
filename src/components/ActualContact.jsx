function ActualContact({ name, time }) {
	return (
		<div className='contact'>
			<div className='image'></div>
			<div className='detail'>
				<p> {name} </p>
				<p> {time} </p>
			</div>
		</div>
	)
}
export default ActualContact
