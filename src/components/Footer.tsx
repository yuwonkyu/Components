import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-4 px-5 mt-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <p className="m-0">&copy; 2025 Components Library</p>
          <Link to="/" className="text-blue-600 hover:underline">
            메인으로 돌아가기
          </Link>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
