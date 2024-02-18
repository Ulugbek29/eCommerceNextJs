import React from "react";
import { Controller } from "react-hook-form";
import InputMask from "react-input-mask";

export default function index({ 
    label, 
    control,
    name = "",
    disabledHelperText = false,
    required = false,
    rules = {},
    ...props
}) {
  return (
    <div className="flex flex-col gap-2">
      <Controller
        control={control}
        name={name}
        defaultValue=""
        rules={{
          required: required ? "Введен неправильный код" : false,
        //   ...rules,
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <label htmlFor={name} className="text-lg">
              {label}
            </label>
            <div>
            <InputMask
              id={name}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              name={name}
              className={`w-full py-3 px-4 border border-[#000] outline-none rounded-lg focus:border-[#FF9910] ${error && "border-red-500"}`}
              mask="99999"
              maskChar="_"
              placeholder="99999"
            />
            {!disabledHelperText && (
              <p className="text-red-500 text-sm">{error?.message ?? " "}</p>
            )}
            </div>
          </>
        )}
      />
    </div>
  );
}
