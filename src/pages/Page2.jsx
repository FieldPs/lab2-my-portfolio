import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFormStore from "../store/useFormStore";

const Page2 = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormStore();

  const [experience, setExperience] = useState("");
  const [error, setError] = useState("");

  // Simple Guard: Check if email exists in store
  useEffect(() => {
    if (!formData.email) {
      alert("Please complete Step 1 first.");
      navigate("/apply/step-1");
    }
    // Load existing experience if available
    if (formData.experience) {
      setExperience(formData.experience);
    }
  }, [formData, navigate]);

  const handleNext = () => {
    if (!experience.trim()) {
      setError("Experience and Skills field is required");
      return;
    }
    updateFormData({ experience });
    navigate("/apply/review");
  };

  const handleBack = () => {
    navigate("/apply/step-1");
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Step 2: Experience & Skills
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Describe your experience and skills
          </label>
          <textarea
            value={experience}
            onChange={(e) => {
              setExperience(e.target.value);
              if (error) setError("");
            }}
            rows="6"
            className={`w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              error ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="I have experience in..."
          ></textarea>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
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
          onClick={handleNext}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page2;
