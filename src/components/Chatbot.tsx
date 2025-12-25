import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X, Send, Loader2, Mail, MessageCircle, Bot, Sparkles, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import { getSystemPrompt } from "@/data/websiteContent";

interface Message {
    role: "user" | "assistant" | "system";
    content: string;
    showContactOptions?: boolean;
    isTyping?: boolean; // New flag for typing effect
}

const POP_SOUND = "data:audio/mp3;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAG84AAD5T/o+1+/6bad8AAD2BH5f8//+49wAA3UMuUAAAAA6wAAAAAP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD/AP8A/wD";

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "assistant", content: "Hi! I'm Creo, your virtual assistant. How can I help you with Creathy's services today?", isTyping: false }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSoundEnabled, setIsSoundEnabled] = useState(true);
    const scrollRef = useRef<HTMLDivElement>(null);
    const soundRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        soundRef.current = new Audio(POP_SOUND);
    }, []);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isOpen]);

    const playSound = () => {
        if (isSoundEnabled && soundRef.current) {
            soundRef.current.currentTime = 0;
            soundRef.current.play().catch(e => console.log("Audio play failed", e));
        }
    };

    // Typewriter effect component
    const Typewriter = ({ text, onComplete }: { text: string; onComplete?: () => void }) => {
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
            }, 15); // Adjust speed here (lower = faster)

            return () => clearInterval(timer);
        }, [text, onComplete]);

        return <>{renderContent(displayedText)}</>;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            // Call the secure serverless function instead of Groq directly
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messages: messages.slice(1).map(msg => ({
                        role: msg.role,
                        content: msg.content // Don't send showContactOptions logic or system prompt
                    })),
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error("API Error Details:", errorData);
                const errorMessage = errorData.error || `Status ${response.status}`;
                throw new Error(errorMessage);
            }

            const data = await response.json();
            let rawContent = data.choices[0].message.content;
            let showContactOptions = false;

            if (rawContent.includes("[[SHOW_CONTACT_OPTIONS]]")) {
                showContactOptions = true;
                rawContent = rawContent.replace("[[SHOW_CONTACT_OPTIONS]]", "").trim();
            }

            // Fallback if the AI only sent the tag
            if (!rawContent && showContactOptions) {
                rawContent = "Please select an option below:";
            }

            const assistantMessage: Message = {
                role: "assistant",
                content: rawContent,
                showContactOptions,
                isTyping: true // Start typing effect
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

    const renderContent = (content: string) => {
        const parts = content.split(/(\*\*.*?\*\*)/g);
        return parts.map((part, index) => {
            if (part.startsWith("**") && part.endsWith("**")) {
                return <strong key={index}>{part.slice(2, -2)}</strong>;
            }
            return part;
        });
    };

    return (
        <div className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end gap-2">
            {isOpen && (
                <Card className="w-[90vw] sm:w-[380px] shadow-2xl border-primary/20 animate-in slide-in-from-bottom-5 fade-in duration-300 overflow-hidden">
                    {/* Modern Header with Gradient */}
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground backdrop-blur-md">
                        <CardTitle className="text-base font-semibold flex items-center gap-2.5">
                            <div className="p-1.5 bg-white/20 rounded-full backdrop-blur-sm">
                                <Bot className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span>Creo AI</span>
                                <span className="text-[10px] font-normal opacity-90 flex items-center gap-1">
                                    <Sparkles className="w-3 h-3 text-accent-foreground" />
                                    Online
                                </span>
                            </div>
                        </CardTitle>
                        <div className="flex items-center gap-1">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-primary-foreground hover:bg-white/20 hover:text-white rounded-full transition-colors"
                                onClick={() => setIsSoundEnabled(!isSoundEnabled)}
                                title={isSoundEnabled ? "Mute" : "Unmute"}
                            >
                                {isSoundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-primary-foreground hover:bg-white/20 hover:text-white rounded-full transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                <X className="h-5 w-5" />
                            </Button>
                        </div>
                    </CardHeader>

                    <CardContent className="p-0 bg-background/95 backdrop-blur-supports-[backdrop-filter]:bg-background/60">
                        <ScrollArea className="h-[400px] p-4">
                            <div className="flex flex-col gap-4">
                                {messages.map((message, index) => (
                                    <div key={index} className={`flex flex-col gap-1 ${message.role === "user" ? "items-end" : "items-start"}`}>
                                        <div
                                            className={cn(
                                                "w-fit max-w-[85%] rounded-2xl px-4 py-3 text-sm break-words whitespace-pre-wrap shadow-sm",
                                                message.role === "user"
                                                    ? "bg-primary text-primary-foreground rounded-tr-sm"
                                                    : "bg-muted text-foreground border border-border/50 rounded-tl-sm"
                                            )}
                                        >
                                            {message.isTyping && message.role === "assistant" ? (
                                                <Typewriter
                                                    text={message.content}
                                                    onComplete={() => handleTypingComplete(index)}
                                                />
                                            ) : (
                                                renderContent(message.content)
                                            )}
                                        </div>

                                        {/* Show buttons only if typing is complete or not typing */}
                                        {!message.isTyping && message.showContactOptions && (
                                            <div className="flex gap-2 mt-1 animate-in fade-in slide-in-from-top-2 duration-300">
                                                <Button
                                                    size="sm"
                                                    className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2 h-8 rounded-full shadow-sm"
                                                    onClick={() => window.open("https://wa.me/919885787676", "_blank")}
                                                >
                                                    <MessageCircle className="h-3.5 w-3.5" />
                                                    WhatsApp
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="secondary"
                                                    className="gap-2 h-8 rounded-full shadow-sm bg-background border border-border hover:bg-accent/10"
                                                    onClick={() => window.open("mailto:info@creathy.in", "_blank")}
                                                >
                                                    <Mail className="h-3.5 w-3.5" />
                                                    Email
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                                {isLoading && (
                                    <div className="flex w-fit max-w-[85%] flex-col gap-2 rounded-2xl rounded-tl-sm px-4 py-3 text-sm bg-muted text-foreground border border-border/50">
                                        <div className="flex gap-1 items-center">
                                            <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                            <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                            <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce"></div>
                                        </div>
                                    </div>
                                )}
                                <div ref={scrollRef} />
                            </div>
                        </ScrollArea>
                    </CardContent>
                    <CardFooter className="p-3 border-t bg-background/95 backdrop-blur">
                        <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
                            <Input
                                placeholder="Type your message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="flex-1 focus-visible:ring-primary rounded-full px-4 border-muted-foreground/20"
                            />
                            <Button type="submit" size="icon" disabled={isLoading || !input.trim()} className="rounded-full w-10 h-10 shadow-md">
                                <Send className="h-4 w-4" />
                            </Button>
                        </form>
                    </CardFooter>
                </Card>
            )}

            {/* Welcome Message Bubble */}
            {!isOpen && (
                <div className="animate-in slide-in-from-bottom-2 fade-in duration-700 delay-500">
                    <div className="relative bg-white dark:bg-card text-foreground px-4 py-3 rounded-2xl shadow-lg border border-border/50 mb-2 max-w-[220px]">
                        <p className="text-sm font-medium leading-tight">🤖 <strong>Creo here!</strong> I'm ready to help.</p>
                        {/* Arrow */}
                        <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white dark:bg-card border-b border-r border-border/50 rotate-45"></div>
                    </div>
                </div>
            )}

            <Button
                onClick={() => setIsOpen(!isOpen)}
                size="icon"
                className="h-14 w-14 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.16)] transition-all duration-300 hover:scale-105 bg-primary hover:bg-primary/90"
            >
                {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-7 w-7" />}
                <span className="sr-only">Toggle Chat</span>
            </Button>
        </div>
    );
}
