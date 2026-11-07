const fallbackDescription = "Property market commentary and buying considerations from Ether Property Hub.";

/** A template token is missing editorial information, not a location to guess. */
export function cleanEditorialDescription(value: string | null | undefined, fallback = fallbackDescription): string {
  return !value?.trim() || /\[(?:location|year|topic|client type|outcome)\]/i.test(value) ? fallback : value.trim();
}

/** Mark Nepali text without changing existing links, attributes, scripts or styles. */
export function markNepaliText(html: string): string {
  const stack: { tag: string; language: string }[] = [];
  return html.replace(/<!--[\s\S]*?-->|<(script|style)\b[^>]*>[\s\S]*?<\/\1\s*>|<[^>]+>|[^<]+/gi, (token) => {
    if (token.startsWith("<")) {
      if (/^<!--|^<(?:script|style)\b/i.test(token)) return token;
      const closing = token.match(/^<\/([\w-]+)/);
      if (closing) {
        const index = stack.map(entry => entry.tag).lastIndexOf(closing[1].toLowerCase());
        if (index >= 0) stack.splice(index);
      } else {
        const opening = token.match(/^<([\w-]+)/);
        if (opening && !/\/\s*>$/.test(token) && !/^(?:area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/i.test(opening[1])) {
          const language = token.match(/\blang\s*=\s*["']([^"']+)["']/i)?.[1] ?? stack.at(-1)?.language ?? "";
          stack.push({ tag: opening[1].toLowerCase(), language });
        }
      }
      return token;
    }
    if (stack.at(-1)?.language.toLowerCase() === "ne") return token;
    return token.replace(/[\u0900-\u097f]+(?:[\s,;:!?\u0964\u0965-]*[\u0900-\u097f]+)*/g, text => `<span lang="ne">${text}</span>`);
  });
}
