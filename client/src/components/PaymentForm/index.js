import FormField from "../FormField";

function PaymentForm(){
    return (
        <>
          <FormField
            name="name"
            label="Name"
            type="text"
            placeholder="Name"
            required
          />
          <FormField
            name="email"
            label="Email"
            type="email"
            placeholder="name@example.com"
            required
          />
          <FormField
            name="address"
            label="Address"
            type="text"
            placeholder="101 Main St"
            required
          />
          <FormField
            name="city"
            label="City"
            type="text"
            placeholder="City"
            required
          />
          <FormField
            name="state"
            label="State"
            type="text"
            placeholder="State"
            required
          />
          <FormField
            name="zip"
            label="ZIP"
            type="text"
            placeholder="60077"
            required
          />
        </>
      );
}


export default PaymentForm;