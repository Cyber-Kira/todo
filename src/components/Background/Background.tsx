import React from 'react'

export const Background = ({
	colorLight,
	colorDark,
}: {
	colorLight: string
	colorDark: string
}) => (
	<div className={`fixed inset-0 ${colorLight} ${colorDark} w-screen -z-10`} />
)
