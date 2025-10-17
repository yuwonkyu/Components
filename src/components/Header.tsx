interface HeaderProps {
  title?: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  const defaultTitle = "UI 컴포넌트 가이드";
  const defaultSubtitle = "사용자 인터페이스 컴포넌트 참고 문서";

  return (
    <header className="bg-white border-b border-gray-200 py-4 mb-8">
      <div className="container mx-auto px-5">
        <h1 className="text-2xl font-normal text-black mb-1">
          {title || defaultTitle}
        </h1>
        <p className="text-sm text-gray-600">{subtitle || defaultSubtitle}</p>
      </div>
    </header>
  );
}

export { Header };
