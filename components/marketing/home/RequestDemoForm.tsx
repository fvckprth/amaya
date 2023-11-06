'use client'

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema } from '@/validators/formSchema';
import { analytics } from '@/lib/segment'


import Link from 'next/link';
import { Input } from "@/components/ui/input"
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
    FormField,
    FormLabel,
  } from "@/components/ui/form"

import { IndustrySelect } from "@/components/marketing/home/form/IndustrySelect";
import { IntPhoneInput } from "@/components/marketing/home/form/IntPhoneInput";
import { SizeSelect } from "@/components/marketing/home/form/SizeSelect";

import { supabase } from '@/lib/supabaseClient'

type RequestDemoFormSchema = z.infer<typeof formSchema>

const DEFAULT_FORM_VALUES = {
  firstName: '',
  lastName: '',
  businessEmail: '',
  mobileNumber: '',
  jobTitle: '',
  company: '',
  industry: '',
  size: '',
  message: '',
};

function transformFormData(formData: RequestDemoFormSchema) {
  return {
    first_name: formData.firstName,
    last_name: formData.lastName,
    business_email: formData.businessEmail,
    mobile_number: formData.mobileNumber,
    job_title: formData.jobTitle,
    company: formData.company,
    industry: formData.industry,
    size: formData.size,
    message: formData.message,
  };
}

interface CustomFormFieldProps {
  name: string;
  control: any;
  component: React.ElementType;
  componentProps?: any;
  children: React.ReactNode;
}

function CustomFormField({ name, control, component: Component, componentProps, children }: CustomFormFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="space-y-1.5 md:space-y-3">
          <FormLabel className='text-xs md:text-sm'>{children}</FormLabel>
          <Component {...field} value={field.value ?? ''} {...componentProps} />
        </div>
      )}
    />
  );
}

export function RequestDemoForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      setIsMobile(window.innerWidth <= 768);
    }, []);

    const form = useForm<RequestDemoFormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: DEFAULT_FORM_VALUES,
    }); 

    const router = useRouter();

    const onSubmit = async (data: RequestDemoFormSchema) => {
      console.log(form.formState.errors);
        setIsLoading(true);

        const adjustedValue = transformFormData(data);
    
        // Insert into Supabase
        const { error } = await supabase
            .from('demo_requests')
            .insert([adjustedValue]);
    
        if (error) {
            console.error('Error submitting form: ', error);
        } else {
            console.log('Form data:', data);
            // Redirect to page.tsx after form submission
            router.push('/success');
        }
    
        form.reset(DEFAULT_FORM_VALUES, {
            keepValues: false,
            keepErrors: false,
            keepDirty: false,
            keepIsValid: false,
            keepTouched: false,
            keepSubmitCount: false,
        });
    
        setIsLoading(false);
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
            className="w-full h-10 md:h-12 text-sm md:text-base bg-[#FBBC05]/25 text-[#FBBC05]"
            onClick={() => {
              analytics.track('Request Demo Button Clicked', {}, function(error) {
                if (error) {
                  console.log('Segment track error:', error);
                }
              });
            }}
            >
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
                <CustomFormField name="firstName" component={Input} componentProps={{ placeholder: "Willis" }} control={form.control}>
                  First Name
                </CustomFormField>
                <CustomFormField name="lastName" component={Input} componentProps={{ placeholder: "Smith" }} control={form.control}>
                  Last Name
                </CustomFormField>
                <CustomFormField name="businessEmail" component={Input} componentProps={{ placeholder: "willis@example.com" }} control={form.control}>
                  Business Email
                </CustomFormField>
                <CustomFormField name="mobileNumber" component={IntPhoneInput} control={form.control}>
                  Mobile Number
                </CustomFormField>
                <CustomFormField name="jobTitle" component={Input} componentProps={{ placeholder: "Executive" }} control={form.control}>
                  Job Title
                </CustomFormField>
                <CustomFormField name="company" component={Input} componentProps={{ placeholder: "ACME Corp Inc." }} control={form.control}>
                  Company / Institution
                </CustomFormField>
                <CustomFormField name="industry" component={IndustrySelect} control={form.control}>
                  Industry
                </CustomFormField>
                <CustomFormField name="size" component={SizeSelect} control={form.control}>
                  Size
                </CustomFormField>
                <CustomFormField name="message" component={Textarea} componentProps={{ placeholder: "How can we help?" }} control={form.control}>
                  Message
                </CustomFormField>
            </div>
            <SheetFooter className="p-4 md:p-6 border-t border-[#2E2E2E]/25 flex-shrink-0 bg-[#0F0F0F]">
                <div className="space-y-2 md:space-y-4 w-full">
                    <Button 
                        type="submit" 
                        className="w-full h-10 md:h-12 text-base bg-[#FBBC05]/25 text-[#FBBC05]"
                        disabled={!form.formState.isValid || isLoading}
                        onClick={form.handleSubmit(onSubmit)}>
                        Submit
                    </Button>
                  <div>
                    <p className="text-xs md:text-sm text-[#2E2E2E]">
                        View{" "}
                        <Link href="/privacy" className="hover:text-[#E7E6E9]/50 hover:underline underline-offset-4 no-underline">
                          privacy policy
                        </Link>
                        {" "}on how we <br/> use this information.
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