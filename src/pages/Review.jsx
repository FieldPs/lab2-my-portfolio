import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFormStore from "../store/useFormStore";

const Review = () => {
  const navigate = useNavigate();
  const { formData, resetForm } = useFormStore();

  useEffect(() => {
    // Basic guard: if no data, go back
    if (!formData.email) {
      navigate("/apply/step-1");
    }
  }, [formData, navigate]);

  const handleSubmit = () => {
    alert("Application Submitted Successfully!");
    resetForm();
    navigate("/");
  };

  const handleBack = () => {
    navigate("/apply/step-2");
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
        Review Your Application
      </h3>

      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-gray-200 dark:border-gray-600 pb-4">
          <div className="font-medium text-gray-500 dark:text-gray-400">
            Full Name
          </div>
          <div className="md:col-span-2 text-gray-800 dark:text-white font-semibold">
            {formData.name} {formData.surname}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-gray-200 dark:border-gray-600 pb-4">
          <div className="font-medium text-gray-500 dark:text-gray-400">
            Email
          </div>
          <div className="md:col-span-2 text-gray-800 dark:text-white break-all">
            {formData.email}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="font-medium text-gray-500 dark:text-gray-400">
            Experience & Skills
          </div>
          <div className="md:col-span-2 text-gray-800 dark:text-white whitespace-pre-wrap">
            {formData.experience || "No experience specified"}
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={handleBack}
          className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          Back
        </button>
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 font-semibold"
        >
          Confirm & Submit
        </button>
      </div>
    </div>
  );
};

export default Review;
