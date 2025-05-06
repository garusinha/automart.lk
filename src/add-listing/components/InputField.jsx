import { Input } from "@/components/ui/input";
import React from "react";

function InputField({
  type,
  label,
  name,
  required,
  handleInputChange,
  carInfo,
}) {
  return (
    <div>
      <label className="block font-medium mb-2">{label}</label>
      <Input
        type={type}
        name={name}
        required={required}
        defaultValue={carInfo?.[name]} // Fixed here
        onChange={(e) => {
          handleInputChange(name, e.target.value);
        }}
        placeholder={`Enter ${label}`}
        className="w-full border rounded-lg p-2"
      />
    </div>
  );
}

export default InputField;
