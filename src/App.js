import ImageHeaderDesktop from "./images/image-header-desktop.jpg";

function App() {
  return (
    <div className="App ||| bg-veryDarkBlue | flex | justify-center | items-center | h-screen">
      <article className="relative | font-inter | text-white | text-[15px] | bg-darkDesaturatedBlue | flex | flex-col | gap-4 | justify-between | items-center | max-w-xs | min-h-4/5 | rounded-lg | overflow-hidden">
        <header className="flex | flex-col | gap-6 ">
          <img
            src={ImageHeaderDesktop}
            alt="Group of women working together with laptops"
          />
          <h1 className="text-xl | font-bold | text-center | px-16">
            Get <i className="text-softViolet | not-italic | text">insights</i>{" "}
            that help your business grow.
          </h1>
        </header>
        <p className="font-lexend | text-center | px-6">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <section className="text-center">
          <div>
            <h2 className="font-bold | text-xl">10k+</h2>
            <label className="uppercase | font-lexend | text-xs">companies</label>
          </div>
          <div>
            <h2 className="font-bold | text-xl">314</h2>
            <label className="uppercase | font-lexend | text-xs">templates</label>
          </div>
          <div>
            <h2 className="font-bold | text-xl">12m+</h2>
            <label className="uppercase | font-lexend | text-xs">queries</label>
          </div>
        </section>
      </article>
    </div>
  );
}

export default App;
