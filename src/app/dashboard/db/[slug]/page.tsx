"use client";
import { useParams } from "next/navigation";

export default function Page() {
  const { slug } = useParams();
  return <h1>{slug}</h1>;
}
