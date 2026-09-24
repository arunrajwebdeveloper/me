import Header from "./components/Header";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Header />
      <main className="w-full">
        <section className="bg-primary text-secondary py-20 md:py-40">
          <div className="box-container">
            <Title className="text-7xl md:text-9xl font-black mb-10 md:mb-20">
              namaste.
            </Title>
            <p className="text-xl font-bold mb-10">
              I'm Arun Raj, a Full-Stack Developer specializing in building
              high-performance, visually engaging web applications using the
              MERN stack.
            </p>

            <p className="text-sm md:text-base font-normal leading-relaxed">
              While I am fully capable of architecting robust backends and
              databases, my true passion lies on the frontend. I thrive at the
              intersection of code and design, transforming complex ideas into
              pixel-perfect, responsive, and user-centric interfaces. Whether I
              am writing clean React components or optimization logic, I focus
              on delivering seamless digital experiences that look great and run
              flawlessly.
            </p>
          </div>
        </section>

        <section className="bg-secondary text-primary py-20 md:py-40">
          <div className="box-container">
            <Title className="text-7xl md:text-9xl font-black mb-10 md:mb-20">
              works.
            </Title>

            <ul>
              <li className="border-y border-y-primary py-5 -mt-px">
                <p className="text-2xl md:text-6xl font-medium">
                  tom icecreams
                </p>
                <p className="text-sm md:text-xl font-medium">branding</p>
              </li>
              <li className="border-y border-y-primary py-5 -mt-px">
                <p className="text-2xl md:text-6xl font-medium">
                  phonix systems
                </p>
                <p className="text-sm md:text-xl font-medium">website</p>
              </li>
              <li className="border-y border-y-primary py-5 -mt-px">
                <p className="text-2xl md:text-6xl font-medium">oxon&Co</p>
                <p className="text-sm md:text-xl font-medium">
                  branding & website
                </p>
              </li>
              <li className="border-y border-y-primary py-5 -mt-px">
                <p className="text-2xl md:text-6xl font-medium">mealsor</p>
                <p className="text-sm md:text-xl font-medium">branding</p>
              </li>
              <li className="border-y border-y-primary py-5 -mt-px">
                <p className="text-2xl md:text-6xl font-medium">nightoff</p>
                <p className="text-sm md:text-xl font-medium">website</p>
              </li>
              <li className="border-y border-y-primary py-5 -mt-px">
                <p className="text-2xl md:text-6xl font-medium">arcox movies</p>
                <p className="text-sm md:text-xl font-medium">
                  branding & website
                </p>
              </li>
              <li className="border-y border-y-primary py-5 -mt-px">
                <p className="text-2xl md:text-6xl font-medium">clickonit</p>
                <p className="text-sm md:text-xl font-medium">
                  branding & website
                </p>
              </li>
              <li className="border-y border-y-primary py-5 -mt-px">
                <p className="text-2xl md:text-6xl font-medium">peopleover</p>
                <p className="text-sm md:text-xl font-medium">website</p>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-white text-secondary py-20 md:py-40">
          <div className="box-container">
            <Title className="text-7xl md:text-9xl font-black mb-10 md:mb-20">
              the world in close-up.
            </Title>
            <p className="text-sm md:text-base font-normal leading-relaxed">
              From the texture of a butterfly wing to the morning dew on a leaf,
              I capture the extraordinary details hidden in plain sight. Follow
              my macro photography journey on Instagram for a daily dose of the
              unseen world.
            </p>

            <ul className="flex items-center gap-2 mt-10">
              <li>
                <img
                  src="https://images.unsplash.com/photo-1500402448245-d49c5229c564?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="macro image 1"
                  className="object-cover w-26 h-26 aspect-square"
                />
              </li>
              <li>
                <img
                  src="https://images.unsplash.com/photo-1533467915241-eac02e856653?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="macro image 1"
                  className="object-cover w-26 h-26 aspect-square"
                />
              </li>
              <li>
                <img
                  src="https://images.unsplash.com/photo-1700047329772-3ebe7de69b67?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="macro image 1"
                  className="object-cover w-26 h-26 aspect-square"
                />
              </li>
            </ul>

            <div className="mt-10">
              <a
                className="text-secondary text-base underline font-normal"
                target="_blank"
                href="https://instagram.com/ar_macros"
              >
                visit instagram
              </a>
            </div>
          </div>
        </section>

        <section className="bg-secondary text-primary py-20 md:py-40">
          <div className="box-container">
            <Title className="text-7xl md:text-9xl font-black mb-10 md:mb-20">
              connect.
            </Title>

            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/arunraj90/"
                  target="_blank"
                  className="text-2xl md:text-6xl font-medium"
                >
                  linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/ar_macros"
                  target="_blank"
                  className="text-2xl md:text-6xl font-medium"
                >
                  instagram
                </a>
              </li>
              <li className="border-t border-t-primary mt-10 pt-10">
                <a
                  href=""
                  target="_blank"
                  className="text-2xl md:text-6xl font-medium"
                >
                  arunraj.dev@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
