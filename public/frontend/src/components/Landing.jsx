// src/components/Landing.jsx
export default function Landing() {
  return (
    <div className="text-white">
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/your-yelan-image.jpg')" }}
      >
        <div className="absolute top-0 right-0 p-4 text-sm space-x-4">
          <a href="#home">Home</a>
          <a href="#characters">Characters</a>
          <a href="#story">Story</a>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40">
          <h1 className="text-4xl md:text-6xl font-bold">
            Your story. Their world. Any universe.
          </h1>
          <p className="text-lg mt-4">
            Create custom Genshin visual novel fanfics with endless
            possibilities — powered by Google Gemini ✦
          </p>
          <a
            href="#characters"
            className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200"
          >
            ➝ Choose Your Duo to Begin
          </a>
        </div>
      </section>

      <section className="bg-white text-black px-6 py-12 text-left" id="how-to">
        <h2 className="text-3xl font-bold mb-4">How To Play</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <strong>Choose 2 Characters</strong> – Pick your Genshin duo to star
            in the story.
          </li>
          <li>
            <strong>Set the Scene</strong> – Drop them into any universe you
            like.
          </li>
          <li>
            <strong>Generate & Play</strong> – Watch your AI-powered visual
            novel unfold.
          </li>
          <li>
            <strong>Branch the Story</strong> – Shape the plot or regenerate for
            a new twist!
          </li>
        </ol>
      </section>

      <section className="bg-gray-100 px-6 py-12 text-black" id="about">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="mb-6">
          We’re four UCF students who built something fun and a little unhinged,
          just like us. Click our names to connect!
        </p>
        <div className="flex gap-6 justify-center">
          <a href="https://github.com/your-gh" className="hover:underline">
            Amana
          </a>
          <a href="https://github.com/your-gh" className="hover:underline">
            Dawn
          </a>
          <a href="https://github.com/your-gh" className="hover:underline">
            Lily
          </a>
          <a href="https://github.com/your-gh" className="hover:underline">
            Cami
          </a>
        </div>
      </section>
    </div>
  );
}
