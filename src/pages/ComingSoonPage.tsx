import Header from "../components/Header";
import Footer from "../components/Footer";
import { cn } from "../utils/cn";

interface ComingSoonPageProps {
  type: string;
}

const componentData: Record<
  string,
  {
    icon: string;
    title: string;
    subtitle: string;
    progress: number;
    features: string[];
  }
> = {
  grids: {
    icon: "🔲",
    title: "Grid & Layout Components",
    subtitle: "다양한 그리드 시스템과 레이아웃 컴포넌트",
    progress: 15,
    features: [
      "CSS Grid 레이아웃",
      "Flexbox 시스템",
      "반응형 그리드",
      "카드 그리드",
      "매우 곧 구현 예정!",
    ],
  },
  carousel: {
    icon: "🎠",
    title: "Carousel & Slider Components",
    subtitle: "이미지 캐러셀과 슬라이더 컴포넌트",
    progress: 10,
    features: [
      "이미지 캐러셀",
      "터치/스와이프 지원",
      "자동 재생 기능",
      "인디케이터 표시",
      "매우 곧 구현 예정!",
    ],
  },
  badges: {
    icon: "🏷️",
    title: "Badge & Tag Components",
    subtitle: "배지와 태그 컴포넌트 모음",
    progress: 20,
    features: [
      "상태 배지",
      "숫자 배지",
      "태그 시스템",
      "색상 변형",
      "매우 곧 구현 예정!",
    ],
  },
  progress: {
    icon: "📊",
    title: "Progress & Loading Components",
    subtitle: "진행률 표시와 로딩 컴포넌트",
    progress: 30,
    features: [
      "프로그래스 바",
      "원형 프로그래스",
      "로딩 스피너",
      "스켈레톤 로딩",
      "매우 곧 구현 예정!",
    ],
  },
  alerts: {
    icon: "🚨",
    title: "Alert & Notification Components",
    subtitle: "알림과 경고 메시지 컴포넌트",
    progress: 25,
    features: [
      "성공/오류 알림",
      "토스트 메시지",
      "팝오버 알림",
      "인라인 메시지",
      "매우 곧 구현 예정!",
    ],
  },
};

export default function ComingSoonPage({ type }: ComingSoonPageProps) {
  const data = componentData[type] || {
    icon: "🔧",
    title: "Coming Soon",
    subtitle: "이 컴포넌트는 곧 구현될 예정입니다",
    progress: 0,
    features: ["개발 중..."],
  };

  return (
    <>
      <Header />
      <main className="flex-1 p-8 bg-gradient-to-br from-primary-50 to-purple-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">{data.icon}</div>
            <h1 className="text-4xl font-bold text-primary-800 mb-4">
              {data.title}
            </h1>
            <p className="text-xl text-secondary-600 mb-8">{data.subtitle}</p>

            <div className="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto">
              <div className="flex justify-between text-sm text-secondary-600 mb-2">
                <span>구현 진행률</span>
                <span>{data.progress}%</span>
              </div>
              <div className="w-full bg-secondary-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-primary-500 to-purple-600 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${data.progress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-secondary-800 mb-6">
              🚀 예정된 기능들
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {data.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-secondary-50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                  <span className="text-secondary-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-secondary-600 mb-4">
              이 컴포넌트들은 곧 추가될 예정입니다. 기대해 주세요! 🎉
            </p>
            <a
              href="/"
              className={cn(
                "inline-flex items-center gap-2 px-6 py-3 bg-primary-500",
                "text-white rounded-lg hover:bg-primary-600 transition-colors"
              )}
            >
              ← 메인으로 돌아가기
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
