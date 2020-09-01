const App = ({ children }) => (
  <main>
    {children}
    <style jsx global>{`
      * {
        font-family: "Inter", Menlo, Monaco, "Lucida Console", "Liberation Mono",
          "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New",
          monospace, serif;
      }
      body {
        margin: 0;
      }
      p {
        font-size: 14px;
        line-height: 28px;
      }
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        line-height: 40px;
      }
      article {
      }
      section {
        /* padding: 0 40px; */
        margin: 0 auto;
      }
      button {
        align-items: center;
        background-color: #22bad9;
        border: 0;
        color: white;
        display: flex;
        padding: 5px 7px;
      }
      button:active {
        background-color: #1b9db7;
        transition: background-color 0.3s;
      }
      button:focus {
        outline: none;
      }
    `}</style>
  </main>
);

export default App;
