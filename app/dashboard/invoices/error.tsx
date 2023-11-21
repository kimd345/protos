// https://nextjs.org/learn/dashboard-app/error-handling#handling-all-errors-with-errortsx
'use client' // error.tsx needs to be a Client Component

import { useEffect } from 'react'

export default function Error({
	// error.tsx accepts two props:
	error, // This object is an instance of JavaScript's native Error object
	reset, // This function resets the error state by re-rendering the invoices route
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	useEffect(() => {
		// Optionally log the error to an error reporting service
		console.error(error)
	}, [error])

	return (
		<main className='flex h-full flex-col items-center justify-center'>
			<h2 className='text-center'>Something went wrong!</h2>
			<button
				className='mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400'
				onClick={
					// Attempt to recover by trying to re-render the invoices route
					() => reset()
				}
			>
				Try again
			</button>
		</main>
	)
}
