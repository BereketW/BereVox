"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mic, FileText, History, Settings } from "lucide-react";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="flex-1">
      <section className="container px-4 py-24 md:py-32">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
              Transform Text to Natural Speech
            </h1>
          </motion.div>
          <motion.p
            className="mb-12 text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Convert your text into natural-sounding speech with customizable
            voices. Perfect for content creators, educators, and accessibility
            needs.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
            >
              Start Converting
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </section>
      <section className="container px-4 py-16">
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {[
            {
              icon: FileText,
              title: "Text Upload",
              description:
                "Upload your text and convert it to natural-sounding speech",
            },
            {
              icon: Mic,
              title: "Voice Customization",
              description: "Customize pitch, speed, and voice characteristics",
            },
            {
              icon: History,
              title: "Conversion History",
              description: "Access and manage your previous conversions",
            },
            {
              icon: Settings,
              title: "Advanced Settings",
              description: "Fine-tune your voice synthesis settings",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="group relative overflow-hidden rounded-lg bg-white/50 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-500/20 opacity-75" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-[3px] bg-white rounded-lg z-10" />
              <div className="relative z-20">
                <feature.icon className="h-12 w-12 text-primary mb-2" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
