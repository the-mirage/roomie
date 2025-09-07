import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="flex justify-around lg:flex-nowrap flex-wrap gap-10 h-full lg:pt-16 md:pt-10 pt-6 px-40 pb-24">
      <div className="">
        <div className="w-fit bg-color-primary">
          <Image
            src="https://images.unsplash.com/photo-1637684666772-1f215bfd0f5d"
            alt="CEO profile"
            width={350}
            height={350}
            loading="lazy"
            className="object-cover w-fit -translate-x-8 translate-y-8"
          />
        </div>
        <p className="pt-10 text-center font-semibold font-secondary md:text-[30px] text-2xl">
          John John (CEO)
        </p>
      </div>

      <article className="prose text-[15px] font-secondary font-medium">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias soluta
          earum expedita doloribus. Impedit officiis assumenda praesentium
          placeat quo, quibusdam architecto quia eos aperiam dicta, voluptates
          minus rem, soluta numquam quasi iusto eius. Error placeat minus
          eveniet asperiores quasi facilis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eius
          obcaecati! Eligendi aspernatur aliquam quia, accusantium consectetur
          vel facere adipisci! Eveniet vero, aperiam facilis voluptas illo
          quaerat. Quasi blanditiis repellendus suscipit vero at molestias.
          Provident officiis iste accusamus rerum exercitationem, fugit modi
          cumque atque aliquam tenetur voluptatibus numquam, veniam fugiat dolor
          harum eveniet excepturi perferendis vero deleniti! Commodi
          consequuntur inventore, quae provident delectus iste quidem doloremque
          aperiam perferendis deleniti dolorum neque quisquam impedit suscipit
          dolorem ut facilis nostrum voluptatum pariatur exercitationem
          perspiciatis? Ipsam minima aperiam eveniet ad tempore nulla nisi sint
          delectus? Consectetur, excepturi! Aliquam facilis rem laborum odio!
          Laboriosam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam,
          culpa laudantium dicta a debitis mollitia voluptatum cumque, vitae
          ullam at dolorem ex doloremque placeat eius error! Adipisci omnis
          ullam ex aut architecto expedita eaque porro veritatis quae obcaecati
          dolorem neque, in totam consequuntur nihil eius mollitia cupiditate,
          corporis inventore? Facere iste laudantium amet cupiditate hic impedit
          blanditiis atque sed vel?
        </p>
      </article>
    </section>
  );
};

export default AboutUs;
