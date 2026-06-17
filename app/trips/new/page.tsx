"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewTripPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <Card >
        <CardHeader>
          <CardTitle className="text-lg">
            Create New Trip
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-4">
            
            <div className="space-y-2">
              <label
                htmlFor="tripName"
                className="text-sm font-medium"
              >
                Trip Name
              </label>

              <input
                id="tripName"
                type="text"
                placeholder="Nepal Adventure Trip"
                className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

           
            <div className="space-y-2">
              <label
                htmlFor="description"
                className="text-sm font-medium"
              >
                Trip Description
              </label>

              <textarea
                id="description"
                rows={4}
                placeholder="Describe your trip..."
                className="w-full resize-none rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

          
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="startDate"
                  className="text-sm font-medium"
                >
                  Start Date
                </label>

                <input
                  id="startDate"
                  type="date"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="endDate"
                  className="text-sm font-medium"
                >
                  End Date
                </label>

                <input
                  id="endDate"
                  type="date"
                  className="w-full rounded-md border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

           <Button type="submit" className="w-full">
            Create Trip
           </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}