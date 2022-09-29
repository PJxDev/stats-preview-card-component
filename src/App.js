import ImageHeaderDesktop from "./images/image-header-desktop.jpg";

function App() {
  return (
    <div className="App">
      <article>
        <header>
          <img
            src={ImageHeaderDesktop}
            alt="Group of women working together with laptops"
          />
          <h1>
            Get <i>insights</i> that help your business grow.
          </h1>
        </header>
        <p>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <section>
          <div>
            <h2>10k+</h2>
            <label>companies</label>
          </div>
          <div>
            <h2>314</h2>
            <label>templates</label>
          </div>
          <div>
            <h2>12m+</h2>
            <label>queries</label>
          </div>
        </section>
      </article>
    </div>
  );
}

export default App;
