import { useState } from 'react';
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
      <Articles />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;


function Header() {
  return <div className=' flex items-center justify-center pb-3 px-8 pt-7   bg-gradient-to-b from-black from-1%   to-100%'>
    {/* <img className='w-10 ml-5 cursor-pointer drop-shadow-glow' src={logo} alt="logo" /> */}
    <img className='w-10 cursor-pointer drop-shadow-glow' src={logo} alt="logo" />
    {/* <div className='flex gap-9 mr-5' >
      <Button>Home</Button>
      <Button>+ Add New Post</Button>
      <Button>Contact Us</Button>
    </div> */}
  </div>
}

function Button({ children }) {
  return <span className='bg-white text-black font-bold text-[13px]  bold px-4 py-2 rounded-lg cursor-pointer hover:bg-slate-200 max-w-fit' >{children}</span>
}

function Hero() {
  return <div className=' bg-gradient-to-t from-cyan-950 p-14 flex flex-col items-center'>
    <h1 className=' text-white max-w-xl  font-bold text-4xl py-10 text-center'>BE A PART OF OUR COMMUNITY AND SHARE YOUR GENUIS IDEAS WITH US</h1>
    <Button>Start Now</Button>
  </div>
}


function Articles() {

  const [addingPost, setAddingPost] = useState(false);

  const [imageURL, setImageURL] = useState();
  const [titel, setTitel] = useState("The Blog Title");
  const [blog, setBlog] = useState("Blog Content");




  return <div className='flex justify-center items-center  px-8  '>
    <div className='  grid grid-cols-3 gap-4   '>

      {addingPost || <div onClick={() => (setAddingPost(true))} className='h-[315px] bg-gray-950/[.5] border-4 border-gray-400/[.5] rounded-2xl border-dashed m-5 flex justify-center text-center items-center pb-6 cursor-pointer hover:bg-gray-900/[.6]'>
        <span className='text-gray-400/[.7] text-9xl'>+</span>
      </div>}

      {addingPost && <div className="col-span-2 h-[315px] bg-gray-950/[.5] border-4 border-gray-400/[.5] rounded-2xl border-dashed m-5 p-5 overflow-hidden">
        <form className="flex flex-col space-y-4 overflow-y-auto h-full custom-scrollbar p-2">
          <div>
            <label className="text-white block mb-1">Image URL:</label>
            <input
              type="text"
              placeholder="Enter image URL"
              className="w-full p-2 bg-gray-800 text-gray-300 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={imageURL}
              onChange={(e) => (setImageURL(e.target.value))}
            />
          </div>
          <div>
            <label className="text-white block mb-1">Blog Title:</label>
            <input
              type="text"
              placeholder="Enter blog title"
              className="w-full p-2 bg-gray-800 text-gray-300 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={titel}
              onChange={(e) => (setTitel(e.target.value))}
            />
          </div>
          <div>
            <label className="text-white block mb-1">Blog Content:</label>
            <textarea
              placeholder="Enter blog content"
              className="w-full p-2 bg-gray-800 text-gray-300 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              value={blog}
              onChange={(e) => (setBlog(e.target.value))}
            ></textarea>
          </div>
          <div className="flex justify-end space-x-4 mt-auto">
            <button
              type="button"
              className="p-2 bg-gray-700 text-white rounded hover:bg-gray-600"
              onClick={() => (setAddingPost(false))}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Publish
            </button>
          </div>
        </form>
      </div>

      }


      {addingPost && <div className='bg-gradient-to-b from-cyan-900  rounded-2xl m-5 text-white cursor-pointer hover:bg-gray-900'>
        <div className='w-full h-[180px] overflow-hidden rounded-t-2xl'>
          <img className=' w-full h-full object-cover ' src={imageURL || `https://www.osdla.com/wp-content/uploads/2014/10/placeholder-1.png`} alt="blog1" />
        </div>
        <div className='p-3 h-[135px] w-100% max-w-100%'>
          <h2 className='py-2 font-bold text-wrap break-words'>{titel}</h2>
          <p className='text-sm text-gray-400 pb-2 w-100% h-auto  text-wrap break-words'>{blog?.length >= 120 ? <span> {blog.slice(0, 120).trim()} ... <span className='text-white'>{"=>Read More"}</span> </span> : blog}</p>
        </div>
      </div>}


      {blogs.map((blog) => (<Article thumbnail={blog.img} title={blog.title} content={blog.content} key={blog.id} />))}

    </div >
  </div >
}

function Article({ thumbnail, title, content }) {
  return <div className='bg-gradient-to-b from-cyan-900  rounded-2xl m-5 text-white cursor-pointer hover:bg-gray-900  '>
    <div className='w-full h-[180px] overflow-hidden rounded-t-2xl'>
      <img className=' w-full h-full object-cover rounded-t-2xl' src={thumbnail} alt="blog1" />
    </div>
    <div className='p-3 h-[135px]'>
      <h2 className='py-2 font-bold'>{title}</h2>
      <p className='text-sm text-gray-400 pb-2'>{content}... <span className='text-white'>{"=>"} Read More</span></p>
    </div>
  </div >
}


function Footer() {
  return <div className=' bg-cyan-950 p-5'>
    <p className='  text-white font-bold text-xl text-center '>YouBlog. 2024</p>
  </div>
}