import { useState } from "react";
import { ComponentShowcase } from "../components/ComponentShowcase";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { inputVariants } from "../utils/cn";

export default function InputsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    country: "",
    terms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <>
      <Header />
      <main className="flex-1 p-8 bg-gradient-to-br from-primary-50 to-purple-100">
        <ComponentShowcase title="Input Components">
          <section className="component-section">
            <h3 className="component-section-title">Text Inputs</h3>
            <div className="component-grid">
              <div className="component-card">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputVariants({ state: "default" })}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputVariants({
                        state: formData.email.includes("@")
                          ? "valid"
                          : "default",
                      })}
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={inputVariants({ state: "default" })}
                      placeholder="Enter your message"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="component-section">
            <h3 className="component-section-title">Select & Checkbox</h3>
            <div className="component-grid">
              <div className="component-card">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Country
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={inputVariants({ state: "default" })}
                    >
                      <option value="">Select a country</option>
                      <option value="kr">Korea</option>
                      <option value="us">United States</option>
                      <option value="jp">Japan</option>
                      <option value="cn">China</option>
                    </select>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary-500 bg-secondary-100 border-secondary-300 rounded focus:ring-primary-500 focus:ring-2"
                    />
                    <label className="ml-2 text-sm text-secondary-700">
                      I agree to the terms and conditions
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="component-section">
            <h3 className="component-section-title">Input States</h3>
            <div className="component-grid">
              <div className="component-card">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Valid Input
                    </label>
                    <input
                      type="text"
                      className={inputVariants({ state: "valid" })}
                      placeholder="This input is valid"
                      defaultValue="Valid value"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Invalid Input
                    </label>
                    <input
                      type="text"
                      className={inputVariants({ state: "invalid" })}
                      placeholder="This input has errors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Warning Input
                    </label>
                    <input
                      type="text"
                      className={inputVariants({ state: "warning" })}
                      placeholder="This input has warnings"
                    />
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
