import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) {
      toast({
        title: "Message required",
        description: "Please enter a message or question.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        toast({
          title: "Feedback sent!",
          description: "Thanks — we got it. We'll reply to your email if you left one.",
        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      // Fallback to mailto
      const subject = encodeURIComponent('Feedback from Homepage');
      const body = encodeURIComponent(
        `Name: ${name || 'Not provided'}\nEmail: ${email || 'Not provided'}\n\nMessage:\n${message}`
      );
      window.location.href = `mailto:thepromptspace@gmail.com?subject=${subject}&body=${body}`;
      
      toast({
        title: "Opening email client",
        description: "Submission failed. You can email us directly at thepromptspace@gmail.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 px-6">
      <div className="max-w-3xl mx-auto bg-gradient-to-b from-primary/5 to-transparent border border-border/20 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center mb-2 text-foreground">
          Ask a question or send feedback
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          We read every message. Help shape ThePromptSpace.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-foreground">Your name (optional)</Label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-foreground">Your email (optional)</Label>
            <Input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2"
            />
          </div>

          <div>
            <Label htmlFor="message" className="text-foreground">Message *</Label>
            <Textarea
              id="message"
              placeholder="Ask something or leave feedback..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-2 min-h-[120px]"
              required
            />
          </div>

          <p className="text-xs text-muted-foreground">
            By submitting you agree we may contact you about your message.
          </p>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-all"
          >
            {isSubmitting ? 'Sending...' : 'Send Feedback'}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default FeedbackForm;
