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
		className={`fixed inset-0 -bottom-20 ${colorLight} ${colorDark} w-screen -z-10`}
	/>
)
