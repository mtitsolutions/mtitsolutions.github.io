import { Language } from "./language";

export class English extends Language {
  public toIETF(): string {
    return "en-US";
  }

  public toButtonText(): string {
    return "English";
  }
}
