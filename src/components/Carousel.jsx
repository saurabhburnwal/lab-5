import { useEffect, useRef, useState } from 'react';

function Carousel({ items = [], interval = 3500, renderItem }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (items.length <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [items.length, interval]);

  const goTo = (i) => setIndex((i + items.length) % items.length);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  if (!items.length) return null;

  return (
    <section className="relative w-full overflow-hidden rounded-xl border border-white/20 bg-black/20 max-w-5xl mx-auto">
      <figure className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <section className="absolute inset-0">
          {items.map((item, i) => (
            <article
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
            >
              {renderItem ? renderItem(item) : (
                <section className="h-full w-full flex items-center justify-center text-white">
                  {String(item)}
                </section>
              )}
            </article>
          ))}

          <button aria-label="Previous" onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full">
            <i className="fa-solid fa-chevron-left" />
          </button>
          <button aria-label="Next" onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full">
            <i className="fa-solid fa-chevron-right" />
          </button>

          <nav aria-label="Carousel Pagination" className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
            {items.map((_, i) => (
              <button key={i} aria-label={`Go to slide ${i + 1}`} onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'} hover:bg-white`}
              />
            ))}
          </nav>
        </section>
        <figcaption className="sr-only">Image carousel with controls and pagination</figcaption>
      </figure>
    </section>
  );
}

export default Carousel;
