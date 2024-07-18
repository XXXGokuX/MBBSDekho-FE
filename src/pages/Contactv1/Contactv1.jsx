import { Link } from "react-router-dom";
import img1 from "./Images/h-img1.jpeg"
import img2 from "./Images/h-img2.jpeg"

export default function Contactv1() {
  return (
    <div className="">


      <div className="w-full">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f1f4f9]">
          <div className="container m-auto grid items-center justify-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-[#2563ea] px-3 py-1 text-sm text-white">
                MBBD Dekho
              </div>
              <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                Find Your Perfect MBBS College
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover the best MBBS colleges tailored to your needs. Our platform provides comprehensive search tools and detailed information to help you find and register for the ideal institution. Start your journey to becoming a doctor with us today!
              </p>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#2563ea] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                to="#"
              >
                Contact Us
              </Link>
            </div>
            <div className="rounded-xl bg-background shadow-lg">
              <img
                src={img1}
                width="550"
                height="310"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container m-auto grid items-start gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>
              </div>
              <form className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                    id="name"
                    placeholder="Your Name"
                    required=""
                  />
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
                <textarea
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[150px]"
                  id="message"
                  placeholder="Your Message"
                  required=""
                ></textarea>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#2563ea] text-white hover:bg-[#2563ea]/90 h-10 px-4 py-2 w-full sm:w-auto"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="rounded-xl bg-background shadow-lg">
              <img
                src={img2}
                width="550"
                height="550"
                alt="Location Map"
                className="mx-auto aspect-square overflow-hidden rounded-t-xl object-cover object-center sm:w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">Our Location</h3>
                <p className="text-muted-foreground">123 Main Street, Anytown USA 12345</p>
                <p className="text-muted-foreground">Phone: (123) 456-7890</p>
                <p className="text-muted-foreground">Email: info@digitalagency.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}