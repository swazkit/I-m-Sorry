import GiftBox from "../components/GiftBox";

export default function Home() {
  return (
    <main className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-rose-100 via-pink-100 to-rose-200 font-poppins">
      {/* Floating hearts background */}
      {Array.from({ length: 15 }).map((_, i) => (
        <span
          key={i}
          className="absolute text-xl text-pink-400 opacity-70"
          style={{
            left: `${Math.random() * 100}%`,
            animation: `float ${6 + Math.random() * 5}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          ❤️
        </span>
      ))}

      <GiftBox />

      {/* Section linked to Learn More */}
      <section
        id="more"
        className="absolute bottom-0 w-full bg-white/80 py-8 text-center shadow-inner backdrop-blur-md"
      >
        <h2 className="text-2xl font-semibold text-pink-600">
          My Apology Letter
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-700">
          I know I upset you, and I’m deeply sorry for that. I built this page
          as a little gesture to show how much you mean to me. ❤️
        </p>
      </section>
    </main>
  );
}
