import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Global, MantineProvider } from '@mantine/core';
import { theme } from "styles/theme";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
       
        <MantineProvider 
          withGlobalStyles 
          withNormalizeCSS
          theme={theme} 
          
        >
          <Global
            styles={(theme) => ({
              "*, *::before, *::after": {
                boxSizing: "border-box",
              },

              "@font-face": {
                fontFamily: 'Open Sans, sans-serif',
                src: `url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap')`,
                fontWeight: 700,
                fontStyle: "normal",
              },
              img: {
                objectFit: "cover"
              },
              html: {
                height: '100%'
              },
              body: {
                height: '100%',
                ...theme.fn.fontStyles(),
                color: theme.colors.brand[0],
                lineHeight: theme.lineHeight
              },
            })}
          />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </MantineProvider>
      </body>
    </html>
  );
}
