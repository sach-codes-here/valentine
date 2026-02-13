import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Music, Music2 } from "lucide-react";

const ROMANTIC_MESSAGES = [
  "You're the reason I believe in love at first sight. 💕",
  "Every moment with you feels like a scene from my favorite love story. 🌹",
  "You make my heart skip a beat—every single day. 💓",
  "I fall in love with you more with every passing second. ✨",
  "You're not just my love—you're my favorite adventure. 🌟",
  "My favorite place in the world is wherever you are. 💖",
  "You're the sweetest surprise life ever gave me. 🍬",
  "I could get lost in your smile forever. 😊",
  "You're the missing piece I didn't know I was looking for. 🧩",
  "With you, every day feels like Valentine's Day. 💘",
  "You're proof that dreams really do come true. 🌙",
  "I love you more than words could ever say. 📝",
  "You make ordinary moments feel extraordinary. ✨",
  "My heart belongs to you—today, tomorrow, always. 🔐",
  "You're the best thing that's ever been mine. 💎",
];

export default function ValentineSite() {
  const [step, setStep] = useState(0);
  const [musicOn, setMusicOn] = useState(false);
  const [noBtnPos, setNoBtnPos] = useState({ x: 0, y: 0 });
  const [surpriseMessage, setSurpriseMessage] = useState(null);

  const herName = "Ravi"; // TODO: Change this 💖

  const showSurpriseMessage = () => {
    const msg = ROMANTIC_MESSAGES[Math.floor(Math.random() * ROMANTIC_MESSAGES.length)];
    setSurpriseMessage(msg);
    setTimeout(() => setSurpriseMessage(null), 4000);
  };

  const moveNoButton = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoBtnPos({ x, y });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-200 to-pink-300 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Floating Hearts */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-400 opacity-70"
          initial={{ y: "100vh", x: Math.random() * window.innerWidth }}
          animate={{ y: "-10vh" }}
          transition={{ duration: 8 + Math.random() * 5, repeat: Infinity, delay: i * 0.5 }}
        >
          <Heart size={24 + Math.random() * 20} />
        </motion.div>
      ))}

      {/* Music Toggle */}
      <button
        onClick={() => setMusicOn(!musicOn)}
        className="absolute top-4 right-4 bg-white/70 backdrop-blur-md p-3 rounded-full shadow-lg"
      >
        {musicOn ? <Music className="text-pink-600" /> : <Music2 className="text-gray-500" />}
      </button>

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="welcome"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <Card className="rounded-2xl shadow-2xl bg-white/80 backdrop-blur-xl max-w-md text-center p-6">
              <CardContent className="space-y-4">
                <h1 className="text-3xl font-bold text-pink-600">Hey {herName} 💕</h1>
                <p className="text-gray-700">I have something special for you...</p>
                <div className="flex flex-col gap-2">
                  <Button className="bg-pink-500 hover:bg-pink-600" onClick={() => setStep(1)}>
                    Open Your Surprise
                  </Button>
                  <Button
                    variant="outline"
                    className="border-pink-300 text-pink-600 hover:bg-pink-50"
                    onClick={showSurpriseMessage}
                  >
                    Surprise me 💕
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="message"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <Card className="rounded-2xl shadow-2xl bg-white/80 backdrop-blur-xl max-w-md text-center p-6">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-semibold text-rose-500">You Make My World Brighter 🌸</h2>
                <p className="text-gray-700">
                  Every day with you feels like a dream I never want to wake up from. Thank you for being you.
                </p>
                <Button
                  className="bg-rose-500 hover:bg-rose-600"
                  onClick={() => {
                    showSurpriseMessage();
                    setStep(2);
                  }}
                >
                  One More Thing...
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="question"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center"
          >
            <Card className="rounded-2xl shadow-2xl bg-white/80 backdrop-blur-xl max-w-md p-6">
              <CardContent className="space-y-6 flex flex-col items-center">
                <h2 className="text-2xl font-bold text-pink-600">Will You Be My Valentine? 💘</h2>
                <div className="flex gap-6 relative h-20 items-center justify-center">
                  <Button className="bg-pink-500 hover:bg-pink-600" onClick={() => setStep(3)}>
                    YES 💖
                  </Button>
                  <motion.div
                    animate={{ x: noBtnPos.x, y: noBtnPos.y }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Button
                      variant="outline"
                      className="border-pink-400 text-pink-600"
                      onMouseEnter={moveNoButton}
                      onClick={moveNoButton}
                    >
                      No 🙈
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="celebrate"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <Card className="rounded-2xl shadow-2xl bg-white/90 backdrop-blur-xl max-w-md p-6">
              <CardContent className="space-y-4">
                <h2 className="text-3xl font-bold text-rose-600">YAY!!! 🎉💞</h2>
                <p className="text-gray-700">Best decision ever. I can't wait to make more memories with you.</p>
                <p className="text-pink-600 font-semibold">Happy Valentine's Day ❤️</p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Romantic message toast */}
      <AnimatePresence>
        {surpriseMessage && (
          <motion.div
            key={surpriseMessage}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 max-w-sm px-5 py-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-pink-200 text-center"
          >
            <p className="text-rose-700 font-medium text-lg">{surpriseMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
