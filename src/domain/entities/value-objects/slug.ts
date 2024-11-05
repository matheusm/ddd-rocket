export class Slug {
  public value: string
  constructor(value: string) {
    this.value = value
  }

  /**
   * Receives a string and nominalizes it to a slug
   * 
   * Example: "How to cook a cake" -> "how-to-cook-a-cake"
   * @param text {string} - The text to be nominalized
   */

  static createFromText(text: string): Slug {
    const slugText = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/_/g, '-')
      .replace(/--+/g, '-')
      .replace(/-$/g, '')
      
    return new Slug(slugText)
  }
}