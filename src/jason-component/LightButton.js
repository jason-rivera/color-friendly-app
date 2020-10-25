import React from 'react'

const LightButton = ({name, isFriendly}) => {

	if(isFriendly){
	  return (
	    <div>
	      <button type="button" class="btn btn-light">{name}</button>
	    </div>
	  )
	}else{
		return (
	    <div>
	      <button type="button" class="btn btn-dark">{name}</button>
	    </div>
	  )
	}

}

export default LightButton
