import { useState } from "react";
import { ComponentShowcase } from "../components/ComponentShowcase";
import { cn } from "../utils/cn";
import { useComponentStore } from "../store/componentStore";

export function NavigationPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useComponentStore();

  const tabs = [
    { id: 0, label: "개요", content: "이것은 개요 탭 내용입니다." },
    { id: 1, label: "기능", content: "모든 놀라운 기능들이 여기 있습니다." },
    { id: 2, label: "요금제", content: "요금제 플랜을 확인하세요." },
    { id: 3, label: "연락처", content: "연락주세요." },
  ];

  const breadcrumbItems = [
    { label: "홈", href: "/" },
    { label: "컴포넌트", href: "/components" },
    { label: "네비게이션", href: "/navigation" },
  ];

  return (
    <main className="flex-1 p-8 bg-gradient-to-br from-primary-50 to-purple-100">
      <ComponentShowcase title="네비게이션 컴포넌트">
        {/* 네비게이션 바 섹션 */}
        <section className="component-section">
          <h3 className="component-section-title">네비게이션 바</h3>
          <div className="component-grid">
            <div className="component-card">
              <nav className="bg-white border border-secondary-200 rounded-lg shadow-sm">
                <div className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                      <div className="font-bold text-primary-600 text-lg">
                        브랜드
                      </div>
                      <div className="hidden md:flex space-x-6">
                        <a
                          href="#"
                          className="text-secondary-700 hover:text-primary-600 transition-colors"
                        >
                          홈
                        </a>
                        <a
                          href="#"
                          className="text-secondary-700 hover:text-primary-600 transition-colors"
                        >
                          소개
                        </a>
                        <a
                          href="#"
                          className="text-secondary-700 hover:text-primary-600 transition-colors"
                        >
                          서비스
                        </a>
                        <a
                          href="#"
                          className="text-secondary-700 hover:text-primary-600 transition-colors"
                        >
                          연락처
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-secondary-100 hover:bg-secondary-200 transition-colors"
                      >
                        {theme === "light" ? "🌙" : "☀️"}
                      </button>

                      <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg bg-secondary-100 hover:bg-secondary-200"
                      >
                        ☰
                      </button>
                    </div>
                  </div>

                  {/* 모바일 메뉴 */}
                  {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pt-4 border-t border-secondary-200">
                      <div className="flex flex-col space-y-2">
                        <a
                          href="#"
                          className="text-secondary-700 hover:text-primary-600 py-2"
                        >
                          Home
                        </a>
                        <a
                          href="#"
                          className="text-secondary-700 hover:text-primary-600 py-2"
                        >
                          About
                        </a>
                        <a
                          href="#"
                          className="text-secondary-700 hover:text-primary-600 py-2"
                        >
                          Services
                        </a>
                        <a
                          href="#"
                          className="text-secondary-700 hover:text-primary-600 py-2"
                        >
                          Contact
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </nav>
            </div>
          </div>
        </section>

        {/* 탭 네비게이션 섹션 */}
        <section className="component-section">
          <h3 className="component-section-title">Tab Navigation</h3>
          <div className="component-grid">
            <div className="component-card">
              <div className="w-full">
                {/* 탭 헤더 */}
                <div className="flex border-b border-secondary-200">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "px-6 py-3 font-medium transition-all duration-200",
                        "border-b-2 hover:text-primary-600",
                        activeTab === tab.id
                          ? "text-primary-600 border-primary-600"
                          : "text-secondary-600 border-transparent hover:border-secondary-300"
                      )}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* 탭 콘텐츠 */}
                <div className="p-6">
                  <p className="text-secondary-700">
                    {tabs.find((tab) => tab.id === activeTab)?.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 브레드크럼 섹션 */}
        <section className="component-section">
          <h3 className="component-section-title">Breadcrumb</h3>
          <div className="component-grid">
            <div className="component-card">
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2">
                  {breadcrumbItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                      {index > 0 && (
                        <svg
                          className="w-4 h-4 text-secondary-400 mx-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                      <a
                        href={item.href}
                        className={cn(
                          "text-sm font-medium transition-colors",
                          index === breadcrumbItems.length - 1
                            ? "text-secondary-500 cursor-default"
                            : "text-primary-600 hover:text-primary-700"
                        )}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        </section>

        {/* 드롭다운 메뉴 섹션 */}
        <section className="component-section">
          <h3 className="component-section-title">Dropdown Menu</h3>
          <div className="component-grid">
            <div className="component-card">
              <div className="relative inline-block">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 bg-primary-500 text-white",
                    "rounded-lg hover:bg-primary-600 transition-colors"
                  )}
                >
                  Options
                  <svg
                    className={cn(
                      "w-4 h-4 transition-transform",
                      isDropdownOpen ? "rotate-180" : ""
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-secondary-200 rounded-lg shadow-lg z-10">
                    <div className="py-1">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50"
                      >
                        Profile
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50"
                      >
                        Settings
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50"
                      >
                        Help
                      </a>
                      <hr className="my-1 border-secondary-200" />
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 사이드바 네비게이션 섹션 */}
        <section className="component-section">
          <h3 className="component-section-title">Sidebar Navigation</h3>
          <div className="component-grid">
            <div className="component-card">
              <div
                className="flex bg-secondary-50 rounded-lg overflow-hidden"
                style={{ height: "300px" }}
              >
                {/* 사이드바 */}
                <nav className="w-64 bg-white border-r border-secondary-200 p-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-secondary-500 uppercase tracking-wide mb-3">
                      Navigation
                    </div>
                    <a
                      href="#"
                      className="flex items-center gap-3 px-3 py-2 text-primary-600 bg-primary-50 rounded-lg"
                    >
                      <span>📊</span>
                      Dashboard
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 px-3 py-2 text-secondary-700 hover:bg-secondary-50 rounded-lg transition-colors"
                    >
                      <span>👥</span>
                      Users
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 px-3 py-2 text-secondary-700 hover:bg-secondary-50 rounded-lg transition-colors"
                    >
                      <span>📁</span>
                      Projects
                    </a>
                    <a
                      href="#"
                      className="flex items-center gap-3 px-3 py-2 text-secondary-700 hover:bg-secondary-50 rounded-lg transition-colors"
                    >
                      <span>⚙️</span>
                      Settings
                    </a>
                  </div>
                </nav>

                {/* 메인 콘텐츠 영역 */}
                <div className="flex-1 p-6">
                  <h4 className="text-lg font-medium text-secondary-800 mb-2">
                    Main Content Area
                  </h4>
                  <p className="text-secondary-600">
                    This is where the main content would be displayed based on
                    the sidebar selection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 페이지네이션 섹션 */}
        <section className="component-section">
          <h3 className="component-section-title">Pagination</h3>
          <div className="component-grid">
            <div className="component-card">
              <nav className="flex items-center justify-center space-x-2">
                <button className="p-2 text-secondary-400 hover:text-secondary-600 disabled:opacity-50">
                  ← Previous
                </button>

                <div className="flex space-x-1">
                  <button className="px-3 py-2 text-sm bg-primary-500 text-white rounded">
                    1
                  </button>
                  <button className="px-3 py-2 text-sm text-secondary-700 hover:bg-secondary-100 rounded">
                    2
                  </button>
                  <button className="px-3 py-2 text-sm text-secondary-700 hover:bg-secondary-100 rounded">
                    3
                  </button>
                  <span className="px-3 py-2 text-sm text-secondary-400">
                    ...
                  </span>
                  <button className="px-3 py-2 text-sm text-secondary-700 hover:bg-secondary-100 rounded">
                    10
                  </button>
                </div>

                <button className="p-2 text-secondary-600 hover:text-secondary-800">
                  Next →
                </button>
              </nav>
            </div>
          </div>
        </section>
      </ComponentShowcase>
    </main>
  );
}
