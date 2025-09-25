import { use } from "react";
import { SessionProvider } from "next-auth/react";



export default function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
      <main>
        {children}
      </main>
  );
}