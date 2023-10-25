export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center  px-6 py-10 bg-[#060818] sm:px-16">
      {children}
    </div>
  );
}
