export abstract class Language {
  public abstract toIETF(): string;
  public abstract toButtonText(): string;
  public isSelectedLanguage(i18nLang: string): boolean {
    return this.toIETF() === i18nLang;
  }
}
