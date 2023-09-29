"use client";

import Navbar from "@/components/navbar";
import React from "react";
import { useState, useEffect } from "react";

const Calendar = (page) => {
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto">
        <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-10">
          Calender
        </h1>
      </div>
    </div>
  );
};

export default Calendar;
