import Navbar from "@/components/Navbar";
import { BadgeShine, H1, H2 } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen">
      <section className="min-h-screen">
        <Navbar />
        <main className="px-5 py-16 pb-30">
          <BadgeShine>Something special is waiting!</BadgeShine>
          <H1 className="text-5xl mt-2">
            Build before its too late and{" "}
            <span className="text-primary ">effortlessly</span>
          </H1>
          <p className="text-[22px] mb-6 mt-5">
            Meet IndieToolkit, the project-juggling tool for all indie hackers.
            Focus on building, not managing and tracking what is left. Free for
            individuals.
          </p>
          <Link href={"/get-started"}>
            <Button
              className="w-[350px] font-semibold h-[50px] mt-10 text-lg"
              variant={"default"}
            >
              Start Here {"->"}
            </Button>
          </Link>
        </main>
      </section>
      <section className="bg-white min-h-screen py-10 px-5 ">
        <H1 className="text-5xl text-border md:text-7xl">
          Develop projects without the manual management
        </H1>
        <div className="text-secondary py-10 pb-20">
          <H2>FAQ's</H2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is IndieTook?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it for big projects?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Why should I use, while I can manually manage?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How is it going to benefit me?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How to get started?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it for big projects?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
