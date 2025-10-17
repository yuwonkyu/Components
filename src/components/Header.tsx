import { cn } from "../utils/cn";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  showStats?: boolean;
}

interface StatBadgeProps {
  text: string;
}

export default function Header({
  title,
  subtitle,
  showStats = false,
}: HeaderProps) {
  const defaultTitle = "Frontend Components Showcase";
  const defaultSubtitle =
    "다양한 프론트엔드 컴포넌트를 한눈에 보고 학습할 수 있는 포괄적인 라이브러리";

  return (
    <header className="bg-gradient-to-br from-primary-500 to-purple-600 text-white text-center py-12 mb-8">
      <div className="container mx-auto px-5">
        <h1 className="text-4xl md:text-5xl mb-2 font-light">
          {title || defaultTitle}
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-6 max-w-3xl mx-auto leading-relaxed">
          {subtitle || defaultSubtitle}
        </p>

        {showStats && (
          <div className="flex justify-center gap-8 flex-wrap">
            <StatBadge text="15+ 컴포넌트" />
            <StatBadge text="100% 반응형" />
            <StatBadge text="React + Tailwind" />
          </div>
        )}
      </div>
    </header>
  );
}

export { Header };

function StatBadge({ text }: StatBadgeProps) {
  return (
    <span
      className={cn(
        "bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm md:text-base",
        "font-medium backdrop-blur-sm border border-white border-opacity-30",
        "hover:bg-opacity-30 transition-all duration-300"
      )}
    >
      {text}
    </span>
  );
}
