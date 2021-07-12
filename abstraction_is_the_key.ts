function classicSlider(title: string, bullets: string[]): string {
    let markdown = `# ${title}\n`;
    bullets.forEach(bullet => markdown += `- ${bullet}`);
    return markdown;
}