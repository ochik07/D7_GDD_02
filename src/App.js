import "./styles.css";

function App() {
  return (
    <header className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Cute Dog Images</h1>
        </div>
      </div>
    </header>
  );
}
function Image() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <h0>Dog Images</h0>
        </div>
      </header>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h3>hello world</h3>
      <h4>he</h4>
      <section>
        <figure>
          <img
            src="https://images.dog.ceo/breeds/shiba/shiba-8.jpg"
            alt="cute dog"
          />
        </figure>
      </section>
      <footer>
        <p>Dog images are retrieved from Dog API</p>
        <p>
          <a href="https://dog.ceo/dog-api/about">Donate to Dog API</a>
        </p>
      </footer>
    </div>
  );
}
export default App;
