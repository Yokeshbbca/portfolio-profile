import SiteHeader from "./ui/header/page";
import HomeUI from "./ui/home/page";

export default function Home() {
  return (
    <>
      <div className="[--header-height:calc(--spacing(14))]">
        <div className="flex flex-col">
          <SiteHeader />
          <HomeUI />
        </div>
      </div>
    </>
  );
}
