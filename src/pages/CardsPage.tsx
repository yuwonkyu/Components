import { ComponentShowcase } from "../components/ComponentShowcase";
import { cardVariants } from "../utils/cn";

export default function CardsPage() {
  return (
    <main className="flex-1 p-8 bg-gradient-to-br from-primary-50 to-purple-100">
      <ComponentShowcase title="카드 컴포넌트">
        <section className="component-section">
          <h3 className="component-section-title">기본 카드</h3>
          <div className="component-grid">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={cardVariants({ variant: "default" })}>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-2">
                    기본 카드
                  </h4>
                  <p className="text-secondary-600">
                    기본 스타일이 적용된 기본 카드입니다.
                  </p>
                </div>
              </div>

              <div className={cardVariants({ variant: "shadow" })}>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-2">
                    그림자 카드
                  </h4>
                  <p className="text-secondary-600">
                    향상된 그림자 효과가 있는 카드입니다.
                  </p>
                </div>
              </div>

              <div className={cardVariants({ variant: "bordered" })}>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-secondary-800 mb-2">
                    테두리 카드
                  </h4>
                  <p className="text-secondary-600">
                    둘러싸인 테두리가 있는 카드입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="component-section">
          <h3 className="component-section-title">인터랙티브 카드</h3>
          <div className="component-grid">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={cardVariants({ hover: true })}>
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg mb-4"></div>
                  <h4 className="text-lg font-semibold text-secondary-800 mb-2">
                    호버 카드
                  </h4>
                  <p className="text-secondary-600 mb-4">
                    마우스를 올렸을 때 애니메이션이 동작하는 카드입니다.
                  </p>
                  <button className="text-primary-500 hover:text-primary-600">
                    자세히 보기 →
                  </button>
                </div>
              </div>

              <div className={cardVariants({ hover: true })}>
                <div className="p-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg mb-4"></div>
                  <h4 className="text-lg font-semibold text-secondary-800 mb-2">
                    기능 카드
                  </h4>
                  <p className="text-secondary-600 mb-4">
                    호버 애니메이션이 있는 또 다른 인터랙티브 카드입니다.
                  </p>
                  <button className="text-purple-500 hover:text-purple-600">
                    탐색하기 →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ComponentShowcase>
    </main>
  );
}
