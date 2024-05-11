"use client";

import { H1, H2, H3 } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useForm, SubmitHandler } from "react-hook-form";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "@/components/ui/calendar";

const page = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  console.log(date);
  const { register, handleSubmit } = useForm();
  

  return (
    <div className="flex flex-col items-center px-5">
      <H1 className="py-10">Get Started</H1>
      <form
        className="flex flex-col gap-7"
        onSubmit={handleSubmit((data) => {
          console.log({ ...data, startDate: date });
          
        })}
      >
        <div className="flex flex-col gap-2">
          <H3>1. What do you name this cycle</H3>
          <Input {...register("cycleName")} placeholder="Enter cycle name" />
        </div>
        <div className="flex flex-col gap-2">
          <H3>2. What's the purpose of this cycle?</H3>
          <Label
            htmlFor="purpose"
            className="text-white/50 font-extralight ml-6"
          >
            What are you expecting by the end of this cycle?
          </Label>
          <Textarea
            {...register("cyclePurpose")}
            id="purpose"
            placeholder="eg; I want to build my product xyz and learn programming along"
          ></Textarea>
        </div>
        <div className="flex flex-col gap-2">
          <H3>3. What are the goals of this cycle?</H3>
          <Label
            htmlFor="goals"
            className="text-white/50 font-extralight ml-6  "
          >
            What are you hoping to complete at the end of this cycle?
          </Label>
          <Textarea
            {...register("cycleGoals")}
            id="goals"
            placeholder="eg; I'll build 5 projects and complete ZeroToOne book."
          ></Textarea>
        </div>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={"outline"} className={""}>
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Pick a start date of 6 week cycle</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
            </PopoverContent>
          </Popover>
        </div>
        <Button>Create cycle</Button>
      </form>
    </div>
  );
};

export default page;
