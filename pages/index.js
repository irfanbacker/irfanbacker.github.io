import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <div className={utilStyles.container}>
      <Head>
        <meta
          name="description"
          content="Developer portfolio of Irfan Backer"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/irfanbacker.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content="Irfan Backer | Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={utilStyles.header}>
        <img src="./images/profile.jpg" className={`${utilStyles.headerHomeImage} ${utilStyles.borderCircle}`} alt="Irfan Backer" />
        <h1 className={utilStyles.heading2Xl}>Irfan Backer Iqbal Valappil</h1>
      </header>
      <main>
        <section className={utilStyles.headingMd}>
          <p>3rd year Computer Engineering Undergraduate</p>
        </section>
      </main>
    </div>
  )
}