import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";


const HFTextField = ({
  control,
  label,
  name = "",
  disabledHelperText = false,
  required = false,
  rules = {},
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      rules={{
        required: required ? "This is a required field" : false,
        ...rules,
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
            <label htmlFor={name} className="text-lg">
              {label}
            </label>
            <div>
          <TextField
            size="mediom"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            name={name}
            error={error}
            {...props}
          />
          {!disabledHelperText && (
              <p className="text-red-500 text-sm">{error?.message ?? " "}</p>
            )}
        </div>
        </>
      )}
    />
  );
};

export default HFTextField;
