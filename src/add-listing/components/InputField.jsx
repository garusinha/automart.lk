import { Input } from "@/components/ui/input";
import React from "react";

function InputField({ type, label, name, required }) {
  return (
    <div>
      <label className="block font-medium mb-2">{label}</label>
      <Input
        type={type}
        name={name}
        required={required}
        placeholder={`Enter ${label}`}
        className="w-full border rounded-lg p-2"
      />
    </div>
  );
}

export default InputField;
