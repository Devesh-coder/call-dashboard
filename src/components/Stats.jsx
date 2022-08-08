function Stats({ overView, stat, color, recommend }) {
	return (
		<div className='actual-stat'>
			<h4> {overView} </h4>
			<h4> {stat} </h4>
			<div className='recommendation'>
				<div className='color' style={{ backgroundColor: color }}></div>
				<p> {recommend} </p>
			</div>
			<div className='line'></div>
		</div>
	)
}
export default Stats
