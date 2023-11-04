"use client"

import * as React from "react"
import { industries } from "@/data/industries";

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "../../ui/scroll-area"

interface IndustrySelectProps {
  value: string;
  onChange: (value: string) => void;
}

export const IndustrySelect: React.FC<IndustrySelectProps> = ({ value, onChange }) => {
  const [open, setOpen] = React.useState(false)
  const [side, setSide] = React.useState<"bottom" | "left" | "top" | "right">(window.innerWidth <= 640 ? "bottom" : "left");

  React.useEffect(() => {
    const handleResize = () => {
      setSide(window.innerWidth <= 640 ? "bottom" : "left");
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSelect = (currentValue: string) => {
    onChange(currentValue === value ? "" : currentValue);
    setOpen(false);
  };

  return (
    <div className="flex">
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          className={`w-full outline-none justify-between ${value ? 'bg-[#2E2E2E]/25 text-[#E7E6E9]' : 'bg-[#2E2E2E]/25 text-[#E7E6E9]/50'}`}
        >
          {value
            ? industries.find((industry) => industry.value === value)?.label
            : "Select industry"}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="ml-2 h-6 w-6">
              <path 
                fill="#E7E6E9" 
                opacity="0.5" 
                d="M12 16L6 10H18L12 16Z">
              </path>
            </svg>
        </Button>
      </PopoverTrigger>
      <PopoverContent side={side} align="start">
        <Command className="border border-[#2E2E2E]/25 w-[320px]">
          <CommandInput placeholder="Search industry" />
          <ScrollArea className="h-64 w-full">
          <CommandEmpty>No industry found.</CommandEmpty>
          <CommandGroup className="my-4">
            {industries.map((industry) => (
              <CommandItem
                key={industry.value}
                value={industry.value}
                onSelect={handleSelect}
              >
                {industry.label}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className={cn(
                    "flex ml-auto h-6 w-6 items-center",
                    value === industry.value ? "opacity-100" : "opacity-0"
                  )}
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
    </div>
  )
}