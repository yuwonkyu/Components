interface HeaderProps {
  title?: string;
  subtitle?: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
  const defaultTitle = "컴포넌트 라이브러리";
  const defaultSubtitle = "재사용 가능한 UI 컴포넌트 문서";

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
