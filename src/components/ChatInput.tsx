"use client";

import React, { useState } from "react";
import { AudioManager } from "./whisper/AudioManager";
import { useTranscriber } from "../hooks/useTranscriber";
import { Textarea } from "./ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Graphics } from "./Graphics";
import { SearchTitle } from "./Title";
import Transcript from "./whisper/Transcript";
import chalk from "chalk";
import { cn } from "@/lib/utils";
import textToSpeech from "@/elevenlabs";
import AudioPlayer from "./ConvertEleven";

type Message = {
    type: string;
    message: string;
    fromUser: boolean;
};

const wsClient = new WebSocket("ws://localhost:6969");
let initialized = false;

const ChatInput = () => {
    const transcriber = useTranscriber();
    const [message, setMessage] = useState("");
    const [serverMessages, setServerMessages] = useState<Message[]>([
        {
            type: "info",
            message: "Hi! I'm Grey, your personal assistant. Ask me anything!",
            fromUser: false,
        },
    ]);

    if (!initialized) {
        wsClient.addEventListener("open", () => console.log("Connected to server"));

        wsClient.addEventListener("message", (messageEvent: MessageEvent) => {
            console.log(chalk.cyan("Server raw response:"), messageEvent.data);
            const parsed = JSON.parse(messageEvent.data);

            setServerMessages((prev) => [
                ...prev,
                {
                    type: parsed.type,
                    message: parsed.msg,
                    fromUser: false,
                },
            ]);
        });
        initialized = true;
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();

            setServerMessages((prev) => [
                ...prev,
                { type: "msg", message, fromUser: true },
            ]);
            wsClient.send(JSON.stringify({ type: "msg", msg: message }));
            setMessage("");
        }
    };

    return (
        <div className="flex flex-col items-center w-full h-full p-4">
            <div className="max-w-4xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4">
                <div
                    id="messageContainer"
                    className="overflow-y-scroll max-h-[400px] mb-4 p-2 bg-gray-50 dark:bg-gray-900 rounded-lg"
                >
                    {serverMessages.map((msg, index) => (
                        <div
                            key={index}
                            className={cn(
                                "flex my-2",
                                msg.fromUser ? "justify-end" : "justify-start"
                            )}
                        >
                            <div
                                className={cn(
                                    "p-3 rounded-xl shadow",
                                    msg.fromUser
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-200 dark:bg-gray-700 dark:text-gray-200"
                                )}
                            >
                                {msg.message}
                            </div>
                        </div>
                    ))}
                </div>
                <Tabs defaultValue="text" className="w-full">
                    <TabsList className="mb-2">
                        <TabsTrigger value="text">Text</TabsTrigger>
                        <TabsTrigger value="speech">Speech</TabsTrigger>
                    </TabsList>
                    <TabsContent value="text">
                        <Textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Type your message here..."
                            className="w-full border-2 rounded-lg p-2"
                        />
                    </TabsContent>
                    <TabsContent value="speech">
                        <AudioManager
                            transcriber={transcriber}
                            wsClient={wsClient}
                            setServerMessages={setServerMessages}
                        />
                    </TabsContent>
                </Tabs>
            </div>

            <div className="w-full max-w-4xl mt-6">
                <Transcript transcribedData={transcriber.output} />
                {serverMessages.at(-1)?.type === "msg" && (
                    <AudioPlayer
                        message={serverMessages.at(-1)?.message || ""}
                        key={serverMessages.length}
                    />
                )}
            </div>
        </div>
    );
};

export default ChatInput;
