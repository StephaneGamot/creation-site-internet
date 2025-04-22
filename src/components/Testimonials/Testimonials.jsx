import testimonialsData from "./TestimonialsData.json";
import Image from "next/image";

export default function Testimonials({ ids = [] }) {
  const selectedTestimonials = testimonialsData.filter((t) => ids.includes(t.id));

  if (selectedTestimonials.length === 0) {
    return (
      <div className="bg-white py-24 text-center">
        <p className="text-gray-500">Aucun témoignage disponible pour cette page.</p>
      </div>
    );
  }

  return (
    <div className="bg-white py-12 rounded-2xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl/7 font-semibold">Témoignages</h2>
          <p className="mt-2 text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Nous avons travaillé avec des dizaines de personnes extraordinaires
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-5xl sm:mt-12 px-4">
  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {selectedTestimonials.map((testimonial) => (
      <figure key={testimonial.id} className="rounded-2xl bg-gray-50 p-6 text-sm leading-6 shadow">
        <blockquote className="text-gray-900 mb-4">
          <p>{`“${testimonial.body}”`}</p>
        </blockquote>
        <figcaption className="flex items-center gap-x-4">
          {testimonial.author.imageUrl && (
            <Image
              alt={testimonial.alt}
              src={testimonial.author.imageUrl}
              className="size-10 rounded-full bg-gray-50"
              width={40}
              height={40}
              loading="lazy"
            />
          )}
          <div>
            <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
          </div>
        </figcaption>
      </figure>
    ))}
  </div>
</div>

      </div>
    </div>
  );
}
