"use client";
import BackIcon from "@/icons/back";
import { Dispatch, SetStateAction } from "react";
import AudioRecorder from "react-use-audio-recorder";
import "react-use-audio-recorder/dist/index.css";
export default function MicrophoneRecorder({
  setShowRecordingArea,
  setFile,
}: {
  setShowRecordingArea: Dispatch<SetStateAction<boolean>>;
  setFile: Dispatch<SetStateAction<File | null>>;
}) {
  /*
  const {
    recordingStatus,
    recordingTime,
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    getBlob,
    saveRecording,
  } = useAudioRecorder();
  */
  const onStop = (blob: Blob) => {
    const audioFile = new File([blob], "audio.wav", { type: "audio/wav" });
    setFile(audioFile);
  };
  return (
    <div className="w-full relative flex items-center justify-center ">
      <button
        className="absolute left-0 -top-6 flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2 font-medium text-white transition-colors hover:bg-slate-800"
        onClick={() => setShowRecordingArea(false)}
      >
        <BackIcon /> Back
      </button>
      <AudioRecorder onStop={(blob) => onStop(blob)} />
    </div>
  );
}
/*
 <div className="hidden">
        <span>{`Recording Status - ${recordingStatus} - ${recordingTime} s`}</span>

        <div>
          <button
            disabled={!(!recordingStatus || recordingStatus === "stopped")}
            onClick={startRecording}
          >
            Start
          </button>

          <button
            disabled={!(recordingStatus === "recording")}
            onClick={pauseRecording}
          >
            Pause
          </button>

          <button
            disabled={!(recordingStatus === "paused")}
            onClick={resumeRecording}
          >
            Resume
          </button>

          <button
            disabled={
              !(recordingStatus === "recording" || recordingStatus === "paused")
            }
            onClick={() => {
              stopRecording((blob) => {
                console.log(blob);
              });
            }}
          >
            Stop
          </button>
        </div>

        <div>
          <button
            disabled={!(recordingStatus === "stopped")}
            onClick={() => saveRecording()}
          >
            Save
          </button>
          <button
            disabled={!(recordingStatus === "stopped")}
            onClick={() => console.log(getBlob())}
          >
            Get Blob
          </button>
        </div>
      </div>
*/
