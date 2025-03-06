export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Ayush Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

