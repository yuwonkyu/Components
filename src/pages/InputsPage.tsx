import { useState } from "react";
import { ComponentShowcase } from "../components/ComponentShowcase";
import { inputVariants } from "../utils/cn";

/**
 * 입력 양식 컴포넌트 페이지
 * 다양한 형태의 입력 요소들을 보여주는 데모 페이지
 */
export default function InputsPage() {
  // 폼 데이터 상태 관리 - 모든 입력 필드의 값을 저장
  const [formData, setFormData] = useState({
    name: "", // 사용자 이름
    email: "", // 이메일 주소
    message: "", // 메시지 내용
    country: "", // 선택된 국가
    terms: false, // 약관 동의 체크 상태
  });

  /**
   * 입력 필드 값 변경 처리 함수
   * 모든 입력 요소(입력창, 텍스트에어리어, 셀렉트박스)의 변경을 처리
   */
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        // 체크박스인 경우 checked 속성을, 나머지는 value 속성을 사용
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <main className="flex-1 p-8 bg-white">
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
                    메시지 (자유 크기 조절)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`${inputVariants({
                      state: "default",
                    })} resize-both`}
                    placeholder="메시지를 입력하세요 - 우하단 모서리를 드래그해서 크기를 조절할 수 있습니다"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    💡 우하단 모서리를 드래그하여 가로/세로 크기를 조절할 수
                    있습니다
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    세로만 조절 가능
                  </label>
                  <textarea
                    rows={3}
                    className={`${inputVariants({
                      state: "default",
                    })} resize-y`}
                    placeholder="세로 크기만 조절 가능합니다"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    크기 조절 불가
                  </label>
                  <textarea
                    rows={3}
                    className={`${inputVariants({
                      state: "default",
                    })} resize-none`}
                    placeholder="크기 조절이 불가능합니다"
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
