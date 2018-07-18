export class Vocabulary {
  private word: string;
  private translation: string;
  private failToTranslate: boolean;

  constructor(word: string, translation: string, failToTranslate: boolean) {
    this.word = word;
    this.translation = translation;
    this.failToTranslate = failToTranslate;
  }
}
