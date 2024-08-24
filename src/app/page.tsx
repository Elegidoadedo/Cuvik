import Image from "next/image";
import styles from "./page.module.css";
import { MainLayout } from "@/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <p>hello world!</p>
    </MainLayout>
  );
}
