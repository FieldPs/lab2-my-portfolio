import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFormStore from "../store/useFormStore";

const Page1 = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormStore();

  const [localData, setLocalData] = useState({
    name: "",
    surname: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Load data from store if available
    setLocalData({
      name: formData.name || "",
      surname: formData.surname || "",
      email: formData.email || "",
    });
  }, [formData]);

  const validate = () => {
    const newErrors = {};
    if (!localData.name.trim()) newErrors.name = "Name is required";
    if (!localData.surname.trim()) newErrors.surname = "Surname is required";
    if (!localData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(localData.email)) {
      newErrors.email = "Email is invalid";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      updateFormData(localData);
      navigate("/apply/step-2");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalData((prev) => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        Step 1: Personal Information
      </h3>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={localData.name}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Surname
          </label>
          <input
            type="text"
            name="surname"
            value={localData.surname}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              errors.surname ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your surname"
          />
          {errors.surname && (
            <p className="text-red-500 text-sm mt-1">{errors.surname}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={localData.email}
            onChange={handleChange}
            className={`w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="mt-8 flex justify-end">
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

export default Page1;
