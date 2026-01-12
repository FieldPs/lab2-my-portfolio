import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const FormLayout = () => {
  const location = useLocation();

  // Determine current step based on path
  const getStep = () => {
    if (location.pathname.includes("step-1")) return 1;
    if (location.pathname.includes("step-2")) return 2;
    if (location.pathname.includes("review")) return 3;
    return 1;
  };

  const currentStep = getStep();

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Progress Bar */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
          Application Form
        </h2>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
          <span
            className={currentStep >= 1 ? "text-blue-600 font-semibold" : ""}
          >
            Personal Info
          </span>
          <span
            className={currentStep >= 2 ? "text-blue-600 font-semibold" : ""}
          >
            Experience
          </span>
          <span
            className={currentStep >= 3 ? "text-blue-600 font-semibold" : ""}
          >
            Review
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default FormLayout;
