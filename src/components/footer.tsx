export default function Footer() {
  return (
    <footer id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Reach out to me for collaborations, projects, or just to say hi!
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <p className="text-base font-normal">Email: baikerchakib@gmail.com</p>
          <p className="text-base font-normal">Phone: +213 (675) 78-68-28</p>
          <div className="flex justify-center space-x-4"></div>
        </div>
      </div>
    </footer>
  );
}
