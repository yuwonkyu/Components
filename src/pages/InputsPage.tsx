import { useState } from "react";
import { ComponentShowcase } from "../components/ComponentShowcase";
import { inputVariants } from "../utils/cn";

export default function InputsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    country: "",
    terms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <main className="flex-1 p-8 bg-gradient-to-br from-primary-50 to-purple-100">
      <ComponentShowcase title="입력 양식 컴포넌트">
        <section className="component-section">
          <h3 className="component-section-title">텍스트 입력</h3>
          <div className="component-grid">
            <div className="component-card">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    이름
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputVariants({ state: "default" })}
                    placeholder="이름을 입력하세요"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputVariants({
                      state: formData.email.includes("@") ? "valid" : "default",
                    })}
                    placeholder="이메일 주소를 입력하세요"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    메시지
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={inputVariants({ state: "default" })}
                    placeholder="메시지를 입력하세요"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="component-section">
          <h3 className="component-section-title">선택 상자 & 체크박스</h3>
          <div className="component-grid">
            <div className="component-card">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    국가
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={inputVariants({ state: "default" })}
                  >
                    <option value="">국가를 선택하세요</option>
                    <option value="kr">대한민국</option>
                    <option value="us">미국</option>
                    <option value="jp">일본</option>
                    <option value="cn">중국</option>
                  </select>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary-500 bg-secondary-100 border-secondary-300 rounded focus:ring-primary-500 focus:ring-2"
                  />
                  <label className="ml-2 text-sm text-secondary-700">
                    이용약관에 동의합니다
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="component-section">
          <h3 className="component-section-title">입력 상태</h3>
          <div className="component-grid">
            <div className="component-card">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    유효한 입력
                  </label>
                  <input
                    type="text"
                    className={inputVariants({ state: "valid" })}
                    placeholder="이 입력은 유효합니다"
                    defaultValue="유효한 값"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    잘못된 입력
                  </label>
                  <input
                    type="text"
                    className={inputVariants({ state: "invalid" })}
                    placeholder="이 입력에 오류가 있습니다"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    경고 입력
                  </label>
                  <input
                    type="text"
                    className={inputVariants({ state: "warning" })}
                    placeholder="이 입력에 경고가 있습니다"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ComponentShowcase>
    </main>
  );
}
