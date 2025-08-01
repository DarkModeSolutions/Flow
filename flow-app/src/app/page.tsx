"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import EnergyDrinkImg1 from "@/assets/images/EnergyDrinkImg1.png";
import EnergyDrinkImg2 from "@/assets/images/EnergyDrinkImg2.png";
import EnergyDrinkImg3 from "@/assets/images/EnergyDrinkImg3.png";
import Image from "next/image";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const cardContents = [
    {
      image: EnergyDrinkImg1,
      title: "Energy Drink 1",
      description: "Refreshing energy drink with a burst of flavor.",
    },
    {
      image: EnergyDrinkImg2,
      title: "Energy Drink 2",
      description: "Boost your energy with this revitalizing drink.",
    },
    {
      image: EnergyDrinkImg3,
      title: "Energy Drink 3",
      description: "Stay energized and focused with our premium blend.",
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {cardContents.map((cardContent, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="aspect-square items-center justify-center p-6">
                  <Image src={cardContent.image} alt={cardContent.title} />
                  <h2 className="text-lg font-semibold mt-4">
                    {cardContent.title}
                  </h2>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default function Home() {
  return (
    <div className="flex justify-center items-center p-8">
      <CarouselPlugin />
    </div>
  );
}
