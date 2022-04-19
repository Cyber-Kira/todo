module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				purpleLight: '#3450A1',
				purpleDark: '#041955',
				purpleBright: '#DF76FE',
				light: '#fffeff',
				lightDimmed: '#faf9ff',
				lightTextColor: '#262755',
				normalPriority: '#1857C0',
			},
			keyframes: {
				wiggle: {
					'0%': {
						transform: 'translate(0px)',
					},
					'20%': {
						transform: 'translate(5px)',
					},
					'40%': {
						transform: 'translate(0px)',
					},
					'70%': {
						color: 'inherit',
					},
					'100%': {
						color: 'rgb(100 116 139)',
					},
				},
				dimmed: {
					to: {
						backgroundColor: 'rgb(100 116 139)',
					},
				},
				slideIn: {
					'0%': {
						transform: 'translateX(0) scale(1)',
					},
					'100%': {
						transform: 'translateX(65%) scale(0.87)',
					},
				},
				slideOut: {
					'0%': {
						transform: 'translateX(65%) scale(0.87)',
					},
					'100%': {
						transform: 'translateX(0) scale(1)',
					},
				},
				roundIn: {
					'0%': {
						borderRadius: 'rem',
					},
					'100%': {
						borderRadius: '2rem',
					},
				},
				roundOut: {
					'0%': {
						borderRadius: '2rem',
					},
					'100%': {
						borderRadius: '0rem',
					},
				},
			},
			animation: {
				wiggle: 'wiggle 1s ease-in forwards',
				dimmed: 'dimmed 1s ease-in forwards',
				slideIn: 'slideIn .45s ease-in-out forwards',
				slideOut: 'slideOut .45s ease-in-out forwards',
				roundIn: 'roundIn .55s ease-in-out forwards',
				roundOut: 'roundOut .55s ease-in-out forwards',
			},
		},
	},
	plugins: [],
}
