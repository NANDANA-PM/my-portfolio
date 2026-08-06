export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black py-8">
      <div className="mx-auto max-w-6xl px-6 text-center text-gray-400">
        <p className="text-lg font-semibold text-white">
          Nandana P. M.
        </p>

        <p className="mt-2">
          Full-Stack Mobile Application Developer
        </p>

        <p className="mt-4 text-sm">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}