const toggleThemeClass = () => {
	if (
		localStorage.theme === 'dark' ||
		(!('theme' in localStorage) &&
			window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.documentElement.classList.add('dark')
	} else {
		document.documentElement.classList.remove('dark')
	}
}

const generateRandomId = () => Math.random().toString(16).slice(2)

export { toggleThemeClass, generateRandomId }
