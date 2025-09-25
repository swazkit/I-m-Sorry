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

    </main>
  );
}
