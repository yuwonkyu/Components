import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

interface FooterProps {
  showBackLink?: boolean;
}

export default function Footer({ showBackLink = false }: FooterProps) {
  return (
    <footer className="bg-secondary-800 text-white py-8 px-5 mt-12">
      {showBackLink ? (
        <div className="text-center">
          <Link
            to="/"
            className={cn(
              "inline-flex items-center gap-2 text-primary-400 no-underline",
              "font-medium transition-all duration-300 hover:text-primary-300",
              "hover:-translate-x-1"
            )}
          >
            ← 메인으로 돌아가기
          </Link>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <p className="opacity-80 m-0">
              &copy; 2025 Components Library. All rights reserved.
            </p>
            <p className="opacity-80 m-0">Made by 원뀨</p>
          </div>
        </div>
      )}
    </footer>
  );
}

export { Footer };
