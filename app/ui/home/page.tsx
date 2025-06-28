import Image from "next/image";
import Profile from "@/app/ui/images/profile.jpg"
import { Instagram, Linkedin } from "lucide-react";

export default function HomeUI() {

  return (
    <>
      <div className="grid md:grid-cols-2 m-3 items-center">
        <div className="">
          <h2 className="text-xl font-bold">Hello &#128075;, it's me YOKESH B</h2>
          <h3 className="text-l font-bold">And I'm a <span className="text-cyan-700">Developer</span></h3>
          <p className="">
            Aspiring developer with 6 months of hands-on experience, 
            eager to build scalable solutions and grow in a dynamic tech environment. 
            Passionate about clean code, continuous learning, and contributing to impactful projects.
          </p>
          <div className="flex gap-2 items-center mt-3">
            <a href="https://www.instagram.com/__.expression_king.__/#" target="_blank">
              <Instagram className="text-pink-700" />
            </a>
            <a href="https://www.linkedin.com/in/yokesh-b-ab94a826b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
              <Linkedin className="text-blue-700" />
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <Image src={Profile} alt="profile" width={200} height={200} />
        </div>
      </div>
    </>
  )
}