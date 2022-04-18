/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react'

export const TodoToggle = ({
	toggleDone,
	toggleSelected,
}: {
	toggleDone: () => void
	toggleSelected: () => void
}) => {
	const [clicked, setClicked] = useState(false)
	const handleClick = () => {
		setClicked(!clicked)
		toggleDone()
	}

	const clickedStyles =
		'dark:bg-[#183588] bg-[#849de2] dark:border-[#183588] border-[#849de2] before:content-[""] before:inline-block before:absolute before:top-0.5 before:left-2 before:rotate-45 before:h-3 before:w-1 before:border-b-2 before:border-b-white before:border-r-2 before:border-r-white transition-all'

	return (
		<button
			type='button'
			onFocus={toggleSelected}
			onBlur={toggleSelected}
			onClick={handleClick}
			className={`relative inline-block mx-3 w-6 h-6 rounded-full border-2 border-normalPriority outline-none ${
				clicked ? clickedStyles : ''
			}`}
		/>
	)
}
