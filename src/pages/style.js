import styled from 'styled-components';


export const StyledDiv = styled.div`
/*===== GOOGLE FONTS =====*/
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");
/*===== VARIABLES CSS =====*/
:root {
  --header-height: 3rem;
  --font-semi: 600;
}

/*===== Colores =====*/
:root {
  --first-color: #4070f4;
  --second-color: #0e2431;
}

/*===== Fuente y tipografia =====*/
:root {
  --body-font: "Poppins", sans-serif;
  --big-font-size: 2rem;
  --h2-font-size: 1.25rem;
  --normal-font-size: 0.938rem;
}
@media screen and (min-width: 768px) {
  :root {
    --big-font-size: 3.5rem;
    --h2-font-size: 2rem;
    --normal-font-size: 1rem;
  }
}

/*===== Margenes =====*/
:root {
  --mb-1: 0.5rem;
  --mb-2: 1rem;
  --mb-3: 1.5rem;
  --mb-4: 2rem;
  --mb-5: 2.5rem;
  --mb-6: 3rem;
}

/*===== z index =====*/
:root {
  --z-back: -10;
  --z-normal: 1;
  --z-tooltip: 10;
  --z-fixed: 100;
}

/*===== BASE =====*/
*,
::before,
::after {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}

h1,
h2,
p {
  margin: 0;
}

a {
  text-decoration: none;
}
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/*===== CLASS CSS ===== */
.section-title {
  position: relative;
  font-size: var(--h2-font-size);
  color: var(--first-color);
  margin-top: var(--mb-2);
  margin-bottom: var(--mb-4);
  text-align: center;
}
.section-title::after {
  position: absolute;
  content: "";
  width: 64px;
  height: 0.18rem;
  left: 0;
  right: 0;
  margin: auto;
  top: 2rem;
  background-color: var(--first-color);
}
.section {
  padding-top: 3rem;
  padding-bottom: 2rem;
}

/*===== LAYOUT =====*/
.bd-grid {
  max-width: 1024px;
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;
  width: calc(100% - 2rem);
  margin-left: var(--mb-2);
  margin-right: var(--mb-2);
}

.home__img {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 295px;
}



/* ===== ABOUT =====*/
.about__container {
  row-gap: 2rem;
  text-align: center;
  justify-content: center;
}
.about__subtitle {
  margin-bottom: var(--mb-2);
}
.about__img {
  justify-self: center;
}
.about__img img {
  width: 200px;
  border-radius: 0.5rem;
}

/* ===== MEDIA QUERIES=====*/
@media screen and (min-width: 768px) {
  body {
    margin: 0;
  }
  .section {
    padding-top: 4rem;
    padding-bottom: 3rem;
  }
  .section-title {
    margin-bottom: var(--mb-6);
  }
  .section-title::after {
    width: 80px;
    top: 3rem;
  }
  .home__img {
    width: 457px;
    bottom: 15%;
  }

  .about__container {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    text-align: initial;
  }
  .about__img img {
    width: 100%;
  }
}

@media screen and (min-width: 1024px) {
  .bd-grid {
    margin-left: auto;
    margin-right: auto;
  }
  .home__img {
    right: 10%;
  }
}

`