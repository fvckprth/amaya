'use client'

import { useState, useEffect } from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from '../validators/formSchema';

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Textarea } from '@/components/ui/textarea';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

import { IndustrySelect } from "./form/IndustrySelect";
import { IntPhoneInput } from "./form/IntPhoneInput";
import { SizeSelect } from "./form/SizeSelect";

type RequestDemoFormSchema = z.infer<typeof formSchema>

export function RequestDemoForm() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const form = useForm<RequestDemoFormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            businessEmail: '',
            mobileNumber: '',
            jobTitle: '',
            company: '',
            industry: '',
            size: '',
            message: '',
        },
    }); 

    const { formState: { errors } } = form;

    function onSubmit(value:RequestDemoFormSchema) {
        console.log('Form data:', value);
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
            type="button"
            variant="default" 
            className="w-full h-10 md:h-12 text-sm md:text-base bg-[#FBBC05]/25 text-[#FBBC05]">
              Request Demo
        </Button>
      </SheetTrigger>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
        <SheetContent 
            side={isMobile ? "bottom" : "right"} 
            className="flex flex-col gap-0 border-[#2E2E2E]/25"
            style={isMobile ? { height: '72vh' } : {}}
        >
            <SheetHeader className="flex-shrink-0 p-4 md:p-6 border-b border-[#2E2E2E]/25">
            <SheetTitle className='text-left text-lg md:text-2xl'>
                Request Demo
            </SheetTitle>
            <SheetDescription className='text-left text-sm md:text-base'>
                Interested in solving your <br/>
                problems with Amaya?
            </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col space-y-3 md:space-y-6 px-4 md:px-6 py-4 md:py-8 overflow-y-auto flex-grow">
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <div className="space-y-1.5 md:space-y-3">
                        <FormLabel className='text-xs md:text-sm'>
                            First Name
                        </FormLabel>
                        <Input {...field} placeholder="Willis"/>
                        {errors.firstName && <FormMessage>{errors.firstName.message}</FormMessage>}
                      </div>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <div className="space-y-1.5 md:space-y-3">
                        <FormLabel className='text-xs md:text-sm'>Last Name</FormLabel>
                        <Input {...field} placeholder="Smith"/>
                      </div>
                    )}
                />
                <FormField
                    control={form.control}
                    name="businessEmail"
                    render={({ field }) => (
                      <div className="space-y-1.5 md:space-y-3">
                        <FormLabel className='text-xs md:text-sm'>Business Email</FormLabel>
                        <Input {...field} placeholder="willis@example.com"/>
                      </div>
                    )}
                />
                <FormField
                    control={form.control}
                    name="mobileNumber"
                    render={({ field }) => (
                      <div className="space-y-1.5 md:space-y-3">
                        <FormLabel className='text-xs md:text-sm'>Mobile Number</FormLabel>
                        <IntPhoneInput name="mobileNumber" control={form.control} />
                      </div>
                    )}
                />
                <FormField
                    control={form.control}
                    name="jobTitle"
                    render={({ field }) => (
                      <div className="space-y-1.5 md:space-y-3">
                        <FormLabel className='text-xs md:text-sm'>Job Title</FormLabel>
                        <Input {...field} placeholder="Executive"/>
                      </div>
                    )}
                />
                <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <div className="space-y-1.5 md:space-y-3">
                        <FormLabel className='text-xs md:text-sm'>Company / Institution</FormLabel>
                        <Input {...field} placeholder="ACME Corp Inc."/>
                      </div>
                    )}
                />
                <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <div className="space-y-1.5 md:space-y-3">
                        <FormLabel className='text-xs md:text-sm'>Industry</FormLabel>
                        <IndustrySelect value={field.value} onChange={field.onChange} />
                      </div>
                    )}
                />
                <FormField
                    control={form.control}
                    name="size"
                    render={({ field }) => (
                      <div className="space-y-1.5 md:space-y-3">
                        <FormLabel className='text-xs md:text-sm'>Size</FormLabel>
                        <SizeSelect value={field.value} onChange={field.onChange} />
                      </div>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <div className="space-y-1.5 md:space-y-3">
                        <FormLabel className='text-xs md:text-sm'>Message</FormLabel>
                        <Textarea {...field} placeholder="How can we help?" />
                      </div>
                    )}
                />
            </div>
            <SheetFooter className="p-4 md:p-6 border-t border-[#2E2E2E]/25 flex-shrink-0 bg-[#0F0F0F]">
                <div className="space-y-2 md:space-y-4 w-full">
                    <Button 
                        type="submit" 
                        className="w-full h-10 md:h-12 text-sm md:text-base bg-[#FBBC05]/25 text-[#FBBC05]"
                        onClick={() => {
                            const data = form.getValues();
                            onSubmit(data as RequestDemoFormSchema);
                        }}>
                        Submit
                    </Button>
                    <div>
                        <p className="text-xs md:text-sm text-[#2E2E2E]">
                            View privacy policy on how we <br/>
                            will handle this information.
                        </p>
                    </div>
                </div>
            </SheetFooter>
        </SheetContent>
        </form>
    </Form>
    </Sheet>
  )
}