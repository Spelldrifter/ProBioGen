
"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCallback, useEffect, useRef, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { CheckSquare, Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { toast as sonnar } from "sonner";
import { Button } from "@/components/ui/button";
import { GeneratedBio, UserInputPayload, VibeType } from "@/types/types";


let vibes: VibeType[] = ["حرفه‌ای", "معمولی", "طنز"];

const NEXT_PUBLIC_COOLDOWN_TIME = process.env.NEXT_PUBLIC_COOLDOWN_TIME || 10

const BioGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [bio, setBio] = useState("");
  const [vibe, setVibe] = useState<VibeType>("حرفه‌ای");
  const [generatedBios, setGeneratedBios] = useState<GeneratedBio[]>([]);
  const [isCooldown, setIsCooldown] = useState(false);

  const [cooldownTimer, setCooldownTimer] = useState(0);

  const bioRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isCooldown && cooldownTimer > 0) {
      interval = setInterval(() => {
        setCooldownTimer((timer) => timer - 1);
      }, 1000);
    } else if (cooldownTimer === 0) {
      setIsCooldown(false);
    }
    return () => clearInterval(interval);
  }, [isCooldown, cooldownTimer]);

  const scrollToBios = () => {
    if (bioRef.current !== null) {
      bioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBioChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setBio(event.target.value);
    },
    []
  );

  const generateBio = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (isCooldown) {
      toast("لطفا چند لحظه صبر کنید دوباره بزنید", {
        icon: "⏳",
      });
      return;
    }

    setGeneratedBios([]);
    setLoading(true);
    setIsCooldown(true);

    setCooldownTimer(NEXT_PUBLIC_COOLDOWN_TIME);

    try {
      const userInput: UserInputPayload = {
        vibe,
        bio,
      };

      const response = await fetch("/api/langchain", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInput),
      });

      if (!response.ok) {
        const errormessage = await response.json();
        sonnar.error("به نظر میاد مشکلی هست:", {
          description: errormessage.error,
          duration: 15000,
          className: "text-base",
        });
        return;
      }

      const data = await response.json();
      const allBios: GeneratedBio[] = data.output;
      setGeneratedBios(allBios);
      scrollToBios();
    } catch (error) {
      const err = error as Error;
      console.log(err);