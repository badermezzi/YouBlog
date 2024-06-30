import './App.css';
import logo from "./logo512.png"
import thumbnail from "./thumbnail.png"

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Articles />
      <Footer />
    </div>
  );
}
export default App;


function Header() {
  return <div className='flex items-center justify-between  p-2 m-2 '>
    <img className='w-10 ml-5 cursor-pointer' src={logo} alt="logo" />
    <div className='flex gap-5 mr-5' >
      <Button>Home</Button>
      <Button>+ Add New Post</Button>
      <Button>Contact Us</Button>
    </div>
  </div>
}

function Button({ children }) {
  return <span className='bg-white text-black font-bold text-sm  bold px-4 py-2 rounded-lg cursor-pointer hover:bg-slate-200 max-w-fit' >{children}</span>
}

function Hero() {
  return <div className='bg-gradient-to-t from-cyan-950 p-14 flex flex-col items-center'>
    <h1 className=' text-white max-w-xl  font-bold text-4xl py-10 text-center'>BE A PART OF OUR COMMUNITY AND SHARE YOUR GENUIS IDEAS WITH US</h1>
    <Button>Create Now</Button>
  </div>
}


function Articles() {
  return <div className=' flex justify-center items-center  py-8  '>
    <div className='  grid grid-cols-3 gap-4   '>
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </div >
  </div >
}

function Article() {
  return <div className='bg-gradient-to-b from-cyan-900 max-w-60 rounded-2xl m-5 text-white cursor-pointer hover:bg-gray-700  '>
    <img className='rounded-t-2xl' src={thumbnail} alt="blig1" />
    <div className='p-3'>
      <h2 className='py-2 font-bold'>Digital Nomad Essentials</h2>
      <p className='text-sm text-gray-400'>Must-have tools and apps for working remotely. Stay productive and connected while exploring the world as a digital nomad... <span className='text-white'>{"=>"} Read More</span></p>
    </div>
  </div >
}


function Footer() {
  return <div className='p-5'>
    <p className='text-white font-bold text-xl text-center '>YouBlog. 2024</p>
  </div>
}