const FormField = ({ label, type, name, placeholder, required }) => {
    return (
      <>
        <label htmlFor={name}>{label}</label>
        <input name={name} type={type} placeholder={placeholder} required />
      </>
    );
  };
  
  export default FormField;