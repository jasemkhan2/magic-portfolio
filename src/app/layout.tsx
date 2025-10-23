// src/app/layout.tsx

import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from "classnames";

// FIX: Import the Client Component wrapper
import {Providers} from "@/components/Providers"; 

// Only import what's needed for the Server Component (Metadata and HTML attributes)
import { baseURL, style, font, home } from "@/app/resources";
import { Meta } from "@/once-ui/modules";

// FIX: The 'use client'; directive has been REMOVED.
// This allows generateMetadata to run on the server correctly.
export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    // FIX: Use the standard <html> tag and move HTML attributes here
    <html
      suppressHydrationWarning
      lang="en"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
      className={classNames(
        font.primary.variable,
        font.secondary.variable,
        font.tertiary.variable,
        font.code.variable,
      )}
    >
      <head>
        {/* The theme script stays in <head> for flicker prevention */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'system';
                  const root = document.documentElement;
                  if (theme === 'system') {
                    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    root.setAttribute('data-theme', isDark ? 'dark' : 'light');
                  } else {
                    root.setAttribute('data-theme', theme);
                  }
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      {/* FIX: Use the standard <body> tag */}
      <body>
        {/* All the client components are now wrapped in the Providers component */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}