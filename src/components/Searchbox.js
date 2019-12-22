import React from 'react';

const Searchbox =({searchChange}) =>{
	return(
		<div className="pa2">
			<input className ="pa3 ba bg-lightest-blue b--green"
				type ="search" placeholder ="Search robots" onChange={searchChange} /> 
		</div>
	);
}

export default Searchbox;