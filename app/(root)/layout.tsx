import Sidebar from "@/components/Sidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Victor', lastname: 'Adeniyi'}
   return (
     <main className="flex h-screen w-full font-inter">
       <Sidebar />
       {children}
     </main>
    );
}
