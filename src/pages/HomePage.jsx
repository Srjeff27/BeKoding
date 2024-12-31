import HeroImage from "../assets/images/hero.svg";
import AboutImage from "../assets/images/about.svg";
import Proyek1 from "../assets/images/proyek-1.webp";
import Proyek2 from "../assets/images/proyek-2.webp";
import Proyek3 from "../assets/images/proyek-3.webp";
import Proyek4 from "../assets/images/proyek-4.webp";
import Proyek5 from "../assets/images/proyek-5.webp";

const HomePage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box ">
            <h1 className=" font-bold lg:text-10xl/tight text-6xl mb-7 ">
              WebBu
              <span className="font-bold text-sky-400">ilder Pro</span>
            </h1>
            <p className="text-base/8 mb-7">
              Jasa pembuatan website berkualitas tinggi untuk mendukung bisnis
              Anda. Cepat, aman, dan siap memberikan pengalaman terbaik bagi
              pengunjung Anda.
            </p>
            <a
              href="#about"
              className="bg-sky-400 hover:bg-sky-500 transition-all py-2 px-4 text-white shadow rounded-full"
            >
              Tentang Kami <i className="ri-eye-line ms-1"></i>{" "}
            </a>
          </div>
          <div className="box">
            <img
              src={HeroImage}
              alt="HeroImage"
              className="md:w-full w-[400px] mx-auto md:m-0"
            />
          </div>
        </div>
        <div
          className="about grid md:grid-cols-2 grid-cols-1 items-center  md:gap-20 gap-10 md:pt-20 pt-32"
          id="about"
        >
          <div className="box md:order-1 order-2">
            <img
              src={AboutImage}
              alt="About Image"
              className="lg:w-[500px] w-[400px] md:m-0 mx-auto"
            />
          </div>
          <div className="box md:order-2 order-1">
            <h1 className=" font-bold lg:text-10xl/tight text-6xl mb-7 ">
              Tentang
              <span className="font-bold text-sky-400"> Kami</span>
            </h1>
            <p className="text-base/loose text-justify">
              Selamat datang di Bekoding, mitra terpercaya Anda dalam jasa
              pembuatan website berkualitas tinggi. Kami berdedikasi untuk
              membantu bisnis Anda tumbuh melalui solusi web yang cepat, aman,
              dan modern. Dengan tim profesional yang berpengalaman, kami
              berkomitmen untuk menciptakan pengalaman online terbaik bagi Anda
              dan pelanggan Anda. Percayakan kebutuhan website Anda kepada
              Bekoding – tempat di mana kreativitas dan teknologi bertemu untuk
              mendukung kesuksesan Anda.
            </p>
          </div>
        </div>
        <div>
          <div className="services pt-32" id="services">
            <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
              Layanan
            </h1>
            <p className="text-center ">
              Kami menyediakan berbagai layanan pembuatan dan pengembangan
              website untuk membantu bisnis Anda tampil lebih profesional dan
              menarik perhatian pelanggan. Dengan teknologi terkini dan tim
              ahli, kami siap membantu Anda mencapai tujuan digital Anda.
            </p>
            <div className="services-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
              <div className="box bg-sky-400 rounded-lg shadow p-4">
                <i className="ri-number-1 text-3xl text-white">
                  <h3 className="text-xl font-bold text-white mt-6 mb-2">
                    Pembuatan Website Custom
                  </h3>
                  <p className="text-white text-base/loose">
                    Kami merancang dan mengembangkan website sesuai dengan
                    kebutuhan dan visi bisnis Anda. Mulai dari desain unik
                    hingga fitur khusus, kami memastikan website Anda
                    mencerminkan identitas brand secara sempurna.
                  </p>
                </i>
              </div>
              <div className="box box bg-sky-400 rounded-lg shadow p-4">
                <i className="ri-number-2 text-3xl text-white">
                  <h3 className="text-xl font-bold text-white mt-6 mb-2">
                    Pengembangan E-commerce
                  </h3>
                  <p className="text-white text-base/loose">
                    Membantu Anda membangun platform toko online yang menarik,
                    responsif, dan mudah digunakan. Dilengkapi dengan sistem
                    pembayaran yang aman dan fitur manajemen produk yang
                    efisien.
                  </p>
                </i>
              </div>
              <div className="box box bg-sky-400 rounded-lg shadow p-4">
                <i className="ri-number-3 text-3xl text-white">
                  <h3 className="text-xl font-bold text-white mt-6 mb-2">
                    Optimasi dan Maintenance Website
                  </h3>
                  <p className="text-white text-base/loose">
                    Kami tidak hanya membuat website, tetapi juga memastikan
                    performanya tetap optimal. Layanan ini mencakup optimasi
                    kecepatan, keamanan, SEO, dan pembaruan berkala agar website
                    Anda selalu relevan dan aman.
                  </p>
                </i>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="proyek pt-32" id="proyek">
            <h1 className="text-center lg:text-5xl/tight text-3xl font-medium mb-2">
              Proyek
            </h1>
            <p className="text-center">
              Kami telah membantu berbagai bisnis dan organisasi mencapai tujuan
              mereka dengan solusi website yang profesional dan inovatif.
              Berikut adalah beberapa proyek yang telah kami selesaikan :
            </p>
            <div className="proyek-box pt-12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
              <div className="box p-2 bg-white shadow">
                <img
                  src={Proyek1}
                  alt="Proyek Image"
                  className="w-full h-[220px]"
                />
                <h3 className="text-xl font-bold  mt-6 mb-2">
                  Proyek Website Perusahaan
                </h3>
                <p className=" text-base/loose">
                  Pembuatan website resmi untuk perusahaan yang menampilkan
                  profil bisnis, layanan, dan informasi kontak secara
                  profesional. Fokus pada desain modern dan navigasi yang mudah.
                </p>
              </div>
              <div className="box p-2 bg-white shadow">
                <img
                  src={Proyek2}
                  alt="Proyek Image"
                  className="w-full h-[220px]"
                />
                <h3 className="text-xl font-bold  mt-6 mb-2">
                  Platform E-commerce
                </h3>
                <p className=" text-base/loose">
                  Proyek untuk sebuah toko online, lengkap dengan fitur
                  keranjang belanja, sistem pembayaran, dan manajemen produk
                  yang responsif untuk pengalaman belanja online yang lancar.
                </p>
              </div>
              <div className="box p-2 bg-white shadow">
                <img
                  src={Proyek3}
                  alt="Proyek Image"
                  className="w-full h-[220px]"
                />
                <h3 className="text-xl font-bold  mt-6 mb-2">
                  Website Portfolio Pribadi
                </h3>
                <p className=" text-base/loose">
                  Membantu klien individu menampilkan karya mereka dalam format
                  yang menarik dan responsif, cocok untuk fotografer, desainer
                  grafis, dan profesional kreatif lainnya.
                </p>
              </div>
              <div className="box p-2 bg-white shadow">
                <img
                  src={Proyek4}
                  alt="Proyek Image"
                  className="w-full h-[220px]"
                />
                <h3 className="text-xl font-bold  mt-6 mb-2">
                  Website Edukasi
                </h3>
                <p className=" text-base/loose">
                  Platform pembelajaran online yang interaktif, mencakup materi
                  pembelajaran, kuis, dan integrasi video untuk mendukung proses
                  belajar-mengajar yang lebih efektif.
                </p>
              </div>
              <div className="box p-2 bg-white shadow">
                <img
                  src={Proyek5}
                  alt="Proyek Image"
                  className="w-full h-[220px]"
                />
                <h3 className="text-xl font-bold  mt-6 mb-2">
                  Aplikasi Web Dashboard
                </h3>
                <p className=" text-base/loose">
                  Pengembangan dashboard berbasis web untuk pengelolaan data dan
                  analitik, digunakan oleh klien untuk memantau performa bisnis
                  secara real-time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
