import { Language } from "./language";

export class Croatian extends Language {
  public toIETF(): string {
    return "hr-HR";
  }

  public toButtonText(): string {
    return "Hrvatski";
  }
}
