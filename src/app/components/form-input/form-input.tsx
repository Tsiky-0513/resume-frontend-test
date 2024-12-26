import React from "react";
import { Input } from "@material-tailwind/react";
import { TextInputProps } from "@/app/interfaces/form-input-interface";

export default function TextInput(props : TextInputProps) {
  return (
    <div>
      <Input
        size="md"
        label={props?.label}
        type={props?.type}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        error={props.error ? true : false}
        success={props.success ? true : false} 
        onPointerEnterCapture={undefined} 
        onPointerLeaveCapture={undefined} 
        crossOrigin={undefined}      
      />
      <span className="text-red-400 text-xs">{props.error}</span>
    </div>
  );
}
