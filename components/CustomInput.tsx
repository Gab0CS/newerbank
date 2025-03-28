import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { z } from 'zod';
import { Control, FieldPath } from 'react-hook-form';
import { authFormSchema } from '@/lib/utils';


const formSchema = authFormSchema('sign-up');
declare interface CustomInput {
    control: Control<z.infer<typeof formSchema>>;
    name: FieldPath<z.infer<typeof formSchema>>;
    label: string;
    placeholder: string;
}

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <div className="form-item"> 
                <FormLabel className="form-label">
                    {label}
                </FormLabel>
                <div className="flex w-full flex-col">
                    <FormControl>
                        <Input 
                        placeholder={placeholder} 
                        className="input-class" 
                        {...field}
                        type={name === "password" ? "password" : "text"}
                        />
                    </FormControl>
                    <FormMessage className="form-message"/>
                </div>

            </div>
        )}
    />
  )
}

export default CustomInput