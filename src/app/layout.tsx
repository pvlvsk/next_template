import { Ubuntu } from "next/font/google";
import classNames from "classnames";
import ThemeToggle from "../components/ThemeToggle";

import dev_styles from "@src/styles/dev.module.scss";
import styles from "./styles/styles.module.scss";
import "@src/styles/global.scss";
import { Header } from "@src/components/Header";
import { Footer } from "@src/components/Footer";

const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["cyrillic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <html lang="ru">
      <body
        id="body"
        className={classNames(ubuntu.className, {
          [dev_styles.dev_body]: isDev,
        })}
      >
        {/* <ThemeToggle /> */}
        <div className={styles.root_layout}>
          <Header />
          <div className={styles.root_layout__wrap}>
            <main className={styles.root_layout__main}>{children} </main>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
