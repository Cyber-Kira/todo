import React from 'react'

export const Background = ({
	colorLight,
	colorDark,
	rounded,
}: {
	colorLight: string
	colorDark: string
	rounded?: boolean
}) => (
	<div
		className={`absolute top-0 left-0 bottom-0 ${colorLight} ${colorDark} w-screen -z-10 ${
			rounded ? 'animate-roundIn' : 'animate-roundOut'
		}`}
	/>
)
