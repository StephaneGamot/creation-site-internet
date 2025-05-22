"use client"

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ContactButton() {
  const t = useTranslations("contactButton");

  return (
    <Link
      href="/contact"
      role="button"
      className="inline-block bg-[#b83250] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-opacity-90 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b83250]"
      aria-label={t("aria")}
    >
      {t("label")}
    </Link>
  );
}
