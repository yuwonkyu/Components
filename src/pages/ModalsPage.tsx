import { useState } from "react";
import { ComponentShowcase } from "../components/ComponentShowcase";
import { cn } from "../utils/cn";

export function ModalsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const Modal = ({
    isOpen,
    onClose,
    title,
    children,
  }: {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
  }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
          <div className="flex items-center justify-between p-6 border-b border-secondary-200">
            <h3 className="text-lg font-semibold text-secondary-800">
              {title}
            </h3>
            <button
              onClick={onClose}
              className="text-secondary-400 hover:text-secondary-600 text-xl"
            >
              ×
            </button>
          </div>
          <div className="p-6">{children}</div>
        </div>
      </div>
    );
  };

  const ConfirmModal = ({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
  }: {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
  }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl max-w-sm w-full mx-4">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-xl">⚠️</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-secondary-800">
                  {title}
                </h3>
              </div>
            </div>
            <p className="text-secondary-600 mb-6">{message}</p>
            <div className="flex space-x-3">
              <button
                onClick={onConfirm}
                className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
              >
                확인
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-secondary-200 text-secondary-800 py-2 px-4 rounded-lg hover:bg-secondary-300 transition-colors"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Drawer = ({
    isOpen,
    onClose,
    children,
  }: {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }) => {
    return (
      <>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
        )}
        <div
          className={cn(
            "fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 z-50",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="p-6 border-b border-secondary-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-secondary-800">
                Drawer
              </h3>
              <button
                onClick={onClose}
                className="text-secondary-400 hover:text-secondary-600 text-xl"
              >
                ×
              </button>
            </div>
          </div>
          <div className="p-6">{children}</div>
        </div>
      </>
    );
  };

  const Tooltip = ({
    children,
    content,
    visible,
  }: {
    children: React.ReactNode;
    content: string;
    visible: boolean;
  }) => (
    <div className="relative inline-block">
      {children}
      {visible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-secondary-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap">
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-secondary-800" />
        </div>
      )}
    </div>
  );

  return (
    <main className="flex-1 p-8 bg-white">
      <ComponentShowcase title="모달 컴포넌트">
        {/* 기본 모달 섹션 */}
        <section className="component-section">
          <h3 className="component-section-title">Basic Modal</h3>
          <div className="component-grid">
            <div className="component-card">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
              >
                Open Modal
              </button>

              <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Example Modal"
              >
                <div>
                  <p className="text-secondary-700 mb-4">
                    This is a basic modal example. You can put any content here.
                  </p>
                  <p className="text-secondary-600 text-sm mb-6">
                    Click the X button or outside the modal to close it.
                  </p>
                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 text-secondary-600 hover:text-secondary-800"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </section>

        {/* 확인 모달 섹션 */}
        <section className="component-section">
          <h3 className="component-section-title">Confirmation Modal</h3>
          <div className="component-grid">
            <div className="component-card">
              <button
                onClick={() => setIsConfirmOpen(true)}
                className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
              >
                Delete Item
              </button>

              <ConfirmModal
                isOpen={isConfirmOpen}
                onClose={() => setIsConfirmOpen(false)}
                onConfirm={() => {
                  alert("Item deleted!");
                  setIsConfirmOpen(false);
                }}
                title="Delete Item"
                message="Are you sure you want to delete this item? This action cannot be undone."
              />
            </div>
          </div>
        </section>

        {/* 드로어 섹션 */}
        <section className="component-section">
          <h3 className="component-section-title">Side Drawer</h3>
          <div className="component-grid">
            <div className="component-card">
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors"
              >
                Open Drawer
              </button>

              <Drawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
              >
                <div>
                  <h4 className="text-lg font-medium text-secondary-800 mb-4">
                    Drawer Content
                  </h4>
                  <p className="text-secondary-600 mb-4">
                    This is a side drawer that slides in from the right side of
                    the screen.
                  </p>
                  <div className="space-y-3">
                    <div className="p-3 bg-secondary-50 rounded-lg">
                      <h5 className="font-medium text-secondary-800">
                        Menu Item 1
                      </h5>
                      <p className="text-sm text-secondary-600">
                        Description for item 1
                      </p>
                    </div>
                    <div className="p-3 bg-secondary-50 rounded-lg">
                      <h5 className="font-medium text-secondary-800">
                        Menu Item 2
                      </h5>
                      <p className="text-sm text-secondary-600">
                        Description for item 2
                      </p>
                    </div>
                    <div className="p-3 bg-secondary-50 rounded-lg">
                      <h5 className="font-medium text-secondary-800">
                        Menu Item 3
                      </h5>
                      <p className="text-sm text-secondary-600">
                        Description for item 3
                      </p>
                    </div>
                  </div>
                </div>
              </Drawer>
            </div>
          </div>
        </section>

        {/* 툴팁 섹션 */}
        <section className="component-section">
          <h3 className="component-section-title">Tooltips</h3>
          <div className="component-grid">
            <div className="component-card">
              <div className="flex space-x-4">
                <Tooltip
                  content="This is a helpful tooltip!"
                  visible={isTooltipVisible}
                >
                  <button
                    onMouseEnter={() => setIsTooltipVisible(true)}
                    onMouseLeave={() => setIsTooltipVisible(false)}
                    className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors"
                  >
                    Hover for Tooltip
                  </button>
                </Tooltip>

                <div className="relative group">
                  <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                    CSS Tooltip
                  </button>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-secondary-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    This tooltip uses CSS only!
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-secondary-800" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 알림 팝오버 섹션 */}
        <section className="component-section">
          <h3 className="component-section-title">Popover</h3>
          <div className="component-grid">
            <div className="component-card">
              <div className="relative group">
                <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors">
                  Click for Popover
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-secondary-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                  <div className="p-4">
                    <h4 className="font-medium text-secondary-800 mb-2">
                      Popover Title
                    </h4>
                    <p className="text-sm text-secondary-600 mb-3">
                      This is a popover with more detailed information. It can
                      contain multiple lines of text and even interactive
                      elements.
                    </p>
                    <button className="text-primary-500 text-sm hover:text-primary-600">
                      Learn More →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 스낵바/토스트 섹션 */}
        <section className="component-section">
          <h3 className="component-section-title">Toast Notifications</h3>
          <div className="component-grid">
            <div className="component-card">
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="text-green-500 text-xl">✓</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-green-800 font-medium">Success!</p>
                    <p className="text-green-700 text-sm">
                      Your changes have been saved.
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="text-yellow-500 text-xl">⚠️</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-yellow-800 font-medium">Warning</p>
                    <p className="text-yellow-700 text-sm">
                      Please check your input data.
                    </p>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="text-red-500 text-xl">✕</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-red-800 font-medium">Error</p>
                    <p className="text-red-700 text-sm">
                      Something went wrong. Please try again.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="text-blue-500 text-xl">ℹ️</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-blue-800 font-medium">Info</p>
                    <p className="text-blue-700 text-sm">
                      Here's some helpful information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ComponentShowcase>
    </main>
  );
}
