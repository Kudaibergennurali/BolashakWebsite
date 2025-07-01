import { useLanguage as useLanguageFromProvider } from "@/components/language-provider";

export function useLanguage() {
  return useLanguageFromProvider();
}
