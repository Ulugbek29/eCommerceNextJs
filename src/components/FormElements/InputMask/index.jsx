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
          required: required ? "Неправильный номер телефона" : false,
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
              type="tel"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              name={name}
              className={`w-full py-3 px-4 border border-[#000] outline-none rounded-lg focus:border-[#FF9910] ${error && "border-red-500"}`}
              mask="+\9\9\8\(99)999-99-99"
              maskChar="_"
              placeholder="+998(99)999-99-99"
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
