function Filters({ topic, placeholder }) {
	return (
		<div className='filter'>
			<h4> {topic} </h4>
			<input type='text' placeholder={placeholder} />
			<button style={{ cursor: 'pointer' }}>+</button>
		</div>
	)
}
export default Filters
