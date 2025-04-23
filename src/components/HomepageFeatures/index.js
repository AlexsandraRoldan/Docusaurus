import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const features = [
  {
    title: 'Explora el DOM',
    description: 'El Inspector te permite visualizar y modificar el HTML y CSS en tiempo real. Ideal para depurar y entender la estructura de tu sitio.',
    icon: '🔍',
  },
  {
    title: 'Depura con facilidad',
    description: 'Analiza errores directamente desde el navegador, accede al panel de consola, performance, red y más.',
    icon: '🛠️',
  },
  {
    title: 'Ahorra tiempo',
    description: 'Haz pruebas sin tocar tu código fuente. Cambia estilos o estructura sobre la marcha.',
    icon: '⏱️',
  },
];

function Feature({title, description, icon}) {
  return (
    <div className={clsx(styles.card, 'card')}>
      <div className={styles.icon}>{icon}</div>
      <h3 className={clsx(styles.featureTitle, 'text--primary')}>{title}</h3>
      <p className={clsx(styles.featureDescription, 'text--secondary')}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.cardGrid}>
        {features.map((feature, idx) => (
          <Feature key={idx} {...feature} />
        ))}
      </div>
    </section>
  );
}