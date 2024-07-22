function FormRow({ error, children, label }) {
  return (
    <div className="flex flex-col gap-4">
      {label && (
        <label
          htmlFor={children.props.id}
          className="text-greyDark1 
         text-[16px] tracking-wide"
        >
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-accent1 text-[14px]">{error}</span>}
    </div>
  );
}

export default FormRow;
