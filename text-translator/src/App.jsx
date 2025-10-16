import React, { useState } from "react";
import axios from "axios";

const languages = [
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
  { code: "hi", name: "Hindi" },
  { code: "zh", name: "Chinese" },
  { code: "ja", name: "Japanese" },
];

function App() {
  const [text, setText] = useState("");
  const [targetLang, setTargetLang] = useState("es");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);

  const translateText = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "https://google-translate1.p.rapidapi.com/language/translate/v2",
        new URLSearchParams({
          q: text,
          target: targetLang,
          source: "en",
        }),
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
            "X-RapidAPI-Key": "4acfc753demshf4716a1c2271a96p126e46jsn7ece1297d0c8",
            "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
          },
        }
      );

      const translated = response.data.data.translations[0].translatedText;
      setTranslatedText(translated);
    } catch (error) {
      console.error("Translation error:", error);
      setTranslatedText("Translation failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">🌐 Text Translator</h1>

        <textarea
          className="w-full p-3 border border-gray-300 rounded mb-4"
          placeholder="Enter English text..."
          rows="4"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <select
          className="w-full p-3 border border-gray-300 rounded mb-4"
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>

        <button
          onClick={translateText}
          disabled={loading || !text}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Translating..." : "Translate"}
        </button>

        {translatedText && (
          <div className="mt-6">
            <h2 className="font-semibold mb-2">Translated Text:</h2>
            <p className="bg-gray-100 p-3 rounded border">{translatedText}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
