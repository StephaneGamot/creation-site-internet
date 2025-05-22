"use client"

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function LetsTalkButton() {
  const t = useTranslations("letsTalkButton");

  return (
    <Link
      href="/contact"
      role="button"
      className="inline-block bg-[#43986b] !text-black px-6 py-3 rounded-xl font-semibold shadow hover:bg-opacity-90 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#43986b]"
      aria-label={t("aria")}
    >
      {t("label")}
    </Link>
  );
}
