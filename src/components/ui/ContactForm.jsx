"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { sendEmail } from "../../../action/Contact";

const template = ({ name, email, message }) => {
    return `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
      color: #333;
    }
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background: #ffffff;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    .email-header {
      background: linear-gradient(45deg, #6a11cb, #2575fc);
      padding: 20px;
      color: #ffffff;
      text-align: center;
    }
    .email-header h1 {
      margin: 0;
      font-size: 24px;
    }
    .email-body {
      padding: 20px;
    }
    .email-body p {
      margin: 10px 0;
      line-height: 1.6;
    }
    .email-body .label {
      font-weight: bold;
      color: #6a11cb;
    }
    .email-footer {
      text-align: center;
      background: #f4f4f4;
      padding: 10px;
      font-size: 12px;
      color: #666;
    }
    .button {
      display: inline-block;
      background: #6a11cb;
      color: #ffffff;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 4px;
      margin-top: 20px;
      font-size: 14px;
    }
    .button:hover {
      background: #2575fc;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <!-- Header -->
    <div class="email-header">
      <h1>New Contact Message</h1>
    </div>
    
    <!-- Body -->
    <div class="email-body">
      <p><span class="label">Name:</span> ${name}</p>
      <p><span class="label">Email:</span> ${email}</p>
      <p><span class="label">Message:</span></p>
      <p>${message}</p>
      
      <!-- Call-to-action button -->
      <a href="mailto:${email}" class="button">Reply to ${name}</a>
    </div>
    
    <!-- Footer -->
    <div class="email-footer">
      <p>© 2024 Salil Lakra | Contact Form Message</p>
    </div>
  </div>
</body>
</html>
`
}


const ContactForm = () => {
    const [loading, setLoading] = React.useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await sendEmail({
                senderName: data.name,
                subject: `Message from ${data.name}`,
                textPart: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
                htmlPart: template(data),
            })
            setLoading(false);
            toast({
                title: "Message Sent",
                description: "Thank you for contacting me! I'll get back to you soon.",
            })

        } catch (error) {
            setLoading(false);
            console.error("Error sending email:", error);
            toast({
                varient: "destructive",
                title: "Error",
                description: "Failed to send message. Please try again later.",
            });
            return;

        }
        reset();
    };

    return (
        <div className=" w-full px-3 bg-gradient-to-b from-purple-950 via-gray-900 to-cyan-900 text-white flex flex-col items-center justify-center relative overflow-hidden">
            <div className="max-w-xl h-fit w-full mx-auto my-32 sm:my-20 bg-gray-900 p-6 rounded-md shadow-lg">
                <h2 className="text-2xl font-bold text-center text-white mb-6">
                    Want to say hi? 👋
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <Label htmlFor="name" className="text-white">
                            Name
                        </Label>
                        <Input
                            id="name"
                            placeholder="Your Name"
                            {...register("name", { required: "Name is required" })}
                            className="mt-1"
                        />
                        {errors.name && (
                            <p className="text-red-500 mt-2 text-sm">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Email Field */}
                    <div>
                        <Label htmlFor="email" className="text-white">
                            Email
                        </Label>
                        <Input
                            id="email"
                            placeholder="Your Email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email address",
                                },
                            })}
                            className="mt-1"
                        />
                        {errors.email && (
                            <p className="text-red-500   mt-2 text-sm">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Message Field */}
                    <div>
                        <Label htmlFor="message" className="text-white">
                            Message
                        </Label>
                        <Textarea
                            id="message"
                            placeholder="Your Message"
                            {...register("message", { required: "Message is required" })}
                            className="mt-1"
                        />
                        {errors.message && (
                            <p className="text-red-500  mt-2 text-sm">{errors.message.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="w-full bg-pink-500 hover:bg-pink-400 text-white"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
