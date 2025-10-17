import { ComponentShowcase } from "../components/ComponentShowcase";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { cardVariants } from "../utils/cn";

export default function CardsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 p-8 bg-gradient-to-br from-primary-50 to-purple-100">
        <ComponentShowcase title="Card Components">
          <section className="component-section">
            <h3 className="component-section-title">Basic Cards</h3>
            <div className="component-grid">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className={cardVariants({ variant: "default" })}>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-secondary-800 mb-2">
                      Default Card
                    </h4>
                    <p className="text-secondary-600">
                      This is a basic card with default styling.
                    </p>
                  </div>
                </div>

                <div className={cardVariants({ variant: "shadow" })}>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-secondary-800 mb-2">
                      Shadow Card
                    </h4>
                    <p className="text-secondary-600">
                      This card has enhanced shadow effects.
                    </p>
                  </div>
                </div>

                <div className={cardVariants({ variant: "bordered" })}>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-secondary-800 mb-2">
                      Bordered Card
                    </h4>
                    <p className="text-secondary-600">
                      This card has a prominent border.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="component-section">
            <h3 className="component-section-title">Interactive Cards</h3>
            <div className="component-grid">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={cardVariants({ hover: true })}>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-primary-500 rounded-lg mb-4"></div>
                    <h4 className="text-lg font-semibold text-secondary-800 mb-2">
                      Hover Card
                    </h4>
                    <p className="text-secondary-600 mb-4">
                      This card animates on hover with special effects.
                    </p>
                    <button className="text-primary-500 hover:text-primary-600">
                      Learn More →
                    </button>
                  </div>
                </div>

                <div className={cardVariants({ hover: true })}>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg mb-4"></div>
                    <h4 className="text-lg font-semibold text-secondary-800 mb-2">
                      Feature Card
                    </h4>
                    <p className="text-secondary-600 mb-4">
                      Another interactive card with hover animations.
                    </p>
                    <button className="text-purple-500 hover:text-purple-600">
                      Explore →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ComponentShowcase>
      </main>
      <Footer />
    </>
  );
}
