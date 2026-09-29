export default function Home () {
  return (<>
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

      {/* ================= ENCUENTROS ================= */}

      <section className="encounters" id="historia">

        <div className="encountersTitle">

        <span className="sectionNumber">
            02 / EL MOMENTO
        </span>

          <h2>
            Hay encuentros que<br/>
            merecen <span>algo más.</span>
          </h2>

        </div>


        <div className="encountersText">

          <p>
            Queremos elegir un vino para una cena, un regalo o una
            celebración especial. Entre tantas opciones, a veces resulta
            difícil encontrar una que realmente represente el momento.
          </p>

          <p>
            Chris Wine te invita a volver a lo esencial:
            disfrutar, compartir y hacer de cada encuentro
            una experiencia que valga la pena recordar.
          </p>

        </div>

      </section>

      {/* ================= EXPERIENCIA ================= */}

      <section className="experience">

        <div className="experienceHeader">

        <span className="sectionNumber light">
            03 / LA EXPERIENCIA
        </span>

          <h2>
            No es solo una copa.<br/>
            <span>Es lo que sucede alrededor.</span>
          </h2>

        </div>

        <div className="experienceGrid">

          <div className="experienceItem">
            <span>01</span>

            <h3>Una pausa compartida</h3>

            <p>
              Crear un momento para detenerse,
              conversar y disfrutar sin prisa.
            </p>
          </div>

          <div className="experienceItem">
            <span>02</span>

            <h3>Un gesto con intención</h3>

            <p>
              Un vino puede convertirse en una forma
              especial de decir algo sin palabras.
            </p>
          </div>

          <div className="experienceItem">
            <span>03</span>

            <h3>El placer de elegir</h3>

            <p>
              Encontrar ese vino que acompaña
              naturalmente cada encuentro.
            </p>
          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="ctaSection">

    <span className="sectionNumber">
        04 / EL PRÓXIMO PASO
    </span>

        <h2>
          Las mejores historias<br/>
          empiezan cuando decides<br/>
          <span>reunirte.</span>
        </h2>

        <a href="#contacto" className="ctaButton">
          Quiero descubrirlo
        </a>

      </section>

      {/* ================= MOMENTOS ================= */}

<section className="moments">

    <div className="momentsHeader">

        <span className="sectionNumber light">
            05 / FORMAS DE ELEGIR
        </span>

        <h2>
            Una buena experiencia<br />
            merece <span>contarse.</span>
        </h2>

        <p>
            Cada momento tiene una intención diferente.
            Encuentra una forma de elegir Chris Wine según
            lo que quieras compartir.
        </p>

    </div>


    <div className="momentsGrid">

        <div className="momentCard">
            <span>01</span>

            <h3>
                Primera experiencia de compra
            </h3>

            <p>
                Descubre una forma sencilla de comenzar.
            </p>
        </div>


        <div className="momentCard">
            <span>02</span>

            <h3>
                Una ocasión para compartir
            </h3>

            <p>
                Encuentra una opción pensada para disfrutar juntos.
            </p>
        </div>


        <div className="momentCard">
            <span>03</span>

            <h3>
                Un regalo con intención
            </h3>

            <p>
                Convierte una botella en un gesto especial.
            </p>
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
                
/* ENCUENTROS */

.encounters {
    min-height: 380px;

    padding: 90px 7%;

    display: grid;
    grid-template-columns: 1.2fr 1fr;
    align-items: center;
    gap: 80px;

    background: #f3eee7;
    color: #351016;
}

.sectionNumber {
    display: block;

    margin-bottom: 25px;

    font-size: 10px;
    letter-spacing: 3px;

    color: #856d67;
}

.encounters h2 {
    font-family: Georgia, serif;

    font-size: clamp(42px, 5vw, 72px);

    line-height: 0.95;

    font-weight: normal;
}

.encounters h2 span {
    font-style: italic;
    color: #8c3947;
}

.encountersText {
    max-width: 560px;
}

.encountersText p {
    margin-bottom: 18px;

    font-size: 15px;
    line-height: 1.8;

    color: #645653;
}

/* EXPERIENCIA */

.experience {
    padding: 90px 7%;

    background: #4b1820;
    color: #f4eae4;
}

.experienceHeader {
    margin-bottom: 70px;
}

.sectionNumber.light {
    color: #c69a91;
}

.experience h2 {
    font-family: Georgia, serif;

    font-size: clamp(42px, 5vw, 70px);

    line-height: 0.95;

    font-weight: normal;
}

.experience h2 span {
    font-style: italic;
    color: #d9aaa1;
}

.experienceGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    gap: 40px;
}

.experienceItem {
    padding-top: 25px;

    border-top: 1px solid rgba(255,255,255,.18);
}

.experienceItem span {
    display: block;

    margin-bottom: 22px;

    font-size: 10px;
    letter-spacing: 3px;

    color: #c69a91;
}

.experienceItem h3 {
    margin-bottom: 15px;

    font-family: Georgia, serif;
    font-size: 22px;
    font-weight: normal;
}

.experienceItem p {
    max-width: 320px;

    font-size: 14px;
    line-height: 1.7;

    color: #c9b6b3;
}
/* CTA */

.ctaSection {
    padding: 100px 7%;

    text-align: center;

    background: #f3eee7;
    color: #351016;
}

.ctaSection h2 {
    margin-bottom: 35px;

    font-family: Georgia, serif;
    font-size: clamp(42px, 5vw, 68px);
    line-height: 0.95;
    font-weight: normal;
}

.ctaSection h2 span {
    font-style: italic;
    color: #8c3947;
}

.ctaButton {
    display: inline-block;

    padding: 14px 28px;

    background: #571d25;
    color: #ffffff;

    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 2px;

    transition: .2s;
}

.ctaButton:hover {
    background: #7d2836;
}

/* MOMENTOS */

.moments {
    padding: 100px 7%;

    background: #2a1014;
    color: #f4eae4;
}

.momentsHeader {
    max-width: 750px;

    margin: 0 auto 65px;

    text-align: center;
}

.momentsHeader h2 {
    font-family: Georgia, serif;

    font-size: clamp(42px, 5vw, 68px);

    line-height: 0.95;

    font-weight: normal;
}

.momentsHeader h2 span {
    font-style: italic;
    color: #d9aaa1;
}

.momentsHeader p {
    max-width: 600px;

    margin: 25px auto 0;

    font-size: 14px;
    line-height: 1.7;

    color: #c9b6b3;
}


/* TARJETAS */

.momentsGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    gap: 20px;
}

.momentCard {
    min-height: 180px;

    padding: 30px;

    border: 1px solid rgba(255,255,255,.15);

    transition: .25s;
}

.momentCard:hover {
    transform: translateY(-5px);

    border-color: rgba(255,255,255,.4);
}

.momentCard span {
    display: block;

    margin-bottom: 35px;

    font-size: 10px;
    letter-spacing: 3px;

    color: #c69a91;
}

.momentCard h3 {
    margin-bottom: 12px;

    font-family: Georgia, serif;
    font-size: 21px;
    font-weight: normal;
}

.momentCard p {
    font-size: 13px;
    line-height: 1.6;

    color: #c9b6b3;
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
                    
                    .encounters {
    grid-template-columns: 1fr;
    gap: 40px;

    padding: 70px 7%;
}

.encounters h2 {
    font-size: 46px;
}

.encountersText {
    max-width: 100%;
}

.experience {
    padding: 70px 7%;
}

.experienceGrid {
    grid-template-columns: 1fr;
    gap: 45px;
}

.experience h2 {
    font-size: 44px;
}


                }

            `}</style>
  </>);
}