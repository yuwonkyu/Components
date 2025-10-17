import { ComponentShowcase } from "../components/ComponentShowcase";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function TypographyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 p-8 bg-gradient-to-br from-primary-50 to-purple-100">
        <ComponentShowcase title="Typography Components">
          {/* 헤딩 섹션 */}
          <section className="component-section">
            <h3 className="component-section-title">Headings</h3>
            <div className="component-grid">
              <div className="component-card">
                <h1 className="text-4xl font-bold text-primary-800 mb-2">
                  Heading 1
                </h1>
                <h2 className="text-3xl font-semibold text-primary-700 mb-2">
                  Heading 2
                </h2>
                <h3 className="text-2xl font-medium text-primary-600 mb-2">
                  Heading 3
                </h3>
                <h4 className="text-xl font-medium text-primary-500 mb-2">
                  Heading 4
                </h4>
                <h5 className="text-lg font-medium text-primary-400 mb-2">
                  Heading 5
                </h5>
                <h6 className="text-base font-medium text-primary-300">
                  Heading 6
                </h6>
              </div>
            </div>
          </section>

          {/* 본문 텍스트 섹션 */}
          <section className="component-section">
            <h3 className="component-section-title">Body Text</h3>
            <div className="component-grid">
              <div className="component-card">
                <p className="text-lg text-secondary-800 mb-4">
                  Large text - Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
                <p className="text-base text-secondary-700 mb-4">
                  Regular text - Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
                <p className="text-sm text-secondary-600 mb-4">
                  Small text - Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className="text-xs text-secondary-500">
                  Extra small text - Excepteur sint occaecat cupidatat non
                  proident.
                </p>
              </div>
            </div>
          </section>

          {/* 강조 텍스트 섹션 */}
          <section className="component-section">
            <h3 className="component-section-title">Emphasis</h3>
            <div className="component-grid">
              <div className="component-card">
                <p className="text-base text-secondary-700 mb-4">
                  <strong className="font-bold text-primary-600">
                    Bold text
                  </strong>{" "}
                  - This text is emphasized using font-weight.
                </p>
                <p className="text-base text-secondary-700 mb-4">
                  <em className="italic text-purple-600">Italic text</em> - This
                  text is emphasized using font-style.
                </p>
                <p className="text-base text-secondary-700 mb-4">
                  <u className="underline text-cyan-600">Underlined text</u> -
                  This text has an underline decoration.
                </p>
                <p className="text-base text-secondary-700">
                  <s className="line-through text-red-500">
                    Strikethrough text
                  </s>{" "}
                  - This text is crossed out.
                </p>
              </div>
            </div>
          </section>

          {/* 링크 섹션 */}
          <section className="component-section">
            <h3 className="component-section-title">Links</h3>
            <div className="component-grid">
              <div className="component-card">
                <a
                  href="#"
                  className="text-primary-500 hover:text-primary-700 underline transition-colors mb-2 block"
                >
                  Primary Link
                </a>
                <a
                  href="#"
                  className="text-purple-500 hover:text-purple-700 underline transition-colors mb-2 block"
                >
                  Purple Link
                </a>
                <a
                  href="#"
                  className="text-cyan-500 hover:text-cyan-700 underline transition-colors mb-2 block"
                >
                  Cyan Link
                </a>
                <a
                  href="#"
                  className="text-secondary-600 hover:text-secondary-800 no-underline hover:underline transition-all block"
                >
                  Subtle Link
                </a>
              </div>
            </div>
          </section>

          {/* 인용문 섹션 */}
          <section className="component-section">
            <h3 className="component-section-title">Quotes</h3>
            <div className="component-grid">
              <div className="component-card">
                <blockquote className="border-l-4 border-primary-500 pl-4 italic text-secondary-700 mb-4">
                  "Design is not just what it looks like and feels like. Design
                  is how it works."
                  <cite className="block text-sm text-secondary-500 mt-2 not-italic">
                    - Steve Jobs
                  </cite>
                </blockquote>

                <blockquote className="bg-secondary-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                  <p className="text-secondary-700 italic mb-2">
                    "The best way to predict the future is to create it."
                  </p>
                  <cite className="text-sm text-secondary-500 not-italic">
                    - Peter Drucker
                  </cite>
                </blockquote>
              </div>
            </div>
          </section>

          {/* 코드 섹션 */}
          <section className="component-section">
            <h3 className="component-section-title">Code</h3>
            <div className="component-grid">
              <div className="component-card">
                <p className="text-secondary-700 mb-4">
                  Use{" "}
                  <code className="bg-secondary-100 text-primary-600 px-2 py-1 rounded text-sm font-mono">
                    inline code
                  </code>{" "}
                  for small code snippets.
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
            <h3 className="component-section-title">Lists</h3>
            <div className="component-grid">
              <div className="component-card">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium text-secondary-800 mb-3">
                      Unordered List
                    </h4>
                    <ul className="list-disc list-inside text-secondary-700 space-y-1">
                      <li>First item</li>
                      <li>Second item</li>
                      <li>
                        Third item with a longer description that wraps to
                        multiple lines
                      </li>
                      <li>Fourth item</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-secondary-800 mb-3">
                      Ordered List
                    </h4>
                    <ol className="list-decimal list-inside text-secondary-700 space-y-1">
                      <li>Step one</li>
                      <li>Step two</li>
                      <li>Step three with detailed instructions</li>
                      <li>Final step</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 텍스트 색상 섹션 */}
          <section className="component-section">
            <h3 className="component-section-title">Text Colors</h3>
            <div className="component-grid">
              <div className="component-card">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <p className="text-primary-500">Primary Color</p>
                  <p className="text-purple-500">Purple Color</p>
                  <p className="text-cyan-500">Cyan Color</p>
                  <p className="text-green-500">Success Color</p>
                  <p className="text-yellow-500">Warning Color</p>
                  <p className="text-red-500">Danger Color</p>
                  <p className="text-secondary-800">Dark Text</p>
                  <p className="text-secondary-500">Muted Text</p>
                  <p className="text-secondary-300">Light Text</p>
                </div>
              </div>
            </div>
          </section>
        </ComponentShowcase>
      </main>
      <Footer />
    </>
  );
}
