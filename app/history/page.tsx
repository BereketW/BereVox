"use client";

import { motion } from "framer-motion";
import { Play, Download, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const historyItems = [
  { id: 1, title: "Welcome Message", date: "2023-06-01", duration: "00:30" },
  {
    id: 2,
    title: "Product Description",
    date: "2023-06-02",
    duration: "01:15",
  },
  {
    id: 3,
    title: "Tutorial Introduction",
    date: "2023-06-03",
    duration: "02:45",
  },
  { id: 4, title: "Error Message", date: "2023-06-04", duration: "00:15" },
  { id: 5, title: "Podcast Intro", date: "2023-06-05", duration: "00:45" },
];

export default function HistoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        Conversion History
      </h1>
      <div className="max-w-4xl mx-auto">
        {historyItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="mb-4 p-4 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-500">
                  {item.date} • {item.duration}
                </p>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-10 h-10 flex items-center justify-center bg-purple-100 hover:bg-purple-200 transition duration-300"
                >
                  <Play className="h-5 w-5 text-purple-600" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-10 h-10 flex items-center justify-center bg-blue-100 hover:bg-blue-200 transition duration-300"
                >
                  <Download className="h-5 w-5 text-blue-600" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-10 h-10 flex items-center justify-center bg-red-100 hover:bg-red-200 transition duration-300"
                >
                  <Trash2 className="h-5 w-5 text-red-600" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
