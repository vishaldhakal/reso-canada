import Link from "next/link";
import PreconSchema from "@/components/PreconSchema";
import Script from "next/script";

export const metadata = {
  keywords:
    "Empire Canals, Empire Communities, Empire, Pre-Construction, Towns, Townhouses, Townhomes, Detached, Detached Homes, Welland Canals, Welland Canals Homes, Empire Canals in Welland, Master-Planned Community, Coming Soon, Towns and Detached, Townhomes and Detached Homes, Coming to Dain City, Towns and Detached Coming Soon, Towns Coming Soon, Townhomes Coming Soon, Townhouses Coming Soon, Detached Coming Soon, Detached Homes Coming Soon, Detached Houses Coming Soon, Coming Soon to Welland, Coming to Welland, Coming Soon to Dain City, Towns for Sale, Detached Homes for Sale, Townhomes for Sale, Homes for Sale, Welland Towns, Welland Homes, Welland Real Estate, Ontario Towns, Ontario Homes, GTA Homes, GTA Towns, Register Here, Register Now",
  title: "Empire Canals - NEW PHASE NOW SELLING FROM $589,990",
  description:
    "New Towns & Detached In Welland From $589,990. Family-friendly streetscapes, on-site schools, community amenities and scenic trails, creeks and parks",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: "/rendering1.jpeg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  category: "real estate",
};

export default function Home() {
  return (
    <main>
      <div class="floating fixxcont2">
        <Link
          href="#contact"
          class="btn bgggggggg d-flex align-items-center btn-lg text-light rounded-2 w-100 shadow align-items-center justify-content-center text-decoration-none"
        >
          <div class="text-center d-flex flex-column">
            <div>
              <span class="textvsmall">Starting from </span>
              <span class="text-big">$590K</span>
            </div>
            <span>
              Send a message{" "}
              <img
                src="/arrow-right.svg"
                alt="right arrow"
                className="img-fluid rarr"
              />
            </span>
          </div>
        </Link>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(PreconSchema()),
        }}
      />
      <div className="b-patt">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 py-2 py-md-5 d-flex align-items-center">
            <div className="col order-1 order-md-0">
              <div className="position-relative">
                <div className="text-start">
                  <h2 className="page-subtitle fs-5">
                    Broker or a Realtor in Canada ?
                  </h2>
                  <h1 className="page-title">
                    Grow your Real Estate Business with RESO-Compliant Websites
                  </h1>
                </div>
                <section className="mt-3">
                  <div className="d-flex justify-content-start">
                    <ul className="row row-cols-1 row-cols-md-1 col-12 g-1 justify-content-center iconn">
                      <li className="col d-flex gap-2 justify-content-start">
                        <span className="icon Check"></span>
                        <p>Access to all listings and data</p>
                      </li>
                      <li className="col d-flex gap-2 justify-content-start">
                        <span className="icon Check"></span>
                        <p>Unique Design</p>
                      </li>
                      <li className="col d-flex gap-2 justify-content-start">
                        <span className="icon Check"></span>
                        <p>Search Engine Optimized</p>
                      </li>
                      <li className="col d-flex gap-2 justify-content-start">
                        <span className="icon Check"></span>
                        <p>Lead Generation Forms : Get the Leads</p>
                      </li>
                      <li className="col d-flex gap-2 justify-content-start">
                        <span className="icon Check"></span>
                        <p>Analytics : Know Your Visitors</p>
                      </li>
                    </ul>
                  </div>
                </section>
                <div className="d-flex justify-content-start gap-2  mt-3">
                  I want to be a Top Agent/Broker
                </div>
                <div className="d-flex flex-column mt-1 flex-md-row gap-4 align-items-md-center justify-content-start">
                  <Link
                    className="btn btn-lg btn-register shadow"
                    href="#contact"
                  >
                    Build me a RESO Website
                    <img
                      src="/arrow-right.svg"
                      alt="right arrow"
                      className="img-fluid rarr"
                    />
                  </Link>
                  <Link
                    className="btn btn-lg btn-outline-dark shadow"
                    href="#contact"
                  >
                    Book a Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="col d-flex justify-content-center justify-content-md-end">
              <img src="/flow.png" alt="" className="img-fluid hero-img" />
            </div>
          </div>
        </div>
      </div>

      <section className="container py-5 my-5">
        <h2 className="fw-bold text-center page-title pb-3">
          Look Who Trusted
        </h2>
        <div className="row row-cols-5 clients align-items-center gx-5">
          <div className="col">
            <img src="/dolphin.png" alt="" className="img-fluid" />
          </div>
          <div className="col">
            <img src="/baystreet.png" alt="" className="img-fluid" />
          </div>
          <div className="col">
            <img src="/dolphy.svg" alt="" className="img-fluid" />
          </div>
          <div className="col">
            <img src="/elixar.png" alt="" className="img-fluid" />
          </div>
          <div className="col">
            <img src="/tony.png" alt="" className="img-fluid" />
          </div>
        </div>
      </section>
      <div className="container">
        <div class="mt-5">
          <h1 class="text-start pt-md-5 fw-bold d-flex justify-content-start align-items-center mx-4">
            What Is RESO Web API for TRREB?
          </h1>

          <div class="d-flex justify-content-center align-items-center">
            <p class="textt mx-4">
              When it comes to real estate websites, you may have encountered
              terms like IDX and VOW. Both play crucial roles in helping buyers
              and sellers connect in the digital real estate landscape, but they
              serve different purposes and have distinct features. In this
              article, we'll dive into the key differences between IDX (Internet
              Data Exchange) and VOW (Virtual Office Website) to help you better
              understand their functions and benefits.
            </p>
          </div>

          <div class="d-flex textt">
            <h2 class="pt-5 textt mx-4">IDX (Internet Data Exchange):</h2>
          </div>

          <div class="d-flex justify-content-center align-items-center">
            <ol class="textt pt-3 mx-4 ">
              <li class="pb-2">
                <b>Broker Cooperation:</b> IDX primarily facilitates cooperation
                among real estate brokers and agents. It allows them to share
                property listings from multiple brokers on their websites. This
                fosters collaboration within the industry and ensures that
                buyers have access to a wide range of listings.
              </li>
              <li class="pb-2">
                {" "}
                <b> Property Search:</b> IDX enables users to search for
                properties listed by multiple brokers in a specific area. Users
                can filter results based on various criteria such as price
                range, property type, location, and more. This makes it a
                powerful tool for homebuyers looking for their dream home.
              </li>
              <li class="pb-2">
                <b>Limited Information:</b> IDX typically provides limited
                property information to the public. Users can view property
                details, photos, and contact the listing agent for more
                information. However, certain sensitive information, such as
                seller contact details, may be restricted.
              </li>
              <li class="pb-2">
                <b>Consumer-Friendly:</b> IDX is designed to be
                consumer-friendly, making it easy for homebuyers and sellers to
                search for properties and connect with real estate
                professionals.
              </li>
            </ol>
          </div>
          <br />
          <div class="d-flex textt">
            <h2 class="pt-5 textt mx-4">VOW (Virtual Office Website):</h2>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <ol class="textt pt-3 mx-4">
              <li class="pb-2">
                <b>Direct Access to MLS:</b>VOW websites, on the other hand,
                offer direct access to the Multiple Listing Service (MLS). This
                means that users can access more detailed and comprehensive
                property information, including historical data, property
                history, and even information on properties not currently on the
                market.
              </li>
              <li class="pb-2">
                {" "}
                <b>Registration Required:</b> To access the full range of
                information available on VOW websites, users typically need to
                register or create an account. This allows real estate
                professionals to capture leads and provide personalized
                services.
              </li>
              <li class="pb-2">
                <b>Enhanced Property Data:</b> VOW websites provide in-depth
                property information, including past sales, price changes, and
                property history. This wealth of information can be invaluable
                for serious homebuyers and investors.
              </li>
              <li class="pb-2">
                <b>Agent Collaboration: </b>VOWs often encourage users to work
                closely with a specific agent or broker. These platforms may
                offer advanced search options and tools for collaborating with
                real estate professionals.
              </li>
            </ol>
            <p></p>
          </div>
        </div>
      </div>
      <div className="py-5"></div>
      <section id="contact">
        <div className="pt-5" id="Contact">
          <div className="pt-5 mt-5">
            <div className="row mx-0 mb-4">
              <h6 className="text-center fs-1 fw-bold pt-3 register ">
                {" "}
                Register today!
              </h6>
              <div className="registertext px-4 d-flex justify-content-center align-items-center  text-center">
                <p>
                  Register today to get the updated information such as floor
                  <br className="d-none d-md-inline" /> plan, pricing &amp;
                  availability of Empire Canals
                </p>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 mx-0 g-5 pb-md-5">
              <div className="col-md-3"></div>
              <div className="col-md-6 px-md-5 ">
                <form action="contactForm.php" method="POST">
                  <div className="row">
                    <div className="mb-3 ">
                      <input
                        type="text "
                        placeholder="Name "
                        name="name"
                        id="name"
                        className="form-control py-4 bg-lighter "
                        required=""
                      />
                    </div>
                  </div>
                  <div className="row row-cols-1 row-cols-sm-2 ">
                    <div className="col ">
                      <div className="mb-3 ">
                        <input
                          type="text "
                          aria-describedby="emailHelp "
                          placeholder="Phone "
                          name="phone"
                          id="phone"
                          className="form-control py-4 bg-lighter "
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col ">
                      <div className="mb-3 ">
                        <input
                          type="text "
                          aria-describedby="emailHelp "
                          placeholder="Email "
                          name="email"
                          id="email"
                          className="form-control py-4 bg-lighter "
                          required=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row ">
                    <div className=" ">
                      <textarea
                        name="message "
                        id="message"
                        placeholder="Enter your message"
                        className="form-control py-4 bg-lighter mess"
                        required=""
                        rows={4}
                      ></textarea>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <p className=" text-muted sm-text text-center mt-0">
                      I consent to receive future communications about Empire
                      Canals in Welland. I understand I can opt out at anytime
                      by sending an email.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col text-center">
                      <button className="btn btn-register btn-lg w-100 p-2 px-4 btn-lg py-3 shadow">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="row-cols-md-3"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-5"></div>
      <div className="py-5"></div>
      <img
        src="/footer-seperator.svg"
        alt="footer seperator for rmpire canals page"
        className="img-fluid footsep"
      />
      <footer className="footerr  pb-5 mb-4">
        <div className="container ">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-1 justify-content-between ">
            <div className="col-md-5 my-3 fotwidth center-sm px-4 px-md-0">
              <p className=" ">
                <img
                  src="empire-canal-logo.png"
                  className="img-fluid navbar-brand"
                  alt="Empire canal logo in footer"
                />
              </p>
              <span className=" justifyy">
                We do not represent the builder. All renderings, incentives,
                pricing are subject to terms &amp; conditions and may change at
                anytime without notice – see sales representatives for more
                details. not intended to solicit those under contract with
                another brokerage. All inquiries will go to Salima Nazir, real
                estate agent at HOMELIFE GALAXY REAL ESTATE LTD. in TORONTO,
                Ontario.{" "}
              </span>
              <div className="list pt-md-5 pt-3 d-md-block d-none">
                <p className="">
                  Website designed by{" "}
                  <a
                    href="https://www.sixdesign.ca/"
                    target="_blank"
                    className="text-dark text-decoration-none"
                  >
                    <strong>SixDesign.</strong>{" "}
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-1 "></div>
            <div className="col-md-4 mt-md-4 py-md-5 py-5 center-sm px-4 px-md-5 ">
              <div>
                <h5 className="text-dark fw-bold mt-3 mb-3">About</h5>
                <div className="list d-block ">
                  <p className="mybot pb-md-0 pb-0">
                    Builder : Empire Communities
                  </p>
                  <p className="mybot pb-md-0 pb-0">
                    Location : 635 Canal Bank St, Welland, ON L0S 1K0, Canada
                  </p>

                  <p className="mybot pb-md-0 pb-0">
                    House Type : Detached &amp; Towns
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-2 mt-md-5 pt-md-5 mt-sm-0 pt-4 center-sm d-flex justify-content-start justify-content-md-center px-4 text-center">
              <img
                src="/empire-logo.png"
                className="img-fluid footer-logo"
                alt="Empire Communities Logo which is a developer of empire canals project"
              />
            </div>
          </div>

          <div className="list mt-5 pt-5 d-md-none d-block center-sm px-2">
            <p className="">
              Website designed by{" "}
              <a
                href="https://www.sixdesign.ca/"
                target="_blank"
                className="text-dark text-decoration-none"
              >
                <strong>SixDesign.</strong>{" "}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
