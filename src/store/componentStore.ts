import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// 컴포넌트 상태 타입 정의
export interface ComponentState {
  // 테마 상태
  theme: "light" | "dark";
  isDarkMode: boolean;
  primaryColor: string;

  // 데모 상태
  isLoading: boolean;

  // 폼 상태
  formData: {
    name: string;
    email: string;
    message: string;
  };

  // 알림 상태
  notifications: Notification[];

  // 카운터 (데모용)
  counter: number;

  // 액션들
  toggleTheme: () => void;
  toggleDarkMode: () => void;
  setPrimaryColor: (color: string) => void;
  setLoading: (loading: boolean) => void;
  updateFormData: (
    field: keyof ComponentState["formData"],
    value: string
  ) => void;
  addNotification: (notification: Omit<Notification, "id">) => void;
  removeNotification: (id: string) => void;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export interface Notification {
  id: string;
  type: "success" | "error" | "warning" | "info";
  title: string;
  message: string;
  duration?: number;
}

// Zustand 스토어 생성
export const useComponentStore = create<ComponentState>()(
  devtools(
    persist(
      (set, get) => ({
        // 초기 상태
        theme: "light" as const,
        isDarkMode: false,
        primaryColor: "#667eea",
        isLoading: false,
        formData: {
          name: "",
          email: "",
          message: "",
        },
        notifications: [],
        counter: 0,

        // 액션 구현
        toggleTheme: () =>
          set(
            (state) => ({
              theme: state.theme === "light" ? "dark" : "light",
              isDarkMode: state.theme === "light",
            }),
            false,
            "toggleTheme"
          ),

        toggleDarkMode: () =>
          set(
            (state) => ({ isDarkMode: !state.isDarkMode }),
            false,
            "toggleDarkMode"
          ),

        setPrimaryColor: (color: string) =>
          set({ primaryColor: color }, false, "setPrimaryColor"),

        setLoading: (loading: boolean) =>
          set({ isLoading: loading }, false, "setLoading"),

        updateFormData: (field, value) =>
          set(
            (state) => ({
              formData: { ...state.formData, [field]: value },
            }),
            false,
            `updateFormData/${field}`
          ),

        addNotification: (notification) => {
          const id = Math.random().toString(36).substring(2, 9);
          const newNotification = { ...notification, id };

          set(
            (state) => ({
              notifications: [...state.notifications, newNotification],
            }),
            false,
            "addNotification"
          );

          // 자동 제거 (기본 5초)
          if (notification.duration !== 0) {
            setTimeout(() => {
              get().removeNotification(id);
            }, notification.duration || 5000);
          }
        },

        removeNotification: (id) =>
          set(
            (state) => ({
              notifications: state.notifications.filter((n) => n.id !== id),
            }),
            false,
            "removeNotification"
          ),

        increment: () =>
          set((state) => ({ counter: state.counter + 1 }), false, "increment"),

        decrement: () =>
          set((state) => ({ counter: state.counter - 1 }), false, "decrement"),

        reset: () => set({ counter: 0 }, false, "reset"),
      }),
      {
        name: "component-store",
        partialize: (state) => ({
          isDarkMode: state.isDarkMode,
          primaryColor: state.primaryColor,
          formData: state.formData,
        }),
      }
    ),
    { name: "component-store" }
  )
);

// 선택적 훅들 (성능 최적화)
export const useTheme = () =>
  useComponentStore((state) => ({
    isDarkMode: state.isDarkMode,
    primaryColor: state.primaryColor,
    toggleDarkMode: state.toggleDarkMode,
    setPrimaryColor: state.setPrimaryColor,
  }));

export const useNotifications = () =>
  useComponentStore((state) => ({
    notifications: state.notifications,
    addNotification: state.addNotification,
    removeNotification: state.removeNotification,
  }));

export const useCounter = () =>
  useComponentStore((state) => ({
    counter: state.counter,
    increment: state.increment,
    decrement: state.decrement,
    reset: state.reset,
  }));

export const useFormData = () =>
  useComponentStore((state) => ({
    formData: state.formData,
    updateFormData: state.updateFormData,
  }));
