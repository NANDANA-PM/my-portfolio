import Button from "../common/Button";
import Container from "../layout/Container";
import Image from "next/image";
import { personal } from "@/data/personal";

export default function Hero() {
  return (
    <section className="py-20">
      <Container>
  <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between">

    {/* Left Side */}
    <div className="flex-1">
      <p className="font-semibold text-blue-600">
        Hello, I&apos;m
      </p>

      <h1 className="mt-2 text-5xl font-bold tracking-tight">
        {personal.name}
      </h1>

      <h2 className="mt-4 text-2xl text-gray-600">
        {personal.role}
      </h2>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
         {personal.about}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Button href={personal.resume}>
          Download Resume
        </Button>

        <Button
          href="#contact"
          variant="secondary"
        >
          Contact Me
        </Button>
      </div>
    </div>

    {/* Right Side */}
    <div className="flex justify-center">
      <Image
        src={personal.profileImage}
        alt={personal.name}
        width={350}
        height={350}
        priority
        className="rounded-full border-4 border-blue-600 object-cover shadow-2xl"
      />
    </div>

  </div>
</Container>
    </section>
  );
}