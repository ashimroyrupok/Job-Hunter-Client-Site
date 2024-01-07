
const Review = () => {
    return (
      <div className="my-10 overflow-x-hidden dark:bg-black dark:text-white bg-slate-100">
        <h1 className="text-5xl font-bold text-black dark:text-white text-center my-10 ">
          {" "}
          Our company Review
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-5 ">
          <div
            data-aos="fade-left"
            className="flex flex-col pb-4 shadow-md justify-center items-center"
          >
            <div className="avatar">
              <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://i.ibb.co/5nLd8PZ/boy2.jpg" />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-black font-semibold">Tania Andrew</h1>
              <p className="font-semibold">Frontend Lead @ Meta</p>
              <p className="text-slate-500">
                I found solution to all my design needs from Creative Tim. I use
                them as a freelancer in my hobby projects for fun! And its
                really affordable, very humble guys !!!
              </p>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="flex flex-col shadow-md justify-center items-center"
          >
            <div className="avatar">
              <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://i.ibb.co/0XJDKhQ/profile.png" />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-black font-semibold">Mrs You</h1>
              <p className="font-semibold">Digital market at X</p>
              <p className="text-slate-500">
                I found solution to all my design needs from Creative Tim. I use
                them as a freelancer in my hobby projects for fun! And its
                really affordable, very humble guys !!!
              </p>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="flex flex-col shadow-md pb-4 justify-center items-center"
          >
            <div className="avatar">
              <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://i.ibb.co/bQZR8tZ/girl2.jpg" />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-black font-semibold">Mariya Kundu</h1>
              <p className="font-semibold">Frontend Lead @ Google</p>
              <p className="text-slate-500">
                I found solution to all my design needs from Creative Tim. I use
                them as a freelancer in my hobby projects for fun! And its
                really affordable, very humble guys !!!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Review;