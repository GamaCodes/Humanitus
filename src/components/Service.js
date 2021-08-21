import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import FolderIcon from "@material-ui/icons/Folder";
import GavelIcon from "@material-ui/icons/Gavel";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";

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

export default function Service() {
  const classes = useStyles();
  return (
    <div className="service-contain">
      <div className="service-title">
        <h2>Servicios</h2>
      </div>
      <div className="about-contain">
        <Paper elevation={3} className={classes.contain}>
          <section className="about-section">
            <img
              src="https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="sobre nosotros"
              className="about-image"
            />
          </section>

          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            align="center"
            className={classes.title}
          >
            Auditorías especiales
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            align="justify"
            className={classes.text}
            paragraph="true"
          >
            Revisamos con cuidado y de forma detallada grupos de cuentas
            particulares o algún rubro especifico de sus estados financieros en
            los que su Empresa requiera de su corrección. Así mismo lo ayudamos
            en:
          </Typography>
          <Grid item xs={12}>
            <div className={classes.demo}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon style={{ color: "#3068BA" }} />
                  </ListItemIcon>
                  <ListItemText>Localización de posibles fraudes.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon style={{ color: "#F68712" }} />
                  </ListItemIcon>
                  <ListItemText>
                    Observar la transparencia en el cambio de funcionarios
                    encargados de una administración.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon style={{ color: "#3068BA" }} />
                  </ListItemIcon>
                  <ListItemText>Liquidaciones.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon style={{ color: "#F68712" }} />
                  </ListItemIcon>
                  <ListItemText>
                    Due Diligence (auditoría de compra de empresas).
                  </ListItemText>
                </ListItem>
              </List>
            </div>
          </Grid>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            align="center"
            className={classes.title}
          >
            Auditorias al Sector Público
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            align="justify"
            className={classes.text}
            paragraph="true"
          >
            Realizamos auditorías a la cuenta pública federal, estatal,
            municipal y de organismos de la administración pública paraestatal y
            paramunicipal.
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            align="center"
            className={classes.title}
          >
            Asesoría Fiscal
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            align="justify"
            className={classes.text}
            paragraph="true"
          >
            Somos expertos en todos y cada uno de los temas relacionados con el
            ámbito de las contribuciones, de manera que podemos ofrecerle y
            atender desde el trámite más sencillo ante las autoridades
            hacendarías, hasta un juicio fiscal ante los tribunales
            correspondientes.
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            align="justify"
            className={classes.text}
            paragraph="true"
          >
            Contamos con abogados asociados altamente capacitados y reconocidos.
            Los servicios que ofrecemos basados en las disposiciones fiscales
            vigentes son:
          </Typography>
          <Grid item xs={12}>
            <div className={classes.demo}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <GavelIcon style={{ color: "#3068BA" }} />
                  </ListItemIcon>
                  <ListItemText>Altas de Empresa ante la SHCP.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GavelIcon style={{ color: "#F68712" }} />
                  </ListItemIcon>
                  <ListItemText>
                    Dictamen de enajenación de acciones.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GavelIcon style={{ color: "#3068BA" }} />
                  </ListItemIcon>
                  <ListItemText>Fusión y escisión.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GavelIcon style={{ color: "#F68712" }} />
                  </ListItemIcon>
                  <ListItemText>Consolidaciones fiscales.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GavelIcon style={{ color: "#3068BA" }} />
                  </ListItemIcon>
                  <ListItemText>Reducción de capital.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GavelIcon style={{ color: "#F68712" }} />
                  </ListItemIcon>
                  <ListItemText>Liquidaciones.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GavelIcon style={{ color: "#3068BA" }} />
                  </ListItemIcon>
                  <ListItemText>Medios de defensa fiscal.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <GavelIcon style={{ color: "#F68712" }} />
                  </ListItemIcon>
                  <ListItemText>
                    Estrategias fiscales debidamente fundamentadas para
                    optimizar su carga financiera.
                  </ListItemText>
                </ListItem>
              </List>
            </div>
          </Grid>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            align="center"
            className={classes.title}
          >
            Outsorcing para desarrollo de sistemas
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            align="justify"
            className={classes.text}
            paragraph="true"
          >
            Las organizaciones de éxito se han percatado que del conjunto de
            tareas que tienen que desarrollar para el logro de sus objetivos,
            algunas resultan ser actividades estratégicas, pero fuera de su
            ámbito de especialidad y conocimiento, y que por tanto distraen su
            energía de los eventos centrales que le deben dar vida a su
            operación.
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            align="justify"
            className={classes.text}
            paragraph="true"
          >
            En este escenario es que surgen los socios proveedores de servicios,
            que le permiten de un proyecto, dejar en su aliado esas tareas que a
            pesar de ser de gran utilidad, resultan ser una carga para el
            alcance de sus objetivos.
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            align="justify"
            className={classes.text}
            paragraph="true"
          >
            Disponer de los conocimientos y trabajos a modo que ofrece un
            proveedor de servicios, le da a las empresas la flexibilidad de
            movimiento y adaptación que le demandan el cambio de circunstancias.
          </Typography>

          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            align="center"
            className={classes.title}
          >
            Contabilidad
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            align="justify"
            className={classes.text}
            paragraph="true"
          >
            Nos interesa el funcionamiento óptimo en la operación de su Empresa,
            por tal motivo le ofrecemos la posibilidad de llevar de manera total
            la contabilidad de su negocio.
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            align="justify"
            className={classes.text}
            paragraph="true"
          >
            Identificamos y registramos todas las operaciones de su Compañía a
            la vez que establecemos los registros y documentos contables de
            manera que obtenemos sus estados financieros de manera ágil y a
            tiempo para que Ud. pueda cumplir con todas las obligaciones
            fiscales de su Compañía y evite cualquier tipo de requerimiento,
            multa o recargo por parte de las autoridades hacendarías.
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            align="justify"
            className={classes.text}
            paragraph="true"
          >
            Para que su Empresa obtenga un mayor beneficio, realizamos el
            análisis e interpretación de los estados financieros que nos permite
            evaluar la situación de su Compañía y contar con las herramientas
            necesarias para la toma de decisiones.
          </Typography>

          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            align="center"
            className={classes.title}
          >
            Consultoría Administrativa
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            align="justify"
            className={classes.text}
            paragraph="true"
          >
            Bajo el compromiso de encontrar las soluciones que ayuden a cada uno
            de nuestros clientes en el cumplimiento de sus objetivos y
            concentrar los resultados en el crecimiento sostenido y rentable de
            cada uno de sus negocios, podemos ofrecerle toda la ayuda posible
            en:
          </Typography>
          <Grid item xs={12}>
            <div className={classes.demo}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <BusinessCenterIcon style={{ color: "#3068BA" }} />
                  </ListItemIcon>
                  <ListItemText>
                    Estudios por áreas de responsabilidad.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BusinessCenterIcon style={{ color: "#F68712" }} />
                  </ListItemIcon>
                  <ListItemText>
                    Implementación de control interno.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BusinessCenterIcon style={{ color: "#3068BA" }} />
                  </ListItemIcon>
                  <ListItemText>Administración de nóminas.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BusinessCenterIcon style={{ color: "#F68712" }} />
                  </ListItemIcon>
                  <ListItemText>Gestión de cobros.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BusinessCenterIcon style={{ color: "#3068BA" }} />
                  </ListItemIcon>
                  <ListItemText>Inventarios físicos.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BusinessCenterIcon style={{ color: "#F68712" }} />
                  </ListItemIcon>
                  <ListItemText>
                    Dictámenes periciales ante autoridades judiciales.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BusinessCenterIcon style={{ color: "#3068BA" }} />
                  </ListItemIcon>
                  <ListItemText>Estudios financieros.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BusinessCenterIcon style={{ color: "#F68712" }} />
                  </ListItemIcon>
                  <ListItemText>Liquidaciones.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BusinessCenterIcon style={{ color: "#3068BA" }} />
                  </ListItemIcon>
                  <ListItemText>
                    Análisis de proyectos de inversión.
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BusinessCenterIcon style={{ color: "#F68712" }} />
                  </ListItemIcon>
                  <ListItemText>Evaluación de riesgos.</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <BusinessCenterIcon style={{ color: "#3068BA" }} />
                  </ListItemIcon>
                  <ListItemText>
                    Desarrollo y Asesoría técnicas Informáticas.
                  </ListItemText>
                </ListItem>
              </List>
            </div>
          </Grid>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            align="center"
            className={classes.title}
          >
            Capacitación
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            align="justify"
            className={classes.text}
            paragraph="true"
          >
            Desarrollamos cursos precisos para personas o grupos específicos de
            su Compañía bajo un diagnóstico previo e inicial para los distintos
            temas que comprenden las áreas Fiscales, Financieras y Contables.
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            align="justify"
            className={classes.text}
            paragraph="true"
          >
            Nuestra Firma cuenta con amplia experiencia en capacitación, por tal
            motivo nuestros cursos cuentan con la autorización para cumplir con
            la Norma de Actualización Académica (NAA).
          </Typography>
        </Paper>
      </div>
    </div>
  );
}
