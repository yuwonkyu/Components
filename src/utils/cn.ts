import clsx from "clsx";

// Tailwind CSS 클래스를 조건부로 합치는 유틸리티 함수
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return clsx(inputs);
}

// 타입 정의
type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "success"
  | "warning"
  | "danger"
  | "info";
type ButtonSize = "small" | "default" | "large";
type CardVariant = "default" | "shadow" | "bordered";
type InputState = "default" | "valid" | "invalid" | "warning";
type BadgeVariant =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "secondary";
type BadgeSize = "small" | "default" | "large";

interface ButtonVariantsProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

interface CardVariantsProps {
  variant?: CardVariant;
  hover?: boolean;
  className?: string;
}

interface InputVariantsProps {
  variant?: string;
  state?: InputState;
  className?: string;
}

interface BadgeVariantsProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

// 버튼 스타일 헬퍼
export function buttonVariants({
  variant = "primary",
  size = "default",
  className = "",
}: ButtonVariantsProps): string {
  const baseClasses =
    "btn-base focus:outline-none focus:shadow-sm focus:shadow-primary-500/25";

  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline: "btn-outline",
    success:
      "bg-green-500 text-white border-green-500 hover:bg-green-600 hover:border-green-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/40",
    warning:
      "bg-yellow-500 text-secondary-900 border-yellow-500 hover:bg-yellow-600 hover:border-yellow-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-yellow-500/40",
    danger:
      "bg-red-500 text-white border-red-500 hover:bg-red-600 hover:border-red-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/40",
    info: "bg-cyan-500 text-white border-cyan-500 hover:bg-cyan-600 hover:border-cyan-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/40",
  };

  const sizes = {
    small: "btn-small",
    default: "",
    large: "btn-large",
  };

  return cn(baseClasses, variants[variant], sizes[size], className);
}

// 카드 스타일 헬퍼
export function cardVariants({
  variant = "default",
  hover = true,
  className = "",
}: CardVariantsProps): string {
  const baseClasses = "card-base";

  const variants: Record<CardVariant, string> = {
    default: "border border-secondary-200",
    shadow: "card-shadow",
    bordered: "border-2 border-primary-500",
  };

  const hoverClasses = hover ? "card-hover" : "";

  return cn(baseClasses, variants[variant], hoverClasses, className);
}

// 입력 필드 스타일 헬퍼
export function inputVariants({
  state = "default",
  className = "",
}: InputVariantsProps): string {
  const baseClasses = "form-input";

  const states: Record<InputState, string> = {
    default: "",
    valid: "border-green-500 focus:border-green-500 focus:shadow-green-500/10",
    invalid: "border-red-500 focus:border-red-500 focus:shadow-red-500/10",
    warning:
      "border-yellow-500 focus:border-yellow-500 focus:shadow-yellow-500/10",
  };

  return cn(baseClasses, states[state], className);
}

// 배지 스타일 헬퍼
export function badgeVariants({
  variant = "primary",
  size = "default",
  className = "",
}: BadgeVariantsProps): string {
  const baseClasses = "inline-block px-3 py-1 text-sm font-medium rounded-full";

  const variants: Record<BadgeVariant, string> = {
    primary: "bg-gradient-to-br from-primary-500 to-purple-600 text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-secondary-900",
    danger: "bg-red-500 text-white",
    info: "bg-cyan-500 text-white",
    secondary: "bg-secondary-200 text-secondary-800",
  };

  const sizes: Record<BadgeSize, string> = {
    small: "px-2 py-0.5 text-xs",
    default: "px-3 py-1 text-sm",
    large: "px-4 py-2 text-base",
  };

  return cn(baseClasses, variants[variant], sizes[size], className);
}
