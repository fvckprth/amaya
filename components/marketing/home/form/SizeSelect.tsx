"use client"

import * as React from "react"
import { sizes } from "@/data/sizes"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface SizeSelectProps {
    value: string;
    onChange: (value: string) => void;
}
  
export const SizeSelect: React.FC<SizeSelectProps> = ({ value, onChange }) => {
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
            className={`w-full text-base justify-between ${value ? 'bg-[#2E2E2E]/25 text-[#E7E6E9]' : 'bg-[#2E2E2E]/25 text-[#E7E6E9]/50'}`}
          >
            {value
              ? sizes.find((size) => size.value === value)?.label
              : "Select size"}
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
          <Command className="py-4 border border-[#2E2E2E]/25 w-[320px]">
            <CommandGroup>
              {sizes.map((size) => (
                <CommandItem
                  key={size.value}
                  value={size.value}
                  onSelect={handleSelect}
                >
                  {size.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={cn(
                      "flex ml-auto h-6 w-6 items-center",
                      value === size.value ? "opacity-100" : "opacity-0"
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
          </Command>
        </PopoverContent>
      </Popover>
    </div>
    )
  }