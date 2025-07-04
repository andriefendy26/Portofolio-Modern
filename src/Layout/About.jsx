import AnimatedContent from "../Component/AnimateContent/AnimateContent";
import Lanyard from "../Component/Lanyard/Lanyard";

export default function About() {
  return (
    <div id="about" className="grid grid-cols-2">
      <div className=" mask-alpha mask-t-from-black mask-t-from-50% mask-t-to-transparent">
        <Lanyard></Lanyard>
      </div>
      <div className="flex flex-col items-end  max-w-xl text-justify mt-10 ">
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={true}
          duration={1.2}
          ease="ease.in"
          initialOpacity={0}
          animateOpacity
        >
          <h2 className="text-6xl font-bold mb-8 edu-vic-wa-nt-hand">
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
          <p className="roboto-mono tracking-wide">
            <span className="mx-4"></span>Perjalanan saya di dunia teknologi
            dimulai sejak bangku SMP, memicu ketertarikan pada komputer yang
            kemudian mendorong saya untuk menempuh pendidikan di program studi
            Teknik Komputer, Universitas Borneo Tarakan pada tahun 2021. Selama
            masa perkuliahan, saya aktif mengembangkan diri melalui pengalaman
            praktis. Saya bekerja paruh waktu sebagai barista, yang tidak hanya
            membantu secara finansial tetapi juga membentuk kedisiplinan,
            tanggung jawab, dan kemampuan manajemen waktu yang baik antara studi
            dan pekerjaan. Di sela-sela kuliah dan pekerjaan, saya juga aktif
            mengerjakan berbagai proyek teknologi seperti Internet of Things
            (IoT), aplikasi Android, dan pengembangan website. Beberapa proyek
            penting yang pernah saya kerjakan antara lain: aplikasi kasir
            berbasis website dan Android, serta layanan freelance jasa pembuatan
            aplikasi mobile dan website untuk kebutuhan klien. Skripsi saya yang
            berjudul "Pengembangan Fitur E-Logbook Berbasis Face Recognition
            pada Website C2UKaltara.id" semakin memperdalam keahlian saya.
          </p>
        </AnimatedContent>
      </div>
    </div>
  );
}
