"use client"

import React from 'react';
import { Controller } from 'react-hook-form';

import { Command, CommandInput, CommandGroup, CommandItem, CommandEmpty } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import Input from 'react-phone-number-input/input';
import { CustomInput } from '@/components/ui/input';
import { countries } from "@/data/countries";
import Image from 'next/image';

interface IntPhoneInputProps {
    name: string;
    control: any;
}

export function IntPhoneInput({ name, control }: IntPhoneInputProps) {
    const [open, setOpen] = React.useState(false);
    const defaultCountry = countries.find(country => country.value.toUpperCase() === 'US') || countries[0];
    const [selectedCountry, setSelectedCountry] = React.useState(defaultCountry);

  return (
    <div className="flex">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button 
            role="combobox"
            aria-expanded={open}
            className="flex-shrink-0 bg-[#2E2E2E]/25 text-[#E7E6E9]/25"
            onClick={() => setOpen(!open)}>
            <Image 
                src={selectedCountry.flag} 
                alt={selectedCountry.label} 
                width={24} 
                height={24}
            />
            <div className='pl-2'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    className="h-6 w-6">
                    <path 
                        fill="#E7E6E9" 
                        opacity="0.5" 
                        d="M12 16L6 10H18L12 16Z">
                    </path>
                </svg>
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent side="left" align="start">
          <Command className="border border-[#2E2E2E]/25 w-[320px]">
            <CommandInput placeholder="Search country" />
            <ScrollArea className="h-64 w-full">
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup className='my-4'>
              {countries.map((country) => (
                <CommandItem
                  key={country.value}
                  onSelect={() => {
                    setSelectedCountry(country);
                    setOpen(false);
                  }}
                >
                <div className='flex space-x-3'>
                  <Image 
                        src={country.flag} 
                        alt={country.label} 
                        width={24} 
                        height={24}
                  />                  
                  <span>{country.label}</span>
                </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={selectedCountry.value === country.value ? "opacity-100 h-6 w-6 ml-auto" : "opacity-0 h-6 w-6 ml-auto"}
                  >
                    <path 
                      fill="#E7E6E9" 
                      opacity="0.5" 
                      d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"></path>
                  </svg>
                </CommandItem>
              ))}
            </CommandGroup>
            </ScrollArea>
          </Command>
        </PopoverContent>
      </Popover>
      <div className="flex ml-3 items-center bg-[#2E2E2E]/25 w-full">
        <div className="pl-2 text-sm text-[#2E2E2E]">
            {selectedCountry.dialCode}
        </div>
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) => (
                <Input
                    value={value}
                    onChange={onChange}
                    placeholder="(222) 333 4444"
                    international
                    defaultCountry="US"
                    country={selectedCountry.value.toUpperCase() as any}
                    inputComponent={CustomInput}
                />
            )}
        />
      </div>
    </div>
  );
}

IntPhoneInput.displayName = 'IntPhoneInput';

export default IntPhoneInput;

