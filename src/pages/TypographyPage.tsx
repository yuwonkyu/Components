import { ComponentShowcase } from "../components/ComponentShowcase";

export function TypographyPage() {
  return (
    <main className="flex-1 p-8 bg-white">
      <ComponentShowcase title="텍스트 & 타이포그래피 컴포넌트">
        {/* 헤딩 섹션 */}
        <section className="component-section">
          <h3 className="component-section-title">제목 스타일</h3>
          <div className="component-grid">
            <div className="component-card">
              <h1 className="text-4xl font-bold text-primary-800 mb-2">
                제목 1 (가장 큰 제목)
              </h1>
              <h2 className="text-3xl font-semibold text-primary-700 mb-2">
                제목 2 (큰 제목)
              </h2>
              <h3 className="text-2xl font-medium text-primary-600 mb-2">
                제목 3 (중간 제목)
              </h3>
              <h4 className="text-xl font-medium text-primary-500 mb-2">
                제목 4 (작은 제목)
              </h4>
              <h5 className="text-lg font-medium text-primary-400 mb-2">
                제목 5 (더 작은 제목)
              </h5>
              <h6 className="text-base font-medium text-primary-300">
                제목 6 (가장 작은 제목)
              </h6>
            </div>
          </div>
        </section>

        {/* 본문 텍스트 섹션 */}
        <section className="component-section">
          <h3 className="component-section-title">본문 텍스트 크기</h3>
          <div className="component-grid">
            <div className="component-card">
              <p className="text-lg text-secondary-800 mb-4">
                큰 본문 텍스트 - 이것은 큰 크기의 본문 텍스트입니다. 중요한
                내용을 강조하고 싶을 때 사용합니다.
              </p>
              <p className="text-base text-secondary-700 mb-4">
                일반 본문 텍스트 - 이것은 기본 크기의 본문 텍스트입니다.
                대부분의 내용에 사용되는 표준 텍스트 크기입니다.
              </p>
              <p className="text-sm text-secondary-600 mb-4">
                작은 본문 텍스트 - 이것은 작은 크기의 부가 설명이나 참고 사항에
                사용됩니다.
              </p>
              <p className="text-xs text-secondary-500">
                매우 작은 텍스트 - 저작권 표시나 명시에 사용되는 가장 작은
                텍스트입니다.
              </p>
            </div>
          </div>
        </section>

        {/* 강조 텍스트 섹션 */}
        <section className="component-section">
          <h3 className="component-section-title">텍스트 강조</h3>
          <div className="component-grid">
            <div className="component-card">
              <p className="text-base text-secondary-700 mb-4">
                <strong className="font-bold text-primary-600">
                  굵은 글씨
                </strong>{" "}
                - 이 텍스트는 글꼴를 사용해 강조되었습니다.
              </p>
              <p className="text-base text-secondary-700 mb-4">
                <em className="italic text-purple-600">기울임 글씨</em> - 이
                텍스트는 글꼴 스타일을 사용해 강조되었습니다.
              </p>
              <p className="text-base text-secondary-700 mb-4">
                <u className="underline text-cyan-600">밑줄 텍스트</u> - 이
                텍스트에는 밑줄 장식이 있습니다.
              </p>
              <p className="text-base text-secondary-700">
                <s className="line-through text-red-500">취소선 텍스트</s> - 이
                텍스트는 취소선으로 표시되었습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 링크 섹션 */}
        <section className="component-section">
          <h3 className="component-section-title">링크</h3>
          <div className="component-grid">
            <div className="component-card">
              <a
                href="#"
                className="text-primary-500 hover:text-primary-700 underline transition-colors mb-2 block"
              >
                기본 링크
              </a>
              <a
                href="#"
                className="text-purple-500 hover:text-purple-700 underline transition-colors mb-2 block"
              >
                보라색 링크
              </a>
              <a
                href="#"
                className="text-cyan-500 hover:text-cyan-700 underline transition-colors mb-2 block"
              >
                청록색 링크
              </a>
              <a
                href="#"
                className="text-secondary-600 hover:text-secondary-800 no-underline hover:underline transition-all block"
              >
                은은한 링크
              </a>
            </div>
          </div>
        </section>

        {/* 인용문 섹션 */}
        <section className="component-section">
          <h3 className="component-section-title">인용문</h3>
          <div className="component-grid">
            <div className="component-card">
              <blockquote className="border-l-4 border-primary-500 pl-4 italic text-secondary-700 mb-4">
                "디자인은 단순히 어떻게 보이고 느껴지는 것이 아니다. 디자인은
                어떻게 작동하는가이다."
                <cite className="block text-sm text-secondary-500 mt-2 not-italic">
                  - 스티브 잡스
                </cite>
              </blockquote>

              <blockquote className="bg-secondary-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                <p className="text-secondary-700 italic mb-2">
                  "미래를 예측하는 가장 좋은 방법은 그것을 만드는 것이다."
                </p>
                <cite className="text-sm text-secondary-500 not-italic">
                  - 피터 드러커
                </cite>
              </blockquote>
            </div>
          </div>
        </section>

        {/* 코드 섹션 */}
        <section className="component-section">
          <h3 className="component-section-title">코드</h3>
          <div className="component-grid">
            <div className="component-card">
              <p className="text-secondary-700 mb-4">
                짧은 코드 조각에는{" "}
                <code className="bg-secondary-100 text-primary-600 px-2 py-1 rounded text-sm font-mono">
                  인라인 코드
                </code>{" "}
                를 사용하세요.
              </p>

              <pre className="bg-secondary-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm font-mono">
                {`function greeting(name) {
  return \`Hello, \${name}!\`;
}

console.log(greeting('World'));`}
              </pre>
            </div>
          </div>
        </section>

        {/* 목록 섹션 */}
        <section className="component-section">
          <h3 className="component-section-title">목록</h3>
          <div className="component-grid">
            <div className="component-card">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium text-secondary-800 mb-3">
                    순서 없는 목록
                  </h4>
                  <ul className="list-disc list-inside text-secondary-700 space-y-1">
                    <li>첫 번째 항목</li>
                    <li>두 번째 항목</li>
                    <li>여러 줄로 나눠 지는 긴 설명이 있는 세 번째 항목</li>
                    <li>네 번째 항목</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-secondary-800 mb-3">
                    순서 있는 목록
                  </h4>
                  <ol className="list-decimal list-inside text-secondary-700 space-y-1">
                    <li>단계 1</li>
                    <li>단계 2</li>
                    <li>자세한 지침이 있는 단계 3</li>
                    <li>마지막 단계</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 텍스트 색상 섹션 */}
        <section className="component-section">
          <h3 className="component-section-title">텍스트 색상</h3>
          <div className="component-grid">
            <div className="component-card">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <p className="text-primary-500">기본 색상</p>
                <p className="text-purple-500">보라색</p>
                <p className="text-cyan-500">청록색</p>
                <p className="text-green-500">성공 색상</p>
                <p className="text-yellow-500">경고 색상</p>
                <p className="text-red-500">위험 색상</p>
                <p className="text-secondary-800">진한 텍스트</p>
                <p className="text-secondary-500">은은한 텍스트</p>
                <p className="text-secondary-300">연한 텍스트</p>
              </div>
            </div>
          </div>
        </section>
      </ComponentShowcase>
    </main>
  );
}
