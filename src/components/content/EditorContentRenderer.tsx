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
  className = "prose prose-base max-w-none px-5 py-8 text-neutral-800 prose-neutral sm:px-12 prose-headings:scroll-mt-20 prose-headings:font-display prose-headings:text-neutral-900 prose-a:font-medium prose-a:text-black prose-a:underline-offset-4 prose-a:hover:text-neutral-500 prose-strong:text-neutral-900",
}: EditorContentRendererProps) {
  if (!content || typeof content !== "object") {
    return (
      <div className={className}>
        <div className="text-neutral-500">No content available</div>
      </div>
    );
  }

  try {
    const editorData = content;
    const listHeadings: { id: string; text: string; level: number }[] = [];

    const edjsParser = EditorJsHtml({
      raw: ({ data }) => {
        return data.html || "";
      },
      embed: ({ data }) => {
        return `<div style='aspect-ratio:16/9; position:relative; width:100%;'>
                         <iframe src="${data.embed}" scrolling="no" frameborder="0" style="position:absolute; inset:0; width:100%; height:100%; border:0;" allowfullscreen  data-external="1"></iframe>
                         </div>`;
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
      paragraph: ({ data }) => {
        // Handle paragraph blocks
        return `<p>${data.text || ""}</p>`;
      },
      quote: ({ data }) => {
        // Handle quote blocks
        const caption = data.caption
          ? `<figcaption class="text-sm text-neutral-500 mt-2 text-center">${data.caption}</figcaption>`
          : "";
        return `<blockquote class="border-l-4 border-neutral-300 pl-4 italic text-neutral-600">
                     ${data.text || ""}
                     ${caption}
                 </blockquote>`;
      },
      delimiter: () => {
        // Handle delimiter blocks
        return `<div class="text-center my-8">
                     <span class="text-4xl text-neutral-300">***</span>
                 </div>`;
      },
      warning: ({ data }) => {
        // Handle warning blocks
        return `<div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                     <div class="flex">
                         <div class="flex-shrink-0">
                             <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                 <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                             </svg>
                         </div>
                         <div class="ml-3">
                             <h3 class="text-sm font-medium text-yellow-800">${data.title || "Warning"}</h3>
                             <div class="mt-2 text-sm text-yellow-700">
                                 <p>${data.message || ""}</p>
                             </div>
                         </div>
                     </div>
                 </div>`;
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
