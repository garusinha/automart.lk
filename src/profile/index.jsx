import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import MyListing from "./components/MyListing";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../@/components/ui/tabs";
import Footer from "@/components/Footer";

function Profile() {
  return (
    <div>
      <Header hidePostButton={true} />
      <div className="container mx-auto mt-4 px-5 md:px-20 ">
        <Tabs defaultValue="my-listing" className="w-full">
          <TabsContent value="my-listing">
            <MyListing />
          </TabsContent>
          <TabsContent value="inbox">Inbox Tab</TabsContent>
          <TabsContent value="profile">Profile Tab</TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
