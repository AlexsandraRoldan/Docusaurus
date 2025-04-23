import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.hero__title}>
            🛠️ Inspector
          </Heading>
          <p className={styles.hero__subtitle}>
            La herramienta definitiva para <span className={styles.highlight}>analizar</span> y <span className={styles.highlight}>depurar</span> aplicaciones web
          </p>
          <div className={styles.buttons}>
          <Link
  className="button button--secondary button--lg" // Clases originales de Docusaurus
  to="/docs/intro">
  ¡Aprende mas sobre el inspector aqui!
</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Inspector - Herramienta de desarrollo web"
      description="La herramienta definitiva para analizar y depurar aplicaciones web">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}