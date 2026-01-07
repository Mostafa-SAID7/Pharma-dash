import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { 
  HelpCircle, 
  Book, 
  MessageCircle, 
  Mail, 
  Video,
  FileText,
  ExternalLink,
  Search,
  ChevronRight
} from "lucide-react";

const helpTopics = [
  {
    icon: Book,
    title: "Getting Started Guide",
    description: "Learn the basics of using PharmaSocial AI",
    link: "#"
  },
  {
    icon: FileText,
    title: "Compliance Guidelines",
    description: "Understand pharmacy social media regulations",
    link: "#"
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step visual guides",
    link: "#"
  },
  {
    icon: MessageCircle,
    title: "AI Content Tips",
    description: "Best practices for AI-generated content",
    link: "#"
  }
];

const faqs = [
  {
    question: "How does the AI compliance engine work?",
    answer: "Our AI compliance engine automatically scans all content for pharmacy-specific regulatory issues, including medication claims, dosage information, and health claims that may violate regulations."
  },
  {
    question: "What content requires pharmacist approval?",
    answer: "Any content that references specific medications, dosages, treatment recommendations, or health conditions automatically requires approval from a licensed pharmacist before publishing."
  },
  {
    question: "Can I customize the AI content tone?",
    answer: "Yes, you can set a default tone (clinical, friendly, promotional, or educational) in AI Settings. You can also adjust the tone for individual posts in the Draft Center."
  },
  {
    question: "How do I connect my Facebook Page?",
    answer: "Go to Settings > Integrations, click 'Connect Facebook', and follow the prompts to authorize PharmaSocial to manage your pharmacy's Facebook Page."
  },
  {
    question: "What happens if content is flagged by compliance?",
    answer: "Flagged content is automatically blocked from publishing and moved to the Compliance Queue. The AI provides suggested fixes, and a pharmacist can approve, modify, or reject the content."
  }
];

const HelpSupport = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Help & Support</h1>
          <p className="text-muted-foreground">Find answers, tutorials, and contact support</p>
        </div>

        {/* Search */}
        <div className="card-elevated p-6">
          <h3 className="font-semibold text-foreground mb-4">How can we help you?</h3>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for help articles, tutorials, or FAQs..."
              className="w-full h-12 pl-12 pr-4 rounded-xl bg-muted border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-4">
          {helpTopics.map((topic) => (
            <a
              key={topic.title}
              href={topic.link}
              className="card-elevated p-4 flex items-start gap-4 hover:shadow-elevated transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <topic.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {topic.title}
                </h4>
                <p className="text-sm text-muted-foreground">{topic.description}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>

        {/* FAQs */}
        <div className="card-elevated p-6">
          <h3 className="font-semibold text-foreground mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group">
                <summary className="flex items-center justify-between p-4 rounded-lg bg-muted/50 cursor-pointer hover:bg-muted transition-colors list-none">
                  <span className="font-medium text-foreground">{faq.question}</span>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                </summary>
                <div className="p-4 text-muted-foreground">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="card-elevated p-6">
          <h3 className="font-semibold text-foreground mb-4">Need More Help?</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Live Chat</h4>
                  <p className="text-sm text-muted-foreground">Available 9 AM - 6 PM</p>
                </div>
              </div>
              <Button variant="outline" className="w-full">Start Chat</Button>
            </div>
            <div className="p-4 rounded-xl border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Email Support</h4>
                  <p className="text-sm text-muted-foreground">support@pharmasocial.ai</p>
                </div>
              </div>
              <Button variant="outline" className="w-full">Send Email</Button>
            </div>
          </div>
        </div>

        {/* Documentation Link */}
        <div className="card-elevated p-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Book className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Full Documentation</h4>
                <p className="text-sm text-muted-foreground">Browse our complete knowledge base</p>
              </div>
            </div>
            <Button className="gap-2">
              View Docs
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default HelpSupport;
