import React from 'react';


const LightButton = ({name, isFriendly}) => {

	if(isFriendly){
	  return (
	    <div className="mt-3 mb-3">
	      <button type="button" class="btn btn-outline-dark">{name}</button>
	    </div>
	  )
	}else{
		return (
	    <div className="mt-3 mb-3">
	      <button type="button" class="btn btn-danger">{name}</button>
	    </div>
	  )
	}

}

export default LightButton
