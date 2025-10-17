// Contact page data
export const contactData = {
  // Page title and description
  pageTitle: "GET IN TOUCH",
  pageDescription: "Have a project in mind? Let's create something amazing together.",

  // Contact information
  contactInfo: [
    {
      title: "Email Us",
      description: "For general inquiries and project discussions",
      detail: "Info@nextgendesignhub.com",
      icon: "📧"
    },
    {
      title: "Call Us",
      description: "For immediate assistance and quick questions",
      detail: "+974 71455795",
      icon: "📞"
    },
    {
      title: "Our Office",
      description: "Headquarters and creative studio",
      detail: "SVAG Design Hub",
      icon: "🏢"
    }
  ],

  // Map information
  mapInfo: {
    title: "Our Location",
    placeholderText: "Interactive Map",
    address: "123 Creative Street, Design City"
  },

  // Form fields
  formFields: [
    {
      id: "name",
      label: "Your Name",
      placeholder: "John Doe",
      type: "text",
      required: true
    },
    {
      id: "email",
      label: "Email Address",
      placeholder: "john@example.com",
      type: "email",
      required: true
    },
    {
      id: "subject",
      label: "Subject",
      placeholder: "Project Inquiry",
      type: "text",
      required: true
    },
    {
      id: "message",
      label: "Your Message",
      placeholder: "Tell us about your project...",
      type: "textarea",
      rows: 5,
      required: true
    }
  ],

  // Business hours
  businessHours: [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ],

  // Form button text
  buttonText: "Send Message",

  // Success message
  successMessage: "Thank you for your message! We will get back to you soon."
};