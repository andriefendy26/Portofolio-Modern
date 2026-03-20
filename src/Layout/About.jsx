import AnimatedContent from "../Component/AnimateContent/AnimateContent";
import Lanyard from "../Component/Lanyard/Lanyard";

export default function About() {
  return (
    <div id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 px-4 sm:px-6 lg:px-8">
      {/* Lanyard Section */}
      <div className="order-2 lg:order-1 mask-alpha mask-t-from-black mask-t-from-50% mask-t-to-transparent">
        {/* <Lanyard></Lanyard> */}
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>
      
      {/* Content Section */}
      <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end max-w-full lg:max-w-xl text-justify mt-6 lg:mt-10  ">
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={true}
          duration={1.2}
          ease="ease.in"
          initialOpacity={0}
          animateOpacity
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 edu-vic-wa-nt-hand text-center lg:text-left">
            About Me
          </h2>
        </AnimatedContent>
        
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="ease.in"
          initialOpacity={0}
          animateOpacity
        >
          <p className="roboto-mono tracking-wide text-sm sm:text-base leading-relaxed">
            <span className="hidden lg:inline mx-4"></span>Perjalanan saya di dunia teknologi dimulai sejak SMP, saat ketertarikan pada komputer mulai tumbuh. Minat tersebut membawa saya melanjutkan studi di Program Studi Teknik Komputer, Universitas Borneo Tarakan pada tahun 2021. Selama kuliah, saya aktif mengembangkan kemampuan melalui berbagai proyek seperti Internet of Things (IoT), aplikasi Android, dan pengembangan website. Saya juga bekerja paruh waktu sebagai barista, yang membentuk kedisiplinan, tanggung jawab, dan kemampuan manajemen waktu. Beberapa proyek yang pernah saya kerjakan meliputi aplikasi kasir berbasis website dan Android, serta layanan freelance pembuatan aplikasi mobile dan website. Melalui skripsi berjudul “Pengembangan Fitur E-Logbook Berbasis Face Recognition pada Website C2UKaltara.id”, saya semakin memperdalam keahlian di bidang teknologi.
          </p>
        </AnimatedContent>
      </div>
    </div>
  );
}