"use client";
import { useSelector } from "react-redux";
import { useState } from "react";
import Navbar from "@/components/common/navbar";
import { useAppSelector } from "@/store/reduxhook";
import FieldForm from "@/components/common/fieldform";


export default function interview() {
  // const { user, authtoken, error, isAuthenticated, loading } = useAppSelector((state) => state.auth);

  return (
      <div className="max-w-full  mx-auto p-1">
        <FieldForm />
      </div>
  );
}