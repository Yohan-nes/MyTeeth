"use client";

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from './ui/button';
import { Appointment } from '@/types/appwrite.types';
import { AppointmentForm } from './forms/AppointmentForm';

export const AppointmentModal = ({
    type,
    patientId,
    userId,
    appointment,
}: {
    type: "schedule" | "cancel";
    patientId: string;
    userId: string;
    appointment?: Appointment;
}) => {
    const [Open, setOpen] = useState(false);
    return (
        <Dialog open={Open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" className={`capitalize ${type === 'schedule' &&
                    'text-green-500'}`} > {type}</Button>
            </DialogTrigger>
            <DialogContent className="shad dialog sm:max-w-md">
                <DialogHeader className="mb-4 space-y-3">
                    <DialogTitle className="capitalize">{type} Appointment</DialogTitle>
                    <DialogDescription>
                        Please fill in the following details to {type} an appointment
                    </DialogDescription>
                </DialogHeader>
                <AppointmentForm
                    userId={userId}
                    patientId={patientId}
                    type={type}
                    appointment={appointment}
                    setOpen={setOpen}
                />
            </DialogContent>
        </Dialog>
    );
};
