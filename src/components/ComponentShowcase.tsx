import { ReactNode } from "react";

/**
 * 컴포넌트 쇼케이스 props 인터페이스
 */
interface ComponentShowcaseProps {
  title: string; // 페이지 제목
  children: ReactNode; // 페이지 내용 (컴포넌트들)
}

/**
 * 컴포넌트 쇼케이스 래퍼 컴포넌트
 * 모든 컴포넌트 페이지에서 공통으로 사용되는 레이아웃
 * 위키백과 스타일의 제목과 컨테이너를 제공합니다
 */
export function ComponentShowcase({ title, children }: ComponentShowcaseProps) {
  return (
    <div className="max-w-4xl mx-auto">
      {" "}
      {/* 위키백과 스타일의 최대 너비 설정 */}
      {/* 페이지 제목 - 위키백과 스타일의 하단 보더와 함께 */}
      <h1 className="text-3xl font-normal text-black mb-4 border-b border-gray-300 pb-2">
        {title}
      </h1>
      {/* 컴포넌트 내용들을 세로로 배치 */}
      <div className="space-y-8">{children}</div>
    </div>
  );
}
