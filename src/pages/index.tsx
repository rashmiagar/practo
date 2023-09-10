import Image from 'next/image'
import localFont from 'next/font/local'
import Button from '../components/Button'
import Header from '../components/Header'

// const myFont = localFont({ src: '../../public/fonts/feather.woff', variable: '--font-feather' })



export default function Home() {
  return (
    <>
    <Header />
    <Button type="primary" text="Start a Consult" href="http://www.google.com" size='text-xl'>
      <i className="icon icon-user" />
    </Button>
    </>
  )
}
