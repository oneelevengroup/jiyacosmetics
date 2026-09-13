import type { Metadata } from "next";
import ZiplyftSections from "@/components/ZiplyftSections";

export const metadata: Metadata = {
  title: "Ziplyft — Lifting de Párpado Superior en 10 Minutos",
  description:
    "Ziplyft en JIYA, Raleigh, NC: un lifting de párpado superior mínimamente invasivo en el consultorio, en unos 10 minutos por ojo. Sin bisturí, sin suturas, con el Dr. Sumeet Jindal.",
};

// Spanish Ziplyft page. Note: the Ziplyft section copy is still in English
// pending a Spanish translation pass; the surrounding chrome is Spanish.
export default function ZiplyftEs() {
  return <ZiplyftSections />;
}
