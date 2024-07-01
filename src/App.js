import './App.css';
import logo from "./logo512.png"
import thumbnail from "./thumbnail.png"


const blogs = [
  {
    id: 111111,
    img: thumbnail,
    title: "Digital Nomad Essentials",
    content: "Must-have tools and apps for working remotely. Stay productive and connected while exploring the world as a digital nomad"
  },
  {
    id: 111112,
    img: "https://i.ytimg.com/vi/6fjnjTcGtb0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQcennSUKrMDq6EqbFvw5NMsZFqQ",
    title: "Why Not You.",
    content: "Must-have tools and apps for working remotely. Stay productive and connected while exploring the world as a digital nomad"
  },
  {
    id: 111113,
    img: "https://i.ytimg.com/vi/MRDfns-bKzM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC1iEcQUhIJF5DS29mSLMXEPo0Blw",
    title: "quiet your mind",
    content: "Must-have tools and apps for working remotely. Stay productive and connected while exploring the world as a digital nomad"
  },
  {
    id: 111114,
    img: "https://i.ytimg.com/vi/2KBpiA8VOUw/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGAoOTAP&rs=AOn4CLDi5C-kaozTYMVpau1uepklQBiVxw",
    title: "What if you're in a russian novel",
    content: "Must-have tools and apps for working remotely. Stay productive and connected while exploring the world as a digital nomad"
  },
  {
    id: 111115,
    img: "https://i.ytimg.com/vi/_02p28tPaVg/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IBMoJzAP&rs=AOn4CLCghLEk3-KqUy_m4EhpiKNbC807_A",
    title: "Digital Nomad Essentials",
    content: "Must-have tools and apps for working remotely. Stay productive and connected while exploring the world as a digital nomad"
  },
  {
    id: 111116,
    img: "https://i.ytimg.com/vi/a5rpTBRXXrc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOwJ3_sNscnyPKJ09TUR7ESXfsdA",
    title: "The Art of Faking It",
    content: "Must-have tools and apps for working remotely. Stay productive and connected while exploring the world as a digital nomad"
  }
];


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
  return <div className='bg-gradient-to-b from-gray-950 flex items-center justify-between p-3  sticky top-0 '>
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
  return <div className=' bg-gradient-to-t from-cyan-950 p-14 flex flex-col items-center'>
    <h1 className=' text-white max-w-xl  font-bold text-4xl py-10 text-center'>BE A PART OF OUR COMMUNITY AND SHARE YOUR GENUIS IDEAS WITH US</h1>
    <Button>Start Now</Button>
  </div>
}


function Articles() {
  return <div className='flex justify-center items-center  p-8  '>
    <div className='  grid grid-cols-3 gap-4   '>

      {blogs.map((blog) => (<Article thumbnail={blog.img} title={blog.title} key={blog.id} />))}

    </div >
  </div >
}

function Article({ thumbnail, title }) {
  return <div className='bg-gradient-to-b from-cyan-900 max-w-80 rounded-2xl m-5 text-white cursor-pointer hover:bg-gray-900  '>
    <div className='w-full h-[170px] overflow-hidden rounded-t-2xl'>
      <img className=' w-full h-full object-cover rounded-t-2xl' src={thumbnail} alt="blog1" />
    </div>
    <div className='p-3'>
      <h2 className='py-2 font-bold'>{title}</h2>
      <p className='text-sm text-gray-400'>Must-have tools and apps for working remotely. Stay productive and connected while exploring the world as a digital nomad... <span className='text-white'>{"=>"} Read More</span></p>
    </div>
  </div >
}


function Footer() {
  return <div className='p-5'>
    <p className='text-white font-bold text-xl text-center '>YouBlog. 2024</p>
  </div>
}