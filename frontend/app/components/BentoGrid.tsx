import Link from "next/link";
import ImageCarousel from "./ImageCarousel";

export default function BentoGrid() {
  return (
    <section className="bg-light py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-auto">
          
          {/* Event Description - Large Card */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 row-span-2 bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-accent uppercase text-maroon mb-4 md:text-7xl md:text-pretty">
              Buffalo's Premier Fashion Event
            </h2>
            <p className="text-dark leading-relaxed mb-4">
              At the height of local design held at Seneca One Tower, Buffalo's newly renovated skyscraper and major tech hub, the evening begins with cocktails, hors d'oeuvres, and live music for all.
            </p>
            <p className="text-dark leading-relaxed">
              Models take to the runway in creations by Buffalo's top designers, seamstresses, leather craftsmen, milliners, tailors, and the many talented individuals driving the local fashion industry.
            </p>
          </div>

          {/* CTA Card */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-maroon rounded-lg p-6 text-center flex flex-col justify-center items-center">
            <h3 className="text-xl font-accent uppercase text-light mb-4">
              Join Us
            </h3>
            <p className="text-light mb-6 text-sm">
              Experience Buffalo's most coveted annual fashion event
            </p>
            <Link 
              href="/tickets"
              className="btn btn-secondary bg-light text-maroon hover:bg-taupe transition-colors px-6 py-3"
            >
              Buy Tickets
            </Link>
          </div>

          {/* Agenda Card */}
          <div className="col-span-1 lg:col-span-1 bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-accent uppercase text-maroon mb-4">
              Event Agenda
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <div className="font-bold text-dark">6:00 PM</div>
                <div className="text-dark">Cocktails & Hors d'oeuvres</div>
              </div>
              <div>
                <div className="font-bold text-dark">7:30 PM</div>
                <div className="text-dark">Runway Show</div>
              </div>
              <div>
                <div className="font-bold text-dark">9:00 PM</div>
                <div className="text-dark">After Party - Lobby Bar</div>
              </div>
            </div>
          </div>

          {/* Glamour Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-accent uppercase text-maroon mb-4">
              Sophisticated Glamour
            </h3>
            <p className="text-dark leading-relaxed text-sm">
              Veiled in sophisticated glamor, presented in an innovative venue, and aspiring to be Buffalo's most coveted annual event, fig™ is high fashion and high style converging for an unforgettable evening!
            </p>
          </div>

          {/* After Party Info */}
          <div className="col-span-1 lg:col-span-1 bg-ochre rounded-lg p-6 text-center">
            <h3 className="text-lg font-accent uppercase text-light mb-3">
              After Party
            </h3>
            <p className="text-light text-sm">
              Exclusive access to the Lobby Bar with stylized music and elevated atmosphere
            </p>
          </div>

          {/* Behind the Scenes Carousel */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="mb-3">
              <h3 className="text-lg font-accent uppercase text-maroon">
                Behind the Scenes
              </h3>
              <p className="text-dark text-sm">
                Exclusive glimpses from FIG 2024
              </p>
            </div>
            <ImageCarousel />
          </div>

          {/* Location Card with Map */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4 bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="p-6">
              <h3 className="text-lg font-accent uppercase text-maroon mb-4">
                Event Location
              </h3>
              <div className="mb-4">
                <div className="font-bold text-dark">Seneca One Tower</div>
                <div className="text-dark text-sm">237 Main St, Buffalo, NY 14203</div>
              </div>
            </div>
            <div className="h-48 bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.1234567890!2d-78.878656!3d42.888889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d3126a2b3c4d5e%3A0x1234567890abcdef!2sBuffalo%20City%20Hall!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-b-lg"
              ></iframe> 
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}