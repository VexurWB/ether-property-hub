/** Repair literal editor markup while preserving existing links and inline content. */
export function repairEditorialHtml(html: string): string {
  return html
    .replace(/<p>\s*(#{2,3})\s+([\s\S]*?)<\/p>/g, (_match, marks: string, content: string) => '<h' + marks.length + '>' + content + '</h' + marks.length + '>')
    .replace(/<p>\s*[-\u2013]\s+([\s\S]*?)<\/p>/g, (_match, content: string) => '<ul><li>' + content.replace(/<br\s*\/?>\s*[-\u2013]\s+/g, '</li><li>') + '</li></ul>')
    .replace(/<p>\s*1\.\s+([\s\S]*?)<\/p>/g, (_match, content: string) => '<ol><li>' + content.replace(/<br\s*\/?>\s*\d+\.\s+/g, '</li><li>') + '</li></ol>')
    .replace(/<\/ul>\s*<ul>/g, '')
    .replace(/<a([^>]*href="https?:[^>]+)>\[https?:[^<]+<\/a>\]\(https?:[^<]*\)\)/g, '<a$1>Read source</a>')
    .replace(/<\/a>\)/g, '</a>')
    .replace(/licensed buyer[\u2019']s agent in at /g, "licensed buyer's agent at ");
}
