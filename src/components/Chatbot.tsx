import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Send, Loader2, Mail, MessageCircle, Bot, Sparkles, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

interface Message {
    role: "user" | "assistant" | "system";
    content: string;
    showContactOptions?: boolean;
    isTyping?: boolean;
}

export function Chatbot() {
    // State for Lead Generation
    const [leadData, setLeadData] = useState<{ name: string; email: string; phone: string } | null>(null);
    const [showLeadForm, setShowLeadForm] = useState(true);

    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "👋 **Creo here!** I'm ready to help.", isTyping: false }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Sound effect (base64)
    const playSound = () => {
        if (isMuted) return;
        const audio = new Audio("data:audio/mp3;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAG1xUAALDkAAXG1iAAQA//cEmKd5BqQT2C7FXq7DAsw7gJwAGHgAAEDfJ05OBY1CnFnyTE7IMkI1H1qL/63CljvUadiGfqLO/7kBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuBzuB");
        audio.volume = 0.5;
        audio.play().catch(() => { });
    };

    const toggleChat = () => setIsOpen(!isOpen);
    const toggleMute = () => setIsMuted(!isMuted);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, showLeadForm]);

    // Send transcript to email
    const sendTranscript = async () => {
        if (!leadData || messages.length <= 1) return;

        const transcript = messages.map(msg =>
            `${msg.role === 'user' ? 'User' : 'Creo'}: ${msg.content}`
        ).join('\n\n');

        const emailBody = {
            name: leadData.name,
            email: leadData.email,
            phone: leadData.phone,
            message: `CHAT TRANSCRIPT:\n\n${transcript}`,
            _subject: `Chat Transcript - ${leadData.name}`,
            _captcha: "false"
        };

        try {
            await fetch("https://formsubmit.co/ajax/creathy23@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(emailBody),
                keepalive: true
            });
            console.log("Transcript sent");
        } catch (error) {
            console.error("Failed to send transcript", error);
        }
    };

    // Handle window close / refresh
    useEffect(() => {
        const handleUnload = () => {
            if (leadData && messages.length > 1) {
                sendTranscript();
            }
        };

        window.addEventListener("beforeunload", handleUnload);
        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === 'hidden') {
                handleUnload();
            }
        });

        return () => {
            window.removeEventListener("beforeunload", handleUnload);
            document.removeEventListener("visibilitychange", handleUnload);
        };
    }, [leadData, messages]);

    const handleLeadSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;

        if (name && email) {
            setLeadData({ name, email, phone });
            setShowLeadForm(false);
            setMessages(prev => [{ ...prev[0], content: `👋 **Hi ${name}!** I'm Creo. How can I help you today?` }]);
        }
    };

    const handleEndChat = () => {
        sendTranscript();
        setIsOpen(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messages: [
                        { role: "system", content: `Values: User Name: ${leadData?.name || 'Visitor'}, Email: ${leadData?.email}, Phone: ${leadData?.phone}` },
                        ...messages.slice(1).map(msg => ({
                            role: msg.role,
                            content: msg.content
                        })),
                        { role: userMessage.role, content: userMessage.content }
                    ],
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error("API Error Details:", errorData);
                const errorMessage = errorData.details
                    ? `${errorData.error}: ${errorData.details}`
                    : (errorData.error || `Status ${response.status}`);
                throw new Error(errorMessage);
            }

            const data = await response.json();
            let rawContent = data.choices[0].message.content;
            let showContactOptions = false;

            if (rawContent.includes("[[SHOW_CONTACT_OPTIONS]]")) {
                showContactOptions = true;
                rawContent = rawContent.replace("[[SHOW_CONTACT_OPTIONS]]", "").trim();
            }

            if (!rawContent && showContactOptions) {
                rawContent = "Please select an option below:";
            }

            const assistantMessage: Message = {
                role: "assistant",
                content: rawContent,
                showContactOptions,
                isTyping: true
            };

            playSound();
            setMessages((prev) => [...prev, assistantMessage]);

        } catch (error) {
            console.error("Chat Error:", error);
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: `Sorry, I encountered an issue: ${error instanceof Error ? error.message : "Unknown error"}.`, isTyping: false }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleTypingComplete = (index: number) => {
        setMessages((prev) => prev.map((msg, i) =>
            i === index ? { ...msg, isTyping: false } : msg
        ));
    };

    // Typewriter effect component
    const Typewriter = ({ text, speed = 30, onComplete }: { text: string; speed?: number; onComplete?: () => void }) => {
        const [displayedText, setDisplayedText] = useState("");
        const indexRef = useRef(0);

        useEffect(() => {
            const timer = setInterval(() => {
                setDisplayedText((prev) => {
                    const nextChar = text.charAt(indexRef.current);
                    indexRef.current++;
                    return prev + nextChar;
                });

                if (indexRef.current >= text.length) {
                    clearInterval(timer);
                    if (onComplete) onComplete();
                }
            }, speed);

            return () => clearInterval(timer);
        }, [text, speed, onComplete]);

        return <>{renderContent(displayedText)}</>;
    };

    const renderContent = (content: string) => {
        const parts = content.split(/(\*\*.*?\*\*|- .*)/g);
        return parts.map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={index}>{part.slice(2, -2)}</strong>;
            }
            return <span key={index}>{part}</span>;
        });
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            {/* Welcome Message Bubble */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="mb-4 mr-2 bg-white dark:bg-card text-foreground p-4 rounded-2xl shadow-xl border border-border/50 max-w-[250px] relative pointer-events-auto"
                    >
                        <p className="text-sm font-medium">
                            🤖 <strong>Creo here!</strong> I'm ready to help.
                        </p>
                        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white dark:bg-card border-b border-r border-border/50 rotate-45" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Chat Toggle Button */}
            <Button
                onClick={toggleChat}
                size="icon"
                className="h-14 w-14 rounded-full shadow-2xl bg-primary hover:bg-primary/90 text-primary-foreground pointer-events-auto"
            >
                {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
            </Button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 w-[90vw] md:w-[380px] h-[600px] max-h-[80vh] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden pointer-events-auto"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-border bg-muted/50 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <Bot className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-sm">Creo AI</h3>
                                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                        Online
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground" onClick={toggleMute}>
                                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                                </Button>
                                {leadData && (
                                    <Button variant="ghost" size="sm" className="h-8 text-xs text-muted-foreground hover:text-destructive" onClick={handleEndChat}>
                                        End Chat
                                    </Button>
                                )}
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground" onClick={toggleChat}>
                                    <X className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Content Area: Lead Form OR Chat Messages */}
                        {showLeadForm ? (
                            <div className="flex-1 p-6 flex flex-col justify-center bg-card">
                                <div className="mb-6 text-center">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Bot className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Welcome!</h3>
                                    <p className="text-sm text-muted-foreground">Please share your details to start chatting with Creo.</p>
                                </div>
                                <form onSubmit={handleLeadSubmit} className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold uppercase text-muted-foreground">Name</label>
                                        <input name="name" required className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold uppercase text-muted-foreground">Email</label>
                                        <input name="email" type="email" required className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none" placeholder="john@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold uppercase text-muted-foreground">Phone (Optional)</label>
                                        <input name="phone" type="tel" className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 outline-none" placeholder="+91 98765 43210" />
                                    </div>
                                    <Button type="submit" className="w-full">Start Chat</Button>
                                </form>
                            </div>
                        ) : (
                            <>
                                {/* Messages */}
                                <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
                                    {messages.map((message, index) => (
                                        <div
                                            key={index}
                                            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                                        >
                                            <div
                                                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm ${message.role === "user"
                                                    ? "bg-primary text-primary-foreground rounded-tr-none"
                                                    : "bg-muted text-foreground rounded-tl-none"
                                                    }`}
                                            >
                                                {message.role === "assistant" && message.isTyping ? (
                                                    <Typewriter
                                                        text={message.content}
                                                        speed={30}
                                                        onComplete={() => handleTypingComplete(index)}
                                                    />
                                                ) : (
                                                    renderContent(message.content)
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                    {isLoading && (
                                        <div className="flex justify-start">
                                            <div className="bg-muted rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                                                <div className="flex gap-1.5">
                                                    <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                                    <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                                    <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-bounce" />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Action Chips */}
                                    {(!isLoading && messages.length > 0 && messages[messages.length - 1].role === "assistant" && !messages[messages.length - 1].isTyping && messages[messages.length - 1].showContactOptions) && (
                                        <div className="flex gap-2 mt-2">
                                            <Button variant="outline" size="sm" className="gap-2 text-green-600 hover:text-green-700 hover:bg-green-50 w-full" onClick={() => window.open("https://wa.me/919885787676?text=Hi%20Creathy!", "_blank")}>
                                                <MessageCircle className="h-4 w-4" /> WhatsApp
                                            </Button>
                                            <Button variant="outline" size="sm" className="gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 w-full" onClick={() => window.location.href = "mailto:info@creathy.in"}>
                                                <Mail className="h-4 w-4" /> Email
                                            </Button>
                                        </div>
                                    )}

                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Input */}
                                <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-card">
                                    <div className="flex gap-2">
                                        <input
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            placeholder="Type your message..."
                                            className="flex-1 bg-muted px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20"
                                            disabled={isLoading}
                                        />
                                        <Button
                                            type="submit"
                                            size="icon"
                                            className="rounded-xl shrink-0"
                                            disabled={!input.trim() || isLoading}
                                        >
                                            <Send className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </form>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
