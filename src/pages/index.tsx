import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const guides = [
  {
    title: 'Начало работы',
    description: 'Вход в приложение и первый расчёт.',
    path: '/docs/getting-started',
  },
  {
    title: 'Калькулятор',
    description: 'Параметры дома, расчёт газобетона и ленточного фундамента.',
    path: '/docs/calculator',
  },
  {
    title: 'Материалы и цены',
    description: 'Настройка каталога и проверка цен в смете.',
    path: '/docs/materials',
  },
];

export default function Home(): ReactNode {
  return (
    <Layout description="Справка по расчёту материалов и стоимости строительства в ДомЛайке">
      <main className={styles.page}>
        <div className="container">
          <header className={styles.intro}>
            <Heading as="h1">Документация ДомЛайка</Heading>
            <p>Как настроить каталог, рассчитать материалы и сохранить смету.</p>
            <div className={styles.actions}>
              <a className="button button--primary" href="https://domlike.vkrasiv.online/">
                Открыть калькулятор
              </a>
              <Link className="button button--outline button--primary" to="/docs/">
                Все инструкции
              </Link>
            </div>
          </header>
          <section className={styles.guides} aria-label="Разделы справки">
            {guides.map(({ title, description, path }) => (
              <Link key={path} className={styles.guide} to={path}>
                <Heading as="h2">{title}</Heading>
                <p>{description}</p>
              </Link>
            ))}
          </section>
        </div>
      </main>
    </Layout>
  );
}
