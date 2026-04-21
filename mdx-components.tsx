import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

export function useMDXComponents(
  components: MDXComponents = {},
): MDXComponents {
  return {
    h1: (props) => (
      <h1
        className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1] mb-6"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="text-2xl font-semibold tracking-tight mt-12 mb-4"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="text-xl font-semibold tracking-tight mt-8 mb-3"
        {...props}
      />
    ),
    p: (props) => (
      <p className="text-muted leading-relaxed mb-4" {...props} />
    ),
    a: ({ href = "", ...rest }: ComponentPropsWithoutRef<"a">) => {
      const external = /^(https?:)?\/\//.test(href);
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-strong underline decoration-dotted underline-offset-4 hover:text-foreground transition-colors"
            {...rest}
          />
        );
      }
      return (
        <Link
          href={href}
          className="text-accent-strong underline decoration-dotted underline-offset-4 hover:text-foreground transition-colors"
          {...rest}
        />
      );
    },
    ul: (props) => (
      <ul
        className="list-disc pl-6 my-4 flex flex-col gap-2 text-muted"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="list-decimal pl-6 my-4 flex flex-col gap-2 text-muted"
        {...props}
      />
    ),
    li: (props) => <li className="leading-relaxed" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="border-l-2 border-accent pl-4 my-6 text-foreground italic"
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="font-mono text-sm bg-surface-elevated text-accent-strong px-1.5 py-0.5"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="card-gradient border border-border p-4 my-6 overflow-x-auto font-mono text-sm leading-relaxed"
        {...props}
      />
    ),
    hr: () => <hr className="my-10 border-border" />,
    ...components,
  };
}
