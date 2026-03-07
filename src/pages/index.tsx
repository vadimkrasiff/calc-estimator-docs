// src/pages/index.js
import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          🏠 ДомLike.Калькулятор
        </Heading>
        <p className="hero__subtitle">
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://vkrasiv.ru">
            🚀 Начать расчёт
          </Link>
          <Link
            className="button button--outline button--lg margin-left--md"
            to="/docs/">
            📚 Документация
          </Link>
        </div>
      </div>
    </header>
  );
}

function Feature({ title, description, icon }: { 
  title: string; 
  description: string; 
  icon: string 
}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div 
        className="text--center" 
        style={{ fontSize: '3rem', marginBottom: '1rem' }}
        role="img"
        aria-label={icon}
      >
        {icon}
      </div>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </div>
  );
}

function HomepageFeatures(): ReactNode {
  const features = [
    {
      icon: '🪵',
      title: 'Дома из бруса',
      description: 'Расчёт профилированного и клеёного бруса, нагелей, утеплителя межвенцового',
    },
    {
      icon: '🏗️',
      title: 'Каркасные дома',
      description: 'Пиломатериалы, утеплитель, паро- и гидроизоляция, крепёж — полная спецификация',
    },
    {
      icon: '🧱',
      title: 'Пеноблоки',
      description: 'Количество блоков, клей, арматура, фундамент — всё в одной смете',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title="Главная — Калькулятор строительства"
      // description="Расчёт материалов для домов из бруса, каркаса и пеноблоков"
      >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}