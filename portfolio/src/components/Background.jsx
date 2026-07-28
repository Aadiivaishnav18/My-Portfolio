import { useEffect } from "react";

export default function Background() {
  useEffect(() => {
    const el = document.documentElement;
    function onMove(e) {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--mouse-x", x + "%");
      document.documentElement.style.setProperty("--mouse-y", y + "%");
    }

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className="premium-bg">
      <div className="blob a" />
      <div className="blob b" />
      <div className="blob c" />
      <div className="mouse-light" />
    </div>
  );
}
