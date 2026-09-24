import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { submitToStaticForms } from "@/lib/staticforms";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().min(1, "Company is required").max(100, "Company must be less than 100 characters"),
  role: z.string().trim().max(100, "Role must be less than 100 characters").optional(),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      await submitToStaticForms(
        {
          name: result.data.name,
          email: result.data.email,
          company: result.data.company,
          role: result.data.role,
          message: result.data.message,
        },
        `Demo request: ${result.data.name} (${result.data.company})`,
      );
      setIsSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset form after animation completes
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", role: "", message: "" });
      setErrors({});
      setSubmitError(null);
      setIsSubmitted(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative pointer-events-auto w-full max-w-md max-h-[90vh] overflow-y-auto border border-border bg-card p-6 shadow-2xl shadow-black/40"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 p-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {isSubmitted ? (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 border border-primary/30 bg-primary/10 mb-4">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-mono text-lg font-medium mb-2">Request Received</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Thank you for your interest. Our team will reach out within 24 hours.
                </p>
                <Button variant="outline" onClick={handleClose}>
                  Close
                </Button>
              </motion.div>
            ) : (
              /* Form */
              <>
                <div className="mb-6">
                  <h3 className="font-mono text-lg font-medium mb-1">Request a Demo</h3>
                  <p className="text-sm text-muted-foreground">
                    See AIONEXUS in action. Fill out the form and we'll be in touch.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="demo-name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full h-9 px-3 text-sm bg-background border border-border focus:border-primary/50 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-destructive">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="demo-email"
                      name="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-9 px-3 text-sm bg-background border border-border focus:border-primary/50 focus:outline-none transition-colors"
                      placeholder="you@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1.5">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="demo-company"
                      name="company"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full h-9 px-3 text-sm bg-background border border-border focus:border-primary/50 focus:outline-none transition-colors"
                      placeholder="Your company"
                    />
                    {errors.company && (
                      <p className="mt-1 text-xs text-destructive">{errors.company}</p>
                    )}
                  </div>

                  {/* Role */}
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1.5">
                      Role
                    </label>
                    <input
                      type="text"
                      id="demo-role"
                      name="role"
                      autoComplete="organization-title"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full h-9 px-3 text-sm bg-background border border-border focus:border-primary/50 focus:outline-none transition-colors"
                      placeholder="Your role"
                    />
                    {errors.role && (
                      <p className="mt-1 text-xs text-destructive">{errors.role}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="demo-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-3 py-2 text-sm bg-background border border-border focus:border-primary/50 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your use case (optional)"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                    )}
                  </div>

                  {submitError && (
                    <p className="text-xs text-destructive">{submitError}</p>
                  )}

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="hero"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Submitting..."
                    ) : (
                      <>
                        Request Demo
                        <ArrowRight className="h-3 w-3" />
                      </>
                    )}
                  </Button>

                  <p className="text-[0.65rem] text-muted-foreground text-center">
                    By submitting, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              </>
            )}
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
