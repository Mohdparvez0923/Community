import blog from "../images/blog.jpg";

const Blog = () => {
  return (
    <div className="text-center pb-6 bg-gray-400 text-white">
      {/* HEADER SECTION */}
      <div className="px-3">
        <h1 className="text-3xl pt-6">Our Blog</h1>
        <p className="text-xl mt-2 mb-6">
          Discover stories, insights, and updates that shape our community and inspire new ideas.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid lg:grid-cols-2 md:items-center justify-items-center gap-8 w-full px-4">
        {/* IMAGE BLOCK */}
        <div className="w-full flex justify-center lg:justify-end">
          <img
            src={blog}
            className="w-[80%] sm:w-[70%] md:w-[60%] rounded-lg"
          
          />
        </div>

        {/* TEXT BLOCK */}
        <div className="w-full max-w-[80%] text-left mx-auto lg:ml-0 lg:mr-auto p-4 sm:p-6">
          <h1 className="text-3xl font-medium mb-6 text-center lg:text-left">
            Value proposition
          </h1>
          <p className="text-xl text-center  lg:text-left">
            Our community exists to bring fresh ideas, voices, and creativity to the surface.
            It’s a space built for dreamers, builders, and thinkers — where every perspective
            matters and every idea has a chance to shine.
          </p>
          <p className="text-xl mt-3 text-center lg:text-left">
            We believe true growth comes from collaboration, not competition — empowering
            people to connect, create, and inspire one another to make a real impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
