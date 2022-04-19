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
		className={`fixed top-0 left-0 ${colorLight} ${colorDark} w-screen h-screen -z-10 ${
			rounded ? 'animate-roundIn' : 'animate-roundOut'
		}`}
	/>
)
