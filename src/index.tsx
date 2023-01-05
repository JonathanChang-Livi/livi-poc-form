import * as React from 'react'

export type FormLabelElement = JSX.Element
export type FormErrorElement = JSX.Element
export type FormElement = JSX.Element
export type FormGroupElement = JSX.Element
export type FormGroupChildElement = FormElement | FormLabelElement | FormErrorElement
export type FormChildElement = FormElement | FormGroupElement | React.ReactNode

export interface ComponentProps {
  className?: string
  override?: boolean
  style?: React.CSSProperties
}

export interface FormProps {
  placeholder?: string
  defaultValue?: any
  id: string
}

export interface ValidationProps {
  validate: (v: any) => boolean
  errorMsg?: string
}

export interface FormContainerProps {
  action?: string
  method?: 'post' | 'get'
  children: FormChildElement | FormChildElement[]
}

export const Form = ({ action, method, children }: FormContainerProps) => {
  return (
    <form action={action} method={method}>
      {children}
    </form>
  )
}

export interface FormGroupProps {
  children: FormGroupChildElement | FormGroupChildElement[]
  row?: boolean
}

export const FormGroup = ({ children, row, className, override, style }: FormGroupProps & ComponentProps): FormGroupElement => {
  const fgClass = `flex ${row && row ? 'flex-row' : 'flex-col'} gap-2`
  return (
    <div className={`${override && override ? '' : fgClass} ${className || ''}`} style={style}>
      {children}
    </div>
  )
}

export interface InputProps {
  type: 'text' | 'number' | 'email' | 'password'
}
export const Input = ({ type, className, override, style, placeholder, defaultValue, id }: InputProps & ComponentProps & FormProps & ValidationProps): FormElement => {
  const textClass = `border-primary border rounded-lg p-3`
  return (
    <input className={`${override && override ? '' : textClass} ${className || ''}`} style={style}
      placeholder={placeholder} id={id} name={id} value={defaultValue} type={type}></input>
  )
}

export interface LabelProps {
  children?: string
  value?: string
  target?: string
}
export const Label = ({ children, value, target, className, override, style}: LabelProps & ComponentProps): FormLabelElement => {
  const labelClass = `font-semibold text-sm`
  return (
    <label htmlFor={target} className={`${override && override ? '' : labelClass} ${className || ''}`} style={style}>{children || value || ''}</label>
  )
}
