import Link from "next/link";
import Github from "./GitHub";

export default function Header() {
  return (
    <div className="flex justify-between items-center space-x-4 py-1 border-b sm:px-4">
      <Link href="/">
        <img
          alt="ClubGPT icon"
          src="/screenshot.png"
          className="sm:w-36"
          width={100}
        