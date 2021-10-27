export interface InputProps {
  label: string
  type?: string
  name: string
}
export default function Input(props: Partial<InputProps>) {
  const { label, type = 'text', name, ...nativeProps } = props
  return (
    <>
      <label
        htmlFor={name}
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type={type}
        className="form-control rounded-pill text-lg"
        id={name}
        name={name}
        aria-describedby={name}
        placeholder={label}
        {...nativeProps}
      />
    </>
  )
}
