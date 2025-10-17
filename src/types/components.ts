// 기본 타입 정의
export interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// 버튼 관련 타입
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "success"
  | "warning"
  | "danger"
  | "info";
export type ButtonSize = "small" | "default" | "large";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

// 입력 필드 관련 타입
export type InputState = "default" | "valid" | "invalid" | "warning";
export type InputVariant = "default" | "outline" | "filled";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  state?: InputState;
  variant?: InputVariant;
  label?: string;
  helperText?: string;
  errorMessage?: string;
}

// 카드 관련 타입
export type CardVariant = "default" | "shadow" | "bordered" | "elevated";

export interface CardProps extends ComponentProps {
  variant?: CardVariant;
  hover?: boolean;
  padding?: "none" | "small" | "medium" | "large";
}

// 뱃지 관련 타입
export type BadgeVariant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info";
export type BadgeSize = "small" | "default" | "large";

export interface BadgeProps extends ComponentProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
}

// 모달 관련 타입
export interface ModalProps extends ComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "small" | "medium" | "large" | "fullscreen";
  closeOnOverlay?: boolean;
  closeOnEscape?: boolean;
}

// 알림 관련 타입
export interface NotificationProps {
  id: string;
  type: "success" | "error" | "warning" | "info";
  title: string;
  message: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

// 프로그레스 관련 타입
export interface ProgressProps extends ComponentProps {
  value: number;
  max?: number;
  size?: "small" | "medium" | "large";
  color?: string;
  showLabel?: boolean;
  animated?: boolean;
}

// 탭 관련 타입
export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface TabsProps extends ComponentProps {
  items: TabItem[];
  defaultActiveTab?: string;
  onTabChange?: (tabId: string) => void;
  variant?: "default" | "pills" | "underline";
}

// 테이블 관련 타입
export interface TableColumn<T = any> {
  key: string;
  title: string;
  dataIndex: keyof T;
  render?: (value: any, record: T, index: number) => React.ReactNode;
  width?: string | number;
  sortable?: boolean;
  filterable?: boolean;
}

export interface TableProps<T = any> extends ComponentProps {
  columns: TableColumn<T>[];
  data: T[];
  loading?: boolean;
  pagination?: {
    current: number;
    pageSize: number;
    total: number;
    onChange: (page: number, pageSize: number) => void;
  };
  onSort?: (key: string, direction: "asc" | "desc") => void;
  onFilter?: (key: string, value: any) => void;
}

// 폼 관련 타입
export interface FormFieldProps {
  name: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  helperText?: string;
}

// 캐러셀 관련 타입
export interface CarouselItem {
  id: string;
  content: React.ReactNode;
  alt?: string;
}

export interface CarouselProps extends ComponentProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  infinite?: boolean;
}

// 드롭다운 관련 타입
export interface DropdownItem {
  key: string;
  label: string;
  value: any;
  disabled?: boolean;
  icon?: React.ReactNode;
  divider?: boolean;
}

export interface DropdownProps extends ComponentProps {
  items: DropdownItem[];
  placeholder?: string;
  value?: any;
  onChange?: (value: any) => void;
  multiple?: boolean;
  searchable?: boolean;
  disabled?: boolean;
}

// 아코디언 관련 타입
export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps extends ComponentProps {
  items: AccordionItem[];
  multiple?: boolean;
  defaultOpenItems?: string[];
  onToggle?: (itemId: string, isOpen: boolean) => void;
}
