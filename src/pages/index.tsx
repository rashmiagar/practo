import Image from 'next/image'
import localFont from 'next/font/local'
import Button from '../components/Button'

// const myFont = localFont({ src: '../../public/fonts/feather.woff', variable: '--font-feather' })



export default function Home() {
  return (
    <>
    <h1>Hi</h1>
    <Button type="primary" text="Button 1" href="http://www.google.com">
      <i className="icon icon-user" />
    </Button>
    </>
  )
}
