import * as React from 'react';
export declare type FormLabelElement = JSX.Element;
export declare type FormErrorElement = JSX.Element;
export declare type FormElement = JSX.Element;
export declare type FormGroupElement = JSX.Element;
export declare type FormGroupChildElement = FormElement | FormLabelElement | FormErrorElement;
export declare type FormChildElement = FormElement | FormGroupElement | React.ReactNode;
export interface ComponentProps {
    className?: string;
    override?: boolean;
    style?: React.CSSProperties;
}
export interface FormProps {
    placeholder?: string;
    defaultValue?: any;
    id: string;
}
export interface ValidationProps {
    validate: (v: any) => boolean;
    errorMsg?: string;
}
export interface FormContainerProps {
    action?: string;
    method?: 'post' | 'get';
    children: FormChildElement | FormChildElement[];
}
export declare const Form: ({ action, method, children }: FormContainerProps) => JSX.Element;
export interface FormGroupProps {
    children: FormGroupChildElement | FormGroupChildElement[];
    row?: boolean;
}
export declare const FormGroup: ({ children, row, className, override, style }: FormGroupProps & ComponentProps) => FormGroupElement;
export interface InputProps {
    type: 'text' | 'number' | 'email' | 'password';
}
export declare const Input: ({ type, className, override, style, placeholder, defaultValue, id }: InputProps & ComponentProps & FormProps & ValidationProps) => FormElement;
export interface LabelProps {
    children?: string;
    value?: string;
    target?: string;
}
export declare const Label: ({ children, value, target, className, override, style }: LabelProps & ComponentProps) => FormLabelElement;
