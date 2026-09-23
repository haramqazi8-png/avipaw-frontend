import ActionForm from "./ActionForm";

export default function Donate() {
  return (
    <ActionForm
      type="Donation"
      eyebrow="SUPPORT AVIPAW RESCUE"
      title="Give them a second chance."
      description="Your donation helps provide food, shelter, medical treatment, emergency rescue and recovery for animals in our care."
      submitLabel="Send Donation Request →"
      fields={[
        {
          name: "name",
          label: "Full Name",
          required: true,
          placeholder: "Enter your full name"
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          required: true,
          placeholder: "Enter your email"
        },
        {
          name: "phone",
          label: "Phone",
          placeholder: "Enter your phone number"
        },
        {
          name: "donationAmount",
          label: "Donation Amount",
          type: "number",
          required: true,
          min: "1",
          placeholder: "Enter amount"
        },
        {
          name: "paymentMethod",
          label: "Payment Method",
          type: "select",
          defaultValue: "Easypaisa",
          options: [
            {
              value: "Easypaisa",
              label: "Easypaisa"
            },
            {
              value: "JazzCash",
              label: "JazzCash"
            },
            {
              value: "Bank Transfer",
              label: "Bank Transfer"
            },
            {
              value: "Other",
              label: "Other"
            }
          ]
        },
        {
          name: "message",
          label: "Message",
          type: "textarea",
          required: true,
          fullWidth: true,
          placeholder: "Tell us anything you would like us to know about your donation..."
        }
      ]}
    />
  );
}