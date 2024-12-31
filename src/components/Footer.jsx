const footer = () => {
  return (
    <div className="footer bg-white shadow mt-20" id="social">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="py-4">
          &copy; Copyright by{" "}
          <span className="font-bold">Jefri Hamid Jaya</span> | 2025
        </p>
        <div className="social-footer flex items-center lg:gap-7 md:gap-5 sm:gap-5 gap-2">
          <i className="ri-facebook-circle-fill text-2xl"></i>
          <i className="ri-instagram-fill text-2xl"></i>
          <i className="ri-twitter-fill text-2xl"></i>
          <i className="ri-youtube-fill text-2xl"></i>
          <i className="ri-linkedin-fill text-2xl"></i>
          <i className="ri-reddit-fill text-2xl"></i>
        </div>
      </div>
    </div>
  );
};

export default footer;
