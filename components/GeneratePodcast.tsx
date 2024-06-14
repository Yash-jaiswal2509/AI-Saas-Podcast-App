import { GeneratePodcastProps } from "@/types/types";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { Loader } from "lucide-react";
import { useAction } from "convex/react";
import { api } from "@/convex/_generated/api";
import { v4 as uuidv4 } from "uuid";

const useGeneratePodcast = (props: GeneratePodcastProps) => {
  const [isGenerating, setIsGenerating] = useState(false);

  const getPodcastAudio = useAction(api.openai.generateAudioAction);

  const generatePodcast = async () => {
    setIsGenerating(true);
    props.setAudioUrl("");

    if (!props.voicePrompt) {
      setIsGenerating(false);
      return;
    }

    try {
      const response = await getPodcastAudio({
        input: props.voicePrompt,
        voice: props.voiceType,
      });

      const blob = new Blob([response], { type: "audio/mp3" });
      const fileName = `podcast-${uuidv4()}.mp3`;
      
    } catch (error) {
      console.error("Error generating podcast", error);
      setIsGenerating(false);
    }
  };
  return {
    isGenerating: false,
    generatePodcast: () => {},
  };
};

const GeneratePodcast = (props: GeneratePodcastProps) => {
  const { isGenerating, generatePodcast } = useGeneratePodcast(props);

  return (
    <div>
      <div className="flex flex-col gap-2.5">
        <Label className="text-16 font-bold text-white-1">
          AI Prompt to generate Podcast
        </Label>
        <Textarea
          className="input-class font-light focus-visible:ring-offset-orange-1"
          placeholder="Provide text to generate audio"
          rows={5}
          value={props.voicePrompt}
          onChange={(e) => props.setVoicePrompt(e.target.value)}
        />
      </div>
      <div className="mt-5 w-full max-w-[200px]">
        <Button
          type="submit"
          className="text-16 bg-orange-1 py-4 font-bold text-white-1"
        >
          {isGenerating ? (
            <>
              Submitting...
              <Loader size={20} className="ml-2 animate-spin" />
            </>
          ) : (
            "Generate"
          )}
        </Button>
      </div>
      {props.audioUrl && (
        <audio
          controls
          src={props.audioUrl}
          autoPlay
          className="mt-5"
          onLoadedMetadata={(e) =>
            props.setAudioDuration(e.currentTarget.duration)
          }
        />
      )}
    </div>
  );
};

export default GeneratePodcast;
