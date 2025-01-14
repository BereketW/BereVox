"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Save, Mic, VolumeX, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SettingsPage() {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    // Simulating save process
    setTimeout(() => setIsSaving(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        Settings
      </h1>
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="mb-6 p-6 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold mb-4">Voice Settings</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label htmlFor="default-voice" className="text-sm font-medium">
                Default Voice
              </Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select voice" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="voice1">Voice 1</SelectItem>
                  <SelectItem value="voice2">Voice 2</SelectItem>
                  <SelectItem value="voice3">Voice 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-between items-center">
              <Label htmlFor="custom-voice" className="text-sm font-medium">
                Use Custom Voice
              </Label>
              <Switch id="custom-voice" />
            </div>
            <div>
              <Label htmlFor="voice-sample" className="text-sm font-medium">
                Upload Voice Sample
              </Label>
              <div className="mt-1 flex items-center space-x-4">
                <Input id="voice-sample" type="file" className="sr-only" />
                <Label
                  htmlFor="voice-sample"
                  className="cursor-pointer inline-flex items-center px-4 py-2 border border-purple-300 rounded-md shadow-sm text-sm font-medium text-purple-700 bg-white hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  <Mic
                    className="-ml-1 mr-2 h-5 w-5 text-purple-500"
                    aria-hidden="true"
                  />
                  Upload
                </Label>
                <span className="text-sm text-gray-500">No file selected</span>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="mb-6 p-6 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl font-semibold mb-4">Audio Settings</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label htmlFor="background-noise" className="text-sm font-medium">
                Remove Background Noise
              </Label>
              <Switch id="background-noise" />
            </div>
            <div className="flex justify-between items-center">
              <Label htmlFor="audio-format" className="text-sm font-medium">
                Audio Format
              </Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mp3">MP3</SelectItem>
                  <SelectItem value="wav">WAV</SelectItem>
                  <SelectItem value="ogg">OGG</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-between items-center">
              <Label htmlFor="volume-boost" className="text-sm font-medium">
                Volume Boost
              </Label>
              <div className="flex items-center space-x-2">
                <VolumeX className="h-5 w-5 text-gray-400" />
                <input
                  type="range"
                  id="volume-boost"
                  min="0"
                  max="100"
                  className="w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <Volume2 className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </div>
        </motion.div>
        <Button
          onClick={handleSave}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center"
          disabled={isSaving}
        >
          {isSaving ? (
            <>
              <motion.div
                className="mr-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Save className="h-5 w-5" />
              </motion.div>
              Saving...
            </>
          ) : (
            <>
              <Save className="mr-2 h-5 w-5" />
              Save Settings
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
