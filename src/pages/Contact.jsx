import ActionForm from "./ActionForm";

export default function Contact() {
  return (
    <ActionForm
      type="Contact"
      eyebrow="CONTACT AVIPAW"
      title="We are here to listen."
      description="Have a question, need information about a rescued animal, or want to get in touch with our team? Send us a message."
      submitLabel="Send Message →"
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
          name: "message",
          label: "Your Message",
          type: "textarea",
          required: true,
          fullWidth: true,
          placeholder: "Write your message here..."
        }
      ]}
    />
  );
}