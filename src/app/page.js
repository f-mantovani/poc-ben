'use client'

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState('')
  const fetchData = async () => {
    const result = await fetch('/api')
    const json = await result.json()

    setMessage(json.message)
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.js
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            <button onClick={fetchData} className="bg-gray-200 px-6 py-4 text-black m-4 rounded">
              click here
            </button>
          </li>
          {message &&
            <p>{message}</p>
          }
        </ol>

      </main>
    </div>
  );
}
