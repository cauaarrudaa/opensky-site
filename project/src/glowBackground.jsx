// GlowBackground.jsx
export default function GlowBackground({ children }) {
  return (
    <section className="relative overflow-hidden bg-black text-white py-24 px-6 md:px-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-600/20 blur-[160px] rounded-full -z-10" />
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
