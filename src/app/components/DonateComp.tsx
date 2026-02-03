import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function DonateComp() {
  return (
    <Tabs defaultValue="paypal" className="w-full mt-10">
      <TabsList className="bg-orange w-full h-[45px] rounded-full mx-auto p-0">
        <TabsTrigger
          value="paypal"
          className="rounded-full text-black font-sans font-bold text-base data-[state=active]:bg-blue data-[state=active]:text-white"
        >
          PayPal
        </TabsTrigger>
        <TabsTrigger
          value="everyorg"
          className="rounded-full text-black font-sans font-bold text-base data-[state=active]:bg-blue data-[state=active]:text-white"
        >
          Every.org
        </TabsTrigger>
        <TabsTrigger
          value="globalgiving"
          className="rounded-full text-black font-sans font-bold text-base data-[state=active]:bg-blue data-[state=active]:text-white"
        >
          Global Giving
        </TabsTrigger>
        <TabsTrigger
          value="mchanga"
          className="rounded-full text-black font-sans font-bold text-base data-[state=active]:bg-blue data-[state=active]:text-white"
        >
          M-changa
        </TabsTrigger>

        <TabsTrigger
          value="mpesa"
          className="rounded-full text-black font-sans font-bold text-base data-[state=active]:bg-blue data-[state=active]:text-white"
        >
          M-Pesa
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="paypal"
        className="pt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        PayPal
      </TabsContent>
      <TabsContent
        value="everyorg"
        className="pt-10 grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-8"
      >
        Every.org
      </TabsContent>
      <TabsContent
        value="globalgiving"
        className="pt-10 grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-8"
      >
        Global Giving
      </TabsContent>
      <TabsContent
        value="mchanga"
        className="pt-10 grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-8"
      >
        M-Changa
      </TabsContent>
      <TabsContent
        value="mpesa"
        className="pt-10 grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-8"
      >
        M-Pesa
      </TabsContent>
    </Tabs>
  );
}

export default DonateComp