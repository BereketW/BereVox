"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Upload, Mic, Play, Pause, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export default function UploadPage() {
  const [isConverting, setIsConverting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleConvert = () => {
    setIsConverting(true);
    // Simulating conversion process
    setTimeout(() => setIsConverting(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        Convert Text to Speech
      </h1>
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="mb-6 p-6 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Textarea
            placeholder="Enter your text here..."
            className="w-full h-40 mb-4 p-3 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:ring focus:ring-purple-200 transition duration-200"
          />
          <div className="flex justify-between items-center mb-4">
            <Label htmlFor="speed" className="text-sm font-medium">
              Speed
            </Label>
            <Slider
              id="speed"
              min={0.5}
              max={2}
              step={0.1}
              defaultValue={[1]}
              className="w-64"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <Label htmlFor="pitch" className="text-sm font-medium">
              Pitch
            </Label>
            <Slider
              id="pitch"
              min={-10}
              max={10}
              step={1}
              defaultValue={[0]}
              className="w-64"
            />
          </div>
          <Button
            onClick={handleConvert}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center"
            disabled={isConverting}
          >
            {isConverting ? (
              <>
                <motion.div
                  className="mr-2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Upload className="h-5 w-5" />
                </motion.div>
                Converting...
              </>
            ) : (
              <>
                <Mic className="mr-2 h-5 w-5" />
                Convert to Speech
              </>
            )}
          </Button>
        </motion.div>
        <motion.div
          className="p-6 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Generated Audio</h2>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsPlaying(!isPlaying)}
              className="rounded-full w-12 h-12 flex items-center justify-center bg-purple-100 hover:bg-purple-200 transition duration-300"
            >
              {isPlaying ? (
                <Pause className="h-6 w-6 text-purple-600" />
              ) : (
                <Play className="h-6 w-6 text-purple-600" />
              )}
            </Button>
          </div>
          <div className="bg-gray-200 h-2 rounded-full mb-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full w-1/3"></div>
          </div>
          <Button
            variant="outline"
            className="w-full border-2 border-purple-500 text-purple-600 hover:bg-purple-50 font-semibold py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Audio
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
