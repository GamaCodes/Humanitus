import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: {
    fontWeight: "bold",
    letterSpacing: ".5rem",
    color: "#F68712",
  },
  contain: {
    padding: "2rem",
    background: "#fff",
  },
  text: {
    color: "#000",
    lineHeight: "1.5rem",
  },
  value: {
    paddingBottom: "1rem",
  },
  center: {
    textAlign: "center",
  },
});

export default function About() {
  const classes = useStyles();
  return (
    <>
      <div className="title">
        <h2>Sobre Nosotros</h2>
      </div>
      <div className="about-contain">
        <Paper elevation={3} className={classes.contain}>
          <section className="about-section">
            <img
              src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="sobre nosotros"
              className="about-image"
            />
          </section>
          <Typography
            variant="body2"
            color="textPrimary"
            align="justify"
            className={classes.text}
            paragraph="true"
          >
            HUMANITUS CI es una empresa mexicana fundada el 14 de febrero de
            2011, dedicada de forma especializada al desarrollo de sistemas de
            información, la integración de soluciones de negocio y la prestación
            de servicios de consultoría por asignación de personal externo.
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            align="justify"
            className={classes.text}
            paragraph="true"
          >
            HUMANITUS CI fue creada con la firme intención de aplicar y
            desarrollar de manera experta las tecnologías vigentes y de nueva
            tendencia en el manejo de información para las soluciones de negocio
            incluyendo todos los ramos posibles para una mejor solución y
            respuesta a los cambios económicos del pais.
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            align="justify"
            className={classes.text}
            paragraph="true"
          >
            Contamos con la madurez, experiencia, conocimiento y capacitación
            necesarios, que nos permiten adaptarnos a la dinámica de trabajo que
            marca el estilo de operación y funcionamiento propios de cada
            organización.
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            align="justify"
            className={classes.text}
            paragraph="true"
          >
            En nuestra experiencia de servicios hemos conformado equipos de
            trabajo con más de 30 organizaciones para la integración de sus
            propias soluciones de información, apoyo tecnológico, asesoría
            informática en la definición de estrategias de negocio y
            capacitación, entre otras, que incluyen participación en la
            industria del retail, el área de seguros y el sector financiero,
            entre otros.
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            align="center"
            className={classes.title}
          >
            Misión
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            align="justify"
            className={classes.text}
            paragraph="true"
          >
            Brindar servicios profesionales en el ámbito fiscal, contable,
            administrativo y de consultoría, con la mayor honestidad, lealtad y
            confiabilidad posible para contribuir en el logro de los objetivos
            de nuestros clientes.
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            align="center"
            className={classes.title}
          >
            Visión
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            align="justify"
            className={classes.text}
            paragraph="true"
          >
            Consolidarnos a nivel nacional e internacional como un despacho
            confiable y de prestigio que realice con eficiencia, eficacia,
            honestidad, veracidad, las operaciones fiscales y administrativas,
            integrando nuevos y mejores servicios para satisfacer las exigencias
            de nuestros clientes.
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            align="center"
            className={classes.title}
          >
            Política de calidad
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            align="justify"
            className={classes.text}
            paragraph="true"
          >
            Satisfacer las necesidades de nuestros clientes y de nuestro
            personal a traves de procesos eficientes y eficaces que nos coloque
            como un despacho de prestigio en los servicios de Auditoría,
            Asesoría fiscal, Contabilidad, Consultoría administrativa y
            Capacitación.
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            align="center"
            className={classes.title}
          >
            Filosofía
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            align="justify"
            className={classes.text}
            paragraph="true"
          >
            Somos una organización que se conduce sobre principios éticos y
            morales, conservando la información con estricto sentido de
            confidencialidad y lealtad; logrando una relación personal y humana
            con cada uno de nuestros clientes además ofrecemos permanentemente
            una mejor calidad de vida a cada uno de nuestros integrantes.
          </Typography>
        </Paper>
      </div>
    </>
  );
}
