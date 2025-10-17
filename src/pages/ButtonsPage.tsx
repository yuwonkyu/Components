import { ComponentShowcase } from "../components/ComponentShowcase";
import { buttonVariants } from "../utils/cn";

export default function ButtonsPage() {
  return (
    <main className="flex-1 p-8 bg-gradient-to-br from-primary-50 to-purple-100">
      <ComponentShowcase title="버튼 컴포넌트">
        <section className="component-section">
          <h3 className="component-section-title">기본 버튼</h3>
          <div className="component-grid">
            <div className="component-card">
              <div className="flex flex-wrap gap-4">
                <button
                  className={buttonVariants({
                    variant: "primary",
                    size: "small",
                  })}
                >
                  Small Primary
                </button>
                <button className={buttonVariants({ variant: "primary" })}>
                  Default Primary
                </button>
                <button
                  className={buttonVariants({
                    variant: "primary",
                    size: "large",
                  })}
                >
                  Large Primary
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="component-section">
          <h3 className="component-section-title">Button Variants</h3>
          <div className="component-grid">
            <div className="component-card">
              <div className="flex flex-wrap gap-4">
                <button className={buttonVariants({ variant: "primary" })}>
                  Primary
                </button>
                <button className={buttonVariants({ variant: "secondary" })}>
                  Secondary
                </button>
                <button className={buttonVariants({ variant: "success" })}>
                  Success
                </button>
                <button className={buttonVariants({ variant: "warning" })}>
                  Warning
                </button>
                <button className={buttonVariants({ variant: "danger" })}>
                  Danger
                </button>
                <button className={buttonVariants({ variant: "info" })}>
                  Info
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="component-section">
          <h3 className="component-section-title">Button States</h3>
          <div className="component-grid">
            <div className="component-card">
              <div className="flex flex-wrap gap-4">
                <button className={buttonVariants({ variant: "primary" })}>
                  Normal
                </button>
                <button
                  className={buttonVariants({ variant: "primary" })}
                  disabled
                >
                  Disabled
                </button>
                <button
                  className={buttonVariants({ variant: "primary" })}
                  aria-pressed="true"
                >
                  Active
                </button>
              </div>
            </div>
          </div>
        </section>
      </ComponentShowcase>
    </main>
  );
}
