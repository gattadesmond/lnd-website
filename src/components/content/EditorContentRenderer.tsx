import EditorJsHtml from "editorjs-html";
import slugify from "slugify";

interface EditorContentRendererProps {
  content: string;
  onHeadingsChange?: (
    headings: { id: string; text: string; level: number }[],
  ) => void;
  className?: string;
}

export function EditorContentRenderer({
  content,
  onHeadingsChange,
  className = "prose prose-base max-w-none px-5 py-8 text-neutral-800 prose-neutral sm:px-12 prose-headings:scroll-mt-20 prose-headings:font-display prose-headings:text-neutral-900 prose-a:font-medium prose-a:text-black prose-a:underline-offset-4 prose-a:hover:text-neutral-700 prose-strong:text-neutral-900",
}: EditorContentRendererProps) {
  if (!content || typeof content !== "string") {
    return (
      <div className={className}>
        <div className="text-neutral-500">No content available</div>
      </div>
    );
  }

  try {
    const editorData = JSON.parse(content);
    const listHeadings: { id: string; text: string; level: number }[] = [];

    const edjsParser = EditorJsHtml({
      embed: ({ data }) => {
        console.log("🚀 ~ EditorContentRenderer ~ embed:", data);
        return `<iframe src="${data.embed}" scrolling="no" frameborder="0" style="border: none;" class="aspect-video" data-external="1"></iframe>`;
      },
      header: ({ data }) => {
        // Custom header renderer with class
        const level = data.level || 2;
        const text = data.text;
        const id = slugify(data.text || "", {
          lower: true,
          strict: false,
          remove: /[*+~.()'"!:@]/g,
          replacement: "-",
          locale: "vi",
        });

        if (level === 2) {
          listHeadings.push({ id, text, level });
          return `<h2 id="${id}" class="group">
            <a href="#${id}" class="group flex items-start gap-x-2  !text-neutral-800 ">
              ${text}
              <div class="rounded-lg border border-neutral-200 bg-white p-1.5 opacity-0 transition-all hover:border-neutral-300 hover:shadow group-hover:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link2 size-4 text-neutral-600" aria-label="Link to section">
                  <path d="M9 17H7A5 5 0 0 1 7 7h2" />
                  <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
                  <line x1="8" x2="16" y1="12" y2="12" />
                </svg>
              </div>
            </a>
          </h2>`;
        }

        if (level === 3) {
          listHeadings.push({ id, text, level });
          return `<h3 id="${id}" class="group">
            <a href="#${id}" class="group flex items-start gap-x-2  !text-neutral-800 ">
              ${text}
            </a>
          </h3>`;
        }

        return `<h${level}>${text}</h${level}>`;
      },
      table: (data: { content?: unknown[][] }) => {
        // Custom table renderer
        if (!data.content || !Array.isArray(data.content)) return "";
        const rows = data.content
          .map(
            (row: unknown[]) =>
              `<tr>${row.map((cell) => `<td>${cell || ""}</td>`).join("")}</tr>`,
          )
          .join("");
        return `<table class="border-collapse border border-neutral-300 w-full my-4"><tbody>${rows}</tbody></table>`;
      },
      simpleImage: ({ data }) => {
        // Handle different data structures
        const imageUrl = data.url || data.file?.url;
        if (!imageUrl) {
          return "";
        }
        const caption = data.caption
          ? `<figcaption class="text-sm text-neutral-500 mt-2 text-center">${data.caption}</figcaption>`
          : "";

        const html = `<figure><img src="${imageUrl}" alt="${data.caption || "Image"}" class="rounded-lg border border-neutral-200 w-full" />${caption}</figure>`;
        return html;
      },
      code: ({ data }) => {
        // Handle code blocks with proper semantic HTML
        const code = data.code || "";
        const language = data.language || "";
        const caption = data.caption
          ? `<figcaption class="text-sm text-neutral-500 mt-2 text-center">${data.caption}</figcaption>`
          : "";

        const html = `<figure class="my-6">
          <code class="language-${language}">${code}</code>
          ${caption}
        </figure>`;
        return html;
      },
    });

    const html = edjsParser.parse(editorData);

    // Call onHeadingsChange callback if provided
    if (onHeadingsChange && listHeadings.length > 0) {
      onHeadingsChange(listHeadings);
    }

    return (
      <div className={className}>
        <div
          dangerouslySetInnerHTML={{
            __html: Array.isArray(html) ? html.join("") : html,
          }}
        />
      </div>
    );
  } catch {
    // Fallback for non-JSON content
    return (
      <div className={className}>
        <div
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </div>
    );
  }
}
