"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Toaster } from "../ui/toaster";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  country1: z.string().nonempty({ message: "Please select the first country." }),
  country2: z.string().nonempty({ message: "Please select the second country." }),
});

export function SelectCountries() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const router = useRouter();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Countries:",
      description: <p>{data.country1} vs {data.country2}</p>,
    });

    router.push(`/comparison/${data.country1}/${data.country2}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-4 flex-col space-y-4 sm:space-y-0 sm:flex-row sm:items-center">
        <FormField
          control={form.control}
          name="country1"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="w-full sm:w-[200px] mr-2">
                  <SelectTrigger>
                    <SelectValue placeholder="Select the first country..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="brazil">Brazil</SelectItem>
                  <SelectItem value="canada">Canada</SelectItem>
                  <SelectItem value="usa">United States</SelectItem>
                  <SelectItem value="mexico">Mexico</SelectItem>
                  <SelectItem value="gb">United Kingdom</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country2"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="w-full sm:w-[200px]">
                  <SelectTrigger>
                    <SelectValue placeholder="Select the second country..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="brazil">Brazil</SelectItem>
                  <SelectItem value="canada">Canada</SelectItem>
                  <SelectItem value="usa">United States</SelectItem>
                  <SelectItem value="mexico">Mexico</SelectItem>
                  <SelectItem value="gb">United Kingdom</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-4 sm:mt-0">Compare</Button>
      </form>
      <Toaster />
    </Form>
  );
} export default SelectCountries;


