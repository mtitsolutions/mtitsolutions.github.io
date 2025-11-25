import { Language } from "./language";

export class Russian extends Language {
  public toIETF(): string {
    return "ru-RU";
  }

  public toButtonText(): string {
    return "Русский";
  }

  public override isSelectedLanguage(i18nLang: string): boolean {
    return this.toIETF() === i18nLang || i18nLang.startsWith("en-");
  }
}
