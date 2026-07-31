import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-4xl font-extrabold text-indigo-400 mb-2">404</h2>
      <h3 className="text-xl font-bold mb-4">Page Not Found</h3>
      <p className="text-sm text-zinc-400 mb-6 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/25 transition-all"
      >
        Return to Home
      </Link>
    </div>
  )
}
