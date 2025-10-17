import { Link } from "react-router-dom";

/**
 * 홈페이지 컴포넌트
 * 컴포넌트 라이브러리의 메인 페이지로, 모든 컴포넌트들의 목록을 보여줍니다
 * 위키백과 스타일의 심플한 디자인을 사용합니다
 */
export default function Home() {
  // 사용 가능한 컴포넌트들의 목록과 설명
  const components = [
    {
      name: "버튼",
      path: "/buttons",
      description: "다양한 버튼 스타일과 상태를 보여주는 컴포넌트입니다.",
    },
    {
      name: "카드",
      path: "/cards",
      description: "정보를 담는 카드 레이아웃 컴포넌트입니다.",
    },
    {
      name: "입력 양식",
      path: "/inputs",
      description: "사용자 입력을 받는 폼 요소들입니다.",
    },
    {
      name: "타이포그래피",
      path: "/typography",
      description: "텍스트 스타일링과 타이포그래피 요소들입니다.",
    },
    {
      name: "네비게이션",
      path: "/navigation",
      description: "웹사이트 탐색을 위한 네비게이션 컴포넌트입니다.",
    },
    {
      name: "모달",
      path: "/modals",
      description: "팝업과 오버레이 형태의 모달 컴포넌트입니다.",
    },
    {
      name: "애니메이션",
      path: "/animations",
      description: "사용자 경험을 향상시키는 동적 효과들입니다.",
    },
  ];

  return (
    <main className="flex-1 p-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-normal text-black mb-4 border-b border-gray-300 pb-2">
            컴포넌트 라이브러리
          </h1>
          <p className="text-base text-gray-700 leading-relaxed">
            이 라이브러리는 재사용 가능한 UI 컴포넌트들을 제공합니다. 각
            컴포넌트는 다양한 변형과 사용 예제를 포함하고 있습니다.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-normal text-black border-b border-gray-200 pb-1 mb-4">
            컴포넌트 목록
          </h2>

          <div className="space-y-4">
            {components.map((component) => (
              <div
                key={component.path}
                className="border-b border-gray-100 pb-4"
              >
                <Link
                  to={component.path}
                  className="block hover:bg-gray-50 p-4 -m-4 rounded transition-colors"
                >
                  <h3 className="text-lg font-normal text-blue-600 hover:underline mb-1">
                    {component.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {component.description}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-lg font-normal text-black mb-3">기술 스택</h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            이 컴포넌트 라이브러리는 다음 기술들로 구현되었습니다:
          </p>
          <ul className="text-sm text-gray-600 space-y-1 ml-4">
            <li>
              • <strong>React 18</strong> - 사용자 인터페이스 구축
            </li>
            <li>
              • <strong>TypeScript</strong> - 타입 안전성
            </li>
            <li>
              • <strong>Tailwind CSS</strong> - 유틸리티 기반 스타일링
            </li>
            <li>
              • <strong>Zustand</strong> - 상태 관리
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
