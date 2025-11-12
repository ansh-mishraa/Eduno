"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {Phone} from "lucide-react"
import{Mail} from "lucide-react"
import {MessageCircle} from "lucide-react"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, Send } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  branch: z.string().min(1, "Please select your branch"),
  enrollmentNumber: z.string().min(10, "Invalid enrollment number").max(15, "Invalid enrollment number"),
  feedback: z.string().min(10, "Feedback must be at least 10 characters"),
})

export default function ContactPage() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      branch: "",
      enrollmentNumber: "",
      feedback: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true)
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwT1KwYI-CpGynyURqq54xcwXhagcWqagjz21WYSgad2TYbJN7OEgT066RE39eYHGkL/exec', {
        method: 'POST',
        body: JSON.stringify(values),
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      toast({
        title: "Success!",
        description: "Your feedback has been submitted successfully.",
      })

      form.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-1">Please Give Your Valuable Feedback</h1>
        <p className="text-gray-400 text-center mb-8">It will just take 30 seconds</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                We value your feedback! Please share your thoughts, suggestions, or concerns with us.
                Your input helps us improve and provide better resources for everyone.
              </p>
              <div className="space-y-2">
              <p className="flex items-center gap-2">
  <Mail className="w-5 h-5 text-blue-500" />
  {/* <span className="font-semibold">Email:</span> */}
  <a 
    href="mailto:khushi178shrivastava@gmail.com" 
    className="text-muted-foreground underline hover:text-blue-500"
  >
    khushi178shrivastava@gmail.com
  </a>
</p>

                {/* <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-500" />
                  <span className="font-semibold">Phone:</span>
                  <span className="text-muted-foreground">+91 7771003775</span>
                </p> */}
                <p className="flex items-center gap-2">
  <MessageCircle className="w-5 h-5 text-blue-500" />
  {/* <span className="font-semibold">Phone:</span> */}
  <a
    href="https://chat.whatsapp.com/D3sGnPCE4HrH2hcDOcMcKK"
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground underline hover:text-blue-500"
  >
    Join WhatsApp Group
  </a>
</p>

              </div>
            </div>
          </Card>

          <Card className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} disabled={isLoading} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="branch"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Branch</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your branch" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="IT">Information Technology</SelectItem>
                          <SelectItem value="CS">Computer Science</SelectItem>
                          <SelectItem value="EC">Electronics & Communication</SelectItem>
                          <SelectItem value="ME">Mechanical Engineering</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="enrollmentNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Enrollment Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your enrollment number" {...field} disabled={isLoading} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="feedback"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Feedback</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Write your feedback here..." 
                          className="min-h-[120px]"
                          {...field} 
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Feedback
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </div>
  )
}