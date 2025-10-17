import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { cn } from "../utils/cn";

export default function Home() {
  const components = [
    {
      name: "Buttons",
      path: "/buttons",
      icon: "🔘",
      description: "다양한 버튼 스타일",
    },
    {
      name: "Cards",
      path: "/cards",
      icon: "🃏",
      description: "카드 레이아웃 컴포넌트",
    },
    {
      name: "Inputs",
      path: "/inputs",
      icon: "📝",
      description: "폼 입력 컴포넌트",
    },
    {
      name: "Typography",
      path: "/typography",
      icon: "✍️",
      description: "텍스트 스타일링",
    },
    {
      name: "Navigation",
      path: "/navigation",
      icon: "🧭",
      description: "네비게이션 요소",
    },
    {
      name: "Modals",
      path: "/modals",
      icon: "🪟",
      description: "모달 및 오버레이",
    },
    {
      name: "Animations",
      path: "/animations",
      icon: "✨",
      description: "애니메이션 효과",
    },
    {
      name: "Grids",
      path: "/grids",
      icon: "🔲",
      description: "그리드 레이아웃",
    },
  ];

  return (
    <>
      <Header showStats={true} />
      <main className="flex-1 p-8 bg-gradient-to-br from-primary-50 to-purple-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-800 mb-4">
              🎨 컴포넌트 라이브러리
            </h2>
            <p className="text-lg text-secondary-600">
              모던하고 반응형인 UI 컴포넌트들을 탐색해보세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {components.map((component) => (
              <Link
                key={component.name}
                to={component.path}
                className={cn(
                  "bg-white rounded-xl p-6 shadow-lg hover:shadow-xl",
                  "transition-all duration-300 hover:-translate-y-2",
                  "border border-secondary-200 hover:border-primary-300",
                  "group cursor-pointer"
                )}
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {component.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-2">
                    {component.name}
                  </h3>
                  <p className="text-secondary-600 text-sm">
                    {component.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-secondary-800 mb-6 text-center">
              🚀 주요 특징
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-semibold text-secondary-800 mb-2">
                  빠른 성능
                </h4>
                <p className="text-secondary-600 text-sm">
                  최적화된 React 컴포넌트로 빠른 렌더링
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📱</div>
                <h4 className="font-semibold text-secondary-800 mb-2">
                  반응형 디자인
                </h4>
                <p className="text-secondary-600 text-sm">
                  모든 디바이스에서 완벽하게 작동
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎨</div>
                <h4 className="font-semibold text-secondary-800 mb-2">
                  커스터마이징
                </h4>
                <p className="text-secondary-600 text-sm">
                  Tailwind CSS로 쉽게 스타일 변경 가능
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
