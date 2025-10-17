import { useState } from "react";
import { ComponentShowcase } from "../components/ComponentShowcase";
import { cn } from "../utils/cn";

export function AnimationsPage() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    <main className="flex-1 p-8 bg-gradient-to-br from-primary-50 to-purple-100">
      <ComponentShowcase title="애니메이션 컴포넌트">
        {/* 로딩 애니메이션 섹션 */}
        <section className="component-section">
          <h3 className="component-section-title">로딩 애니메이션</h3>
          <div className="component-grid">
            <div className="component-card">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* 스피너 */}
                <div className="text-center">
                  <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin mx-auto mb-2" />
                  <p className="text-sm text-secondary-600">스피너</p>
                </div>

                {/* 도트 로딩 */}
                <div className="text-center">
                  <div className="flex justify-center space-x-1 mb-2">
                    <div
                      className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="w-2 h-2 bg-primary-500 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                  <p className="text-sm text-secondary-600">틀는 도트</p>
                </div>

                {/* 펄스 */}
                <div className="text-center">
                  <div className="w-8 h-8 bg-primary-500 rounded-full animate-pulse mx-auto mb-2" />
                  <p className="text-sm text-secondary-600">Pulse</p>
                </div>

                {/* 스켈레톤 로딩 */}
                <div className="col-span-full">
                  <h4 className="text-base font-medium text-secondary-800 mb-3">
                    Skeleton Loading
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-secondary-300 rounded-full animate-pulse" />
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-secondary-300 rounded animate-pulse" />
                        <div className="h-3 bg-secondary-200 rounded animate-pulse w-5/6" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-secondary-300 rounded animate-pulse" />
                      <div className="h-4 bg-secondary-200 rounded animate-pulse w-4/5" />
                      <div className="h-4 bg-secondary-200 rounded animate-pulse w-3/4" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-secondary-200">
                <button
                  onClick={handleLoadingDemo}
                  disabled={isLoading}
                  className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 disabled:opacity-50 transition-all duration-200"
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Loading...
                    </div>
                  ) : (
                    "Start Loading Demo"
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 트랜지션 애니메이션 섹션 */}
        <section className="component-section">
          <h3 className="component-section-title">Transition Animations</h3>
          <div className="component-grid">
            <div className="component-card">
              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-medium text-secondary-800 mb-3">
                    Fade In/Out
                  </h4>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setIsVisible(!isVisible)}
                      className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
                    >
                      Toggle Visibility
                    </button>
                    <div
                      className={cn(
                        "w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg transition-opacity duration-500",
                        isVisible ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-medium text-secondary-800 mb-3">
                    Hover Effects
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gradient-to-br from-red-400 to-red-600 h-20 rounded-lg transform hover:scale-105 transition-transform duration-200 cursor-pointer" />
                    <div className="bg-gradient-to-br from-green-400 to-green-600 h-20 rounded-lg transform hover:rotate-6 transition-transform duration-200 cursor-pointer" />
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-20 rounded-lg transform hover:-translate-y-2 transition-transform duration-200 cursor-pointer" />
                    <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 h-20 rounded-lg transform hover:skew-y-3 transition-transform duration-200 cursor-pointer" />
                  </div>
                  <p className="text-sm text-secondary-600 mt-2">
                    Hover over the squares to see different transform effects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 인터랙티브 카드 애니메이션 섹션 */}
        <section className="component-section">
          <h3 className="component-section-title">
            Interactive Card Animations
          </h3>
          <div className="component-grid">
            <div className="component-card">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((cardId) => (
                  <div
                    key={cardId}
                    onMouseEnter={() => setActiveCard(cardId)}
                    onMouseLeave={() => setActiveCard(null)}
                    className={cn(
                      "bg-white border-2 border-secondary-200 rounded-xl p-6 cursor-pointer transition-all duration-300",
                      "hover:shadow-xl hover:border-primary-300 hover:-translate-y-2",
                      activeCard === cardId &&
                        "shadow-xl border-primary-500 -translate-y-2"
                    )}
                  >
                    <div
                      className={cn(
                        "w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg mb-4 transition-all duration-300",
                        activeCard === cardId && "scale-110 rotate-12"
                      )}
                    >
                      <div className="w-full h-full flex items-center justify-center text-white font-bold">
                        {cardId}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-secondary-800 mb-2">
                      Card {cardId}
                    </h4>
                    <p className="text-secondary-600 text-sm">
                      This card animates on hover with multiple transform
                      properties.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 프로그레스 애니메이션 섹션 */}
        <section className="component-section">
          <h3 className="component-section-title">Progress Animations</h3>
          <div className="component-grid">
            <div className="component-card">
              <div className="space-y-6">
                {/* 프로그레스 바 */}
                <div>
                  <h4 className="text-base font-medium text-secondary-800 mb-3">
                    Progress Bars
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-secondary-600">HTML/CSS</span>
                        <span className="text-secondary-600">90%</span>
                      </div>
                      <div className="w-full bg-secondary-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-primary-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: "90%" }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-secondary-600">JavaScript</span>
                        <span className="text-secondary-600">85%</span>
                      </div>
                      <div className="w-full bg-secondary-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-green-500 to-cyan-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: "85%", animationDelay: "200ms" }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-secondary-600">React</span>
                        <span className="text-secondary-600">80%</span>
                      </div>
                      <div className="w-full bg-secondary-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: "80%", animationDelay: "400ms" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 원형 프로그레스 */}
                <div>
                  <h4 className="text-base font-medium text-secondary-800 mb-3">
                    Circular Progress
                  </h4>
                  <div className="flex justify-center space-x-8">
                    {[75, 60, 90].map((percentage, index) => (
                      <div key={index} className="relative w-20 h-20">
                        <svg
                          className="w-20 h-20 transform -rotate-90"
                          viewBox="0 0 36 36"
                        >
                          <path
                            className="text-secondary-200"
                            stroke="currentColor"
                            strokeWidth="3"
                            fill="transparent"
                            d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <path
                            className="text-primary-500"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeDasharray={`${percentage}, 100`}
                            strokeLinecap="round"
                            fill="transparent"
                            d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                            style={{
                              strokeDashoffset: 0,
                              transition: "stroke-dasharray 1s ease-in-out",
                            }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-sm font-semibold text-secondary-800">
                            {percentage}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 텍스트 애니메이션 섹션 */}
        <section className="component-section">
          <h3 className="component-section-title">Text Animations</h3>
          <div className="component-grid">
            <div className="component-card">
              <div className="space-y-8">
                {/* 타이핑 효과 */}
                <div>
                  <h4 className="text-base font-medium text-secondary-800 mb-3">
                    Typing Effect
                  </h4>
                  <div className="font-mono text-lg text-primary-600">
                    <span className="animate-pulse">|</span>
                    <span className="inline-block">
                      Welcome to our components library
                    </span>
                  </div>
                </div>

                {/* 페이드인 텍스트 */}
                <div>
                  <h4 className="text-base font-medium text-secondary-800 mb-3">
                    Fade In Text
                  </h4>
                  <div className="space-y-2">
                    {[
                      "First line appears",
                      "Then the second line",
                      "Finally the third line",
                    ].map((text, index) => (
                      <p
                        key={index}
                        className="text-secondary-700 animate-pulse"
                        style={{
                          animationDelay: `${index * 500}ms`,
                          animationDuration: "1s",
                          animationFillMode: "both",
                        }}
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                </div>

                {/* 글로우 효과 */}
                <div>
                  <h4 className="text-base font-medium text-secondary-800 mb-3">
                    Glow Effect
                  </h4>
                  <h2 className="text-2xl font-bold text-primary-600 animate-pulse">
                    ✨ Glowing Text ✨
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 마이크로 인터랙션 섹션 */}
        <section className="component-section">
          <h3 className="component-section-title">Micro Interactions</h3>
          <div className="component-grid">
            <div className="component-card">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* 좋아요 버튼 */}
                <button className="group bg-white border-2 border-red-200 hover:border-red-400 rounded-lg p-4 transition-all duration-200 hover:shadow-lg">
                  <div className="text-2xl group-hover:scale-125 transition-transform duration-200">
                    ❤️
                  </div>
                  <p className="text-sm text-secondary-600 mt-2">Like</p>
                </button>

                {/* 공유 버튼 */}
                <button className="group bg-white border-2 border-blue-200 hover:border-blue-400 rounded-lg p-4 transition-all duration-200 hover:shadow-lg">
                  <div className="text-2xl group-hover:rotate-12 transition-transform duration-200">
                    📤
                  </div>
                  <p className="text-sm text-secondary-600 mt-2">Share</p>
                </button>

                {/* 저장 버튼 */}
                <button className="group bg-white border-2 border-green-200 hover:border-green-400 rounded-lg p-4 transition-all duration-200 hover:shadow-lg">
                  <div className="text-2xl group-hover:-translate-y-1 transition-transform duration-200">
                    💾
                  </div>
                  <p className="text-sm text-secondary-600 mt-2">Save</p>
                </button>

                {/* 알림 버튼 */}
                <button className="group bg-white border-2 border-yellow-200 hover:border-yellow-400 rounded-lg p-4 transition-all duration-200 hover:shadow-lg">
                  <div className="text-2xl group-hover:animate-bounce">🔔</div>
                  <p className="text-sm text-secondary-600 mt-2">Notify</p>
                </button>
              </div>
            </div>
          </div>
        </section>
      </ComponentShowcase>
    </main>
  );
}
