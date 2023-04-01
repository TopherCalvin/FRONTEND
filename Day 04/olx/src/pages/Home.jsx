import { Card } from "../components/card";
import Navbar from "../components/navbar";
import { Recom } from "../components/rekomendasi";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="conten">
        <Recom />
        <Card />
      </div>
    </>
  );
}
