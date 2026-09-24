import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

export type ProjectImage = {
  src?: string;
  alt: string;
};

export function ProjectCarousel({ images }: { images: ProjectImage[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [selected, setSelected] = React.useState(0);
  const hasMultiple = images.length > 1;

  React.useEffect(() => {
    if (!api) return;

    setSelected(api.selectedScrollSnap());

    const onSelect = () => {
      setSelected(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className="project-carousel">
      <Carousel setApi={setApi} opts={{ loop: hasMultiple }} className="h-full w-full">
        <CarouselContent className="ml-0 h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="relative h-full pl-0">
              {image.src ? (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              ) : (
                <div className="project-carousel-placeholder">
                  <span className="project-media-badge">Foto em breve</span>
                </div>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>

        {hasMultiple && (
          <>
            <CarouselPrevious className="project-carousel-arrow-style left-3 border-none" />
            <CarouselNext className="project-carousel-arrow-style right-3 border-none" />
          </>
        )}
      </Carousel>

      {hasMultiple && (
        <div className="project-carousel-dots" role="tablist" aria-label="Imagens do projeto">
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === selected}
              aria-label={`Ver imagem ${index + 1} de ${images.length}: ${image.alt}`}
              className={`project-carousel-dot ${index === selected ? "is-active" : ""}`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
