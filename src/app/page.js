export default function Home () {
  return (
    <>
      <main>

        {/* ================= HEADER ================= */}

        <header className="header">
          <div className="logo">
            CW <span>Chris Wine</span>
          </div>

          <nav>
            <a href="#historia">Nosotros</a>
            <a href="#vino">El vino</a>
            <a href="#preguntas">Preguntas</a>
          </nav>

          <a href="tel:+573111111111" className="headerButton">
            +57 311 111 1111
          </a>
        </header>


        {/* ================= HERO ================= */}

        <section className="hero">

          <div className="heroContent">

                        <span className="eyebrow">
                            Chris Wine · Para compartir
                        </span>

            <h1>
              Haz espacio para <span>lo extraordinario.</span>
            </h1>

            <p>
              Los vinos tienen lugar en momentos que queremos recordar.
              Chris Wine nace para convertir esos momentos en experiencias
              que vale la pena compartir.
            </p>

            <div className="heroForm">

              <input
                type="text"
                placeholder="Tu nombre"
              />

              <input
                type="email"
                placeholder="Tu correo"
              />

              <button>
                Quiero descubrirlo
              </button>

            </div>

          </div>


          <div className="heroVisual">

            <div className="wineBottle">
              <div className="bottleNeck"></div>

              <div className="bottleBody">
                <div className="wineLabel">
                  <small>CHRIS</small>
                  <strong>WINE</strong>
                </div>
              </div>
            </div>

          </div>

        </section>

      </main>


      {/* ================= ESTILOS ================= */}

      <style>{`

                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }

                html {
                    scroll-behavior: smooth;
                }

                body {
                    margin: 0;
                    font-family: Arial, Helvetica, sans-serif;
                    background: #f3eee7;
                    color: #f5eee8;
                }

                a {
                    text-decoration: none;
                    color: inherit;
                }


                /* HEADER */

                .header {
                    height: 80px;
                    padding: 0 7%;

                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    background: #1d0d10;

                    position: absolute;
                    width: 100%;
                    z-index: 10;
                }

                .logo {
                    font-family: Georgia, serif;
                    font-size: 16px;
                    font-weight: bold;

                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .logo span {
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }

                nav {
                    display: flex;
                    gap: 40px;
                }

                nav a {
                    font-size: 13px;
                    opacity: .8;
                    transition: .2s;
                }

                nav a:hover {
                    opacity: 1;
                }

                .headerButton {
                    font-size: 12px;

                    border: 1px solid rgba(255,255,255,.5);

                    padding: 10px 18px;

                    transition: .2s;
                }

                .headerButton:hover {
                    background: #ffffff;
                    color: #351016;
                }


                /* HERO */

                .hero {
                    min-height: 720px;

                    padding: 130px 7% 70px;

                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    align-items: center;

                    background:
                        radial-gradient(
                            circle at 80% 50%,
                            #571d25 0%,
                            #301116 35%,
                            #1d0d10 70%
                        );
                }

                .heroContent {
                    max-width: 650px;
                }

                .eyebrow {
                    display: block;

                    font-size: 11px;
                    text-transform: uppercase;
                    letter-spacing: 4px;

                    margin-bottom: 28px;

                    color: #c9a590;
                }

                h1 {
                    font-family: Georgia, serif;

                    font-size: clamp(52px, 6vw, 92px);

                    line-height: .95;

                    font-weight: normal;

                    max-width: 750px;
                }

                h1 span {
                    font-style: italic;
                    color: #d9aaa1;
                }

                .heroContent p {
                    max-width: 560px;

                    margin-top: 30px;

                    line-height: 1.7;

                    font-size: 15px;

                    color: #c8b9b7;
                }


                /* FORMULARIO */

                .heroForm {
                    margin-top: 35px;

                    max-width: 520px;

                    display: grid;
                    gap: 10px;
                }

                .heroForm input {
                    width: 100%;

                    padding: 15px;

                    border: none;

                    background: #f5f0eb;

                    color: #222;

                    outline: none;
                }

                .heroForm button {
                    padding: 15px;

                    border: none;

                    cursor: pointer;

                    text-transform: uppercase;

                    letter-spacing: 2px;

                    font-size: 11px;

                    background: #7d2836;
                    color: white;

                    transition: .2s;
                }

                .heroForm button:hover {
                    background: #963548;
                }


                /* BOTELLA */

                .heroVisual {
                    height: 520px;

                    display: flex;
                    justify-content: center;
                    align-items: flex-end;
                }

                .wineBottle {
                    position: relative;

                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    filter: drop-shadow(25px 20px 25px rgba(0,0,0,.5));
                }

                .bottleNeck {
                    width: 65px;
                    height: 150px;

                    border-radius: 15px 15px 5px 5px;

                    background:
                        linear-gradient(
                            90deg,
                            #0b0b0b,
                            #291819,
                            #050505
                        );
                }

                .bottleBody {
                    width: 210px;
                    height: 370px;

                    margin-top: -10px;

                    border-radius: 45px 45px 25px 25px;

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    background:
                        linear-gradient(
                            90deg,
                            #080808,
                            #301416,
                            #080808
                        );
                }

                .wineLabel {
                    width: 155px;
                    height: 135px;

                    background: #e8dfd2;

                    color: #351016;

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .wineLabel small {
                    letter-spacing: 4px;
                    margin-bottom: 7px;
                }

                .wineLabel strong {
                    font-family: Georgia, serif;
                    font-size: 25px;
                }


                /* RESPONSIVE */

                @media (max-width: 850px) {

                    .header nav {
                        display: none;
                    }

                    .hero {
                        grid-template-columns: 1fr;

                        text-align: center;

                        padding-top: 150px;
                    }

                    .heroContent {
                        margin: auto;
                    }

                    .heroContent p {
                        margin-left: auto;
                        margin-right: auto;
                    }

                    .heroForm {
                        margin-left: auto;
                        margin-right: auto;
                    }

                    .heroVisual {
                        height: 450px;
                    }

                    h1 {
                        font-size: 55px;
                    }
                }

            `}</style>
    </>
  );
}