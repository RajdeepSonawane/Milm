import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Stack,
  Grid2
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import deliveryPhoto from "../assets/delivery-photo.jpg";
import logisticsoperation from "../assets/logistics-operation.jpg";
import endtoendsupport from "../assets/end-to-end.jpg";
import manpower from "../assets/manpower-supply.jpg";

import Header from "../header";
import Footer from "../footer";

const SERVICES = [
  { title: "Logistics Operations Management", desc: "Complete handling of day-to-day site operations." },
  { title: "Manpower Hiring & Deployment", desc: "Fast recruitment & workforce scaling." },
  { title: "RTS & Cash Closure", desc: "Same-day reconciliation & reporting." },
  { title: "Client & KPI Management", desc: "Ensuring operational & financial KPIs." },
  { title: "Payroll & Reporting Support", desc: "Timely payroll & reporting support." }
];



export default function HomePage() {
  const ref = useRef(null);
 const { scrollYProgress } = useScroll({ target: ref });

/* HERO */
const yHero = useTransform(scrollYProgress, [0, 0.25], [0, 200]);
const opacityHero = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

/* ABOUT (cards) */
const aboutY = useTransform(scrollYProgress, [0.15, 0.45], [0, -120]);
const aboutOpacity = useTransform(scrollYProgress, [0.2, 0.45], [1, 0.85]);

/* RELIABLE */
const reliableY = useTransform(scrollYProgress, [0.35, 0.65], [150, 0]);
const reliableOpacity = useTransform(scrollYProgress, [0.35, 0.65], [1, 0.9]);
  const [active, setActive] = useState("center");



  return (
    <Box ref={ref}>
      <Header />

      {/* HERO */}
      <Box component={motion.div} style={{ y: yHero, opacity: opacityHero }} sx={styles.hero}>
        <Container>
          <Typography sx={styles.heroTitle}>
            Move In  <br /> Link Mobility
          </Typography>

          <Typography sx={styles.heroTagline}>
            Travel in Elegance…
          </Typography>

          
        </Container>
      </Box>

      {/* ABOUT */}
      <Box 
      component={motion.div}
      style={{ y: aboutY, opacity: aboutOpacity }}
      sx={styles.about}>
        
      <Box sx={styles.cardsWrapper}>
  {/* LEFT CARD */}
  <motion.div
  onClick={() => setActive("left")}
  animate={{
    x: active === "left" ? 0 : -180,
    scale: active === "left" ? 1.05 : 0.9,
    rotate: active === "left" ? 0 : -8,
    zIndex: active === "left" ? 3 : 1
  }}
  transition={{ duration: 0.5 }}
>
  <Box sx={styles.cardBase}>
    <Box component="img" src={logisticsoperation} sx={styles.cardImage} />
    <Box sx={styles.cardOverlay}>
      <Typography sx={styles.cardText}>
        Logistics Operations
      </Typography>
    </Box>
  </Box>
</motion.div>

  {/* CENTER CARD */}
  <motion.div
  onClick={() => setActive("center")}
  animate={{
    x:
      active === "left"
        ? 180
        : active === "right"
        ? -180
        : 0,
    scale: active === "center" ? 1.05 : 0.9,
    zIndex: active === "center" ? 3 : 1
  }}
  transition={{ duration: 0.5 }}
>
  <Box sx={styles.cardBase}>
    <Box component="img" src={endtoendsupport} sx={styles.cardImage} />
    <Box sx={styles.cardOverlay}>
      <Typography sx={{ ...styles.cardText, fontSize: 22 }}>
        End-to-End Support
      </Typography>
    </Box>
  </Box>
</motion.div>

  {/* RIGHT CARD */}
 <motion.div
  onClick={() => setActive("right")}
  animate={{
    x: active === "right" ? 0 : 180,
    scale: active === "right" ? 1.05 : 0.9,
    rotate: active === "right" ? 0 : 8,
    zIndex: active === "right" ? 3 : 1
  }}
  transition={{ duration: 0.5 }}
>
  <Box sx={styles.cardBase}>
    <Box component="img" src={manpower} sx={styles.cardImage} />
    <Box sx={styles.cardOverlay}>
      <Typography sx={styles.cardText}>
        Manpower Solutions
      </Typography>
    </Box>
  </Box>
</motion.div>
</Box>
</Box>
{/* ================== reliable scalable ================== */}
<Box 
 component={motion.div}
 style={{ y: reliableY, opacity: reliableOpacity }}
 sx={styles.reliableSection}>
  <Grid2 container sx={{ minHeight: "100vh" }}>
    
    {/* LEFT HALF — IMAGE */}
    <Grid2 size = {{ xs: 12, md: 6 }}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 4
      }}
    >
      <Box
        component="img"
        src={deliveryPhoto}
        sx={styles.circleImage}
      />
    </Grid2>

    {/* RIGHT HALF — TEXT */}
    <Grid2 size={{ xs: 12, md: 6 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: { xs: "center", md: "flex-start" },
        textAlign: { xs: "center", md: "left" },
        p: { xs: 4, md: 8 }
      }}
    >
      <Typography sx={styles.reliableTitle}>
        Reliable. Scalable.
      </Typography>

      <Typography sx={styles.reliableSubtitle}>
        Performance Driven.
      </Typography>

      <Box sx={styles.reliableDivider} />

      <Typography sx={styles.reliableText}>
        <strong>Move In – Link Mobility</strong> is an operations-driven logistics
        support company specializing in managing last-mile and on-ground
        execution for large enterprise partners like Amazon.
      </Typography>

      <Typography sx={styles.reliableSmallText}>
        Our approach ensures seamless operations, zero callouts, and
        consistent business growth. We focus on manpower deployment,
        RTS & cash closure management, and daily operations control.
      </Typography>

      <Button endIcon={<ArrowForwardIcon />} sx={styles.readMoreBtn}>
        Read Our Story
      </Button>
    </Grid2>

  </Grid2>
</Box>

      {/* SERVICES */}
<Box sx={styles.servicesSection}>
  <Container maxWidth="xl">
    <Grid2 container spacing={6} alignItems="center">
      
      {/* LEFT SIDE */}
      <Grid2 size={{ xs: 12, md: 5 }}>
        <Typography sx={styles.servicesTitle}>
          Our Services
        </Typography>

        <Typography sx={styles.servicesDescription}>
          We provide complete logistics support solutions designed to
          streamline operations, enhance workforce efficiency, and
          ensure seamless execution across all levels of business.
        </Typography>

        <Button
          variant="outlined"
          endIcon={<ArrowForwardIcon />}
          sx={styles.servicesButton}
        >
          Explore More
        </Button>
      </Grid2>

      {/* RIGHT SIDE */}
      <Grid2 size={{ xs: 12, md: 7 }}>
        <Grid2 container spacing={3}>
          {SERVICES.map((service, index) => (
            <Grid2 size={{ xs: 12, sm: 6 }} key={index}>
              <Card
                component={motion.div}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                sx={styles.serviceCard}
              >
                <CardContent>
                  <Typography sx={styles.serviceTitle}>
                    {service.title}
                  </Typography>
                  <Typography sx={styles.serviceDesc}>
                    {service.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Grid2>

    </Grid2>
  </Container>
</Box>

      {/* CONTACT CTA */}
     {/* ================= CONTACT SECTION ================= */}
<Box sx={styles.contactSection}>
  <Container maxWidth="xl">
    <Grid2 container spacing={8} alignItems="center">

      {/* LEFT SIDE — JOIN TEAM */}
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Typography sx={styles.joinTitle}>
          Join Our Team
        </Typography>

        <Typography sx={styles.joinSubtitle}>
          Build your career in logistics operations with a 
          growing team dedicated to excellence.
        </Typography>

        <Box sx={styles.jobList}>
          <Typography sx={styles.jobItem}>
            Area / Territory Manager
          </Typography>
          <Typography sx={styles.jobItem}>
            Team Lead – Operations
          </Typography>
          <Typography sx={styles.jobItem}>
            Operations Executive
          </Typography>
        </Box>

        <Button variant="contained" sx={styles.applyBtn}>
          Apply Now
        </Button>
      </Grid2>

      {/* RIGHT SIDE — GET IN TOUCH CARD */}
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Box sx={styles.contactCard}>
          <Typography sx={styles.contactTitle}>
            Get In Touch
          </Typography>

          <Stack spacing={3} mt={4}>
            <Stack direction="row" spacing={2} alignItems="center">
              <MailIcon sx={{ color: "#fff" }} />
              <Typography sx={styles.contactText}>
                support@moveinlinkmobility.com
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center">
              <LocationOnIcon sx={{ color: "#fff" }} />
              <Typography sx={styles.contactText}>
                MILM – Operations Location
              </Typography>
            </Stack>
          </Stack>

          
        </Box>
      </Grid2>

    </Grid2>
  </Container>
</Box>

      <Footer />
    </Box>
  );
}

/* ================= STYLES ================= */

const styles = {
  hero: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    bgcolor: "#212735",
    color: "#fff"
  },

  heroSubtitle: {
    opacity: 0.7,
    mb: 5
  },

  section: {
    py: 10
  },

  aboutImage: {
    width: "100%",
    borderRadius: 3
  },

  joinTitle: {
  fontFamily: "serif",
  fontSize: { xs: 36, md: 56 },
  fontWeight: 500,
  mb: 3
},

joinSubtitle: {
  fontSize: 18,
  color: "#e6e3e3",
  mb: 5,
  maxWidth: 420
},

jobList: {
  mb: 5
},

jobItem: {
  fontSize: 18,
  py: 2,
  borderBottom: "1px solid #ddd",
  color: "#cdc9c9"
},
applyBtn: {
  mt: 2,
  backgroundColor: "#000",
  borderRadius: "30px",
  px: 5,
  py: 1.5,
  textTransform: "none",
  fontSize: 16,
  "&:hover": {
    backgroundColor: "#222"
  }
},
contactCard: {
  backgroundColor: "#000",
  color: "#fff",
  borderRadius: "40px",
  padding: "60px 50px",
  minHeight: 400,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
},

contactTitle: {
  fontFamily: "serif",
  fontSize: { xs: 32, md: 48 },
  fontWeight: 500
},

contactText: {
  fontSize: 16,
  opacity: 0.9
},

contactBottomText: {
  fontSize: 20,
  opacity: 0.5,
  mt: 6
},

  servicesSection: {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #141a20, #1f2937)",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  py: 12
},

servicesTitle: {
  fontFamily: "serif",
  fontSize: { xs: 36, md: 78 },
  fontWeight: 500,
  mb: 3
},

servicesDescription: {
  fontSize: 18,
  lineHeight: 1.8,
  opacity: 0.8,
  mb: 4
},

servicesButton: {
  color: "#fff",
  borderColor: "#fff",
  borderRadius: 0,
  px: 4,
  py: 1.5,
  "&:hover": {
    backgroundColor: "#fff",
    color: "#000"
  }
},

serviceCard: {
  height: "100%",
  borderRadius: 3,
  backgroundColor: "#1f2937",
  color: "#fff",
  transition: "0.3s",
  "&:hover": {
    backgroundColor: "#2c3e50"
  }
},

serviceTitle: {
  fontSize: 18,
  fontWeight: 600,
  mb: 1
},

serviceDesc: {
  fontSize: 14,
  opacity: 0.8
}
,
  contactSection: {
    bgcolor: "#111827",
    color: "#fff",
    py: 10
  },
  heroTitle: {
  fontFamily: "serif",
  fontWeight: 500,
  fontSize: {
    xs: "48px",
    sm: "64px",
    md: "96px",
    lg: "190px"
  },
  lineHeight: 1.1,
  letterSpacing: "2px",
  textAlign: "center",
  mb: 3
},

heroTagline: {
  fontFamily: "serif",
  fontStyle: "italic",
  opacity: 0.7,
  fontSize: {
    xs: "18px",
    md: "86px"
  }
},
cardsWrapper: {
    position: "relative",
    width: "100%",
    maxWidth: 1400,
    height: "100%",
    minHeight: "100vh", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    perspective: "1200px",
    overflow: "visible",
  },

  cardBase: {
  position: "absolute",
  top: "50%",                 // center vertically
  left: "50%",
  transform: "translate(-50%, -50%)",

  width: 620,
  height: 860,

  borderRadius: 20,
  overflow: "hidden",
  boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
  cursor: "pointer",
},

  leftCard: {
  position: "absolute",
  left: { xs: "-20px", md: "-180px" },
  top: "50%",
  transform: "translateY(-50%) rotate(-8deg)",
  zIndex: 1
},

centerCard: {
  position: "relative",
  zIndex: 3,
  transform: "scale(1.05)"
},

rightCard: {
  position: "absolute",
  right: { xs: "-20px", md: "-180px" },
  top: "50%",
  transform: "translateY(-50%) rotate(8deg)",
  zIndex: 1
},

  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "0.6s",
    "&:hover": {
      transform: "scale(1.08)"
    }
  },

  cardOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    p: 3,
    background:
      "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))"
  },

  cardText: {
    color: "#fff",
    fontWeight: 600,
    fontSize: 28,
    textAlign: "center"
  }
  ,
  about: {
  minHeight: "100vh",
  marginTop: "-1vh",   // ⭐ pulls up into hero
  backgroundColor: "#212735", 
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
},

reliableSection: {
  minHeight: "100vh",
  marginTop: "-18vh",   // ⭐ overlaps with cards
  backgroundColor: "#212735",
  backgroundImage: "linear-gradient(135deg, #3b4a63, #1f2937)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
},

circleImageWrapper: {
  display: "flex",
  justifyContent: "center",
},

circleImage: {
  width: { xs: 260, md: 580 },
  height: { xs: 260, md: 580 },
  borderRadius: "50%",
  objectFit: "cover",
  filter: "grayscale(100%)",
},

reliableTitle: {
  fontFamily: "serif",
  fontSize: { xs: 36, md: 70 },
  letterSpacing: 2,
},

reliableSubtitle: {
  fontFamily: "serif",
  fontStyle: "italic",
  fontSize: { xs: 28, md: 60 },
  color: "#bfbfbf",
  mb: 3,
},

reliableDivider: {
  width: 120,
  height: 6,
  backgroundColor: "#888",
  mb: 3,
},

reliableText: {
  fontSize: 26,
  lineHeight: 1.8,
  mb: 2,
},

reliableSmallText: {
  fontSize: 25,
  color: "#bfbfbf",
  lineHeight: 1.7,
  mb: 4,
},

readMoreBtn: {
  color: "#fff",
  fontSize: 18,
  borderBottom: "1px solid #fff",
  borderRadius: 0,
  padding: 0,
  "&:hover": {
    backgroundColor: "transparent",
    opacity: 0.7,
  },
  contactWrapper: {
  backgroundColor: "#f4f4f4",
  py: 15
},
},
};