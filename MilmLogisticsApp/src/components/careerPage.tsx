
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid2,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

const positions = [
  {
    id: 1,
    title: "Team Leader",
    description:
      "Lead delivery associates, manage daily operations, and ensure smooth workflow.",
  },
  {
    id: 2,
    title: "Supervisor",
    description:
      "Monitor field activities, track attendance, and support operational tasks.",
  },
  {
    id: 3,
    title: "Area Manager",
    description:
      "Oversee multiple locations, manage performance, and handle logistics planning.",
  },
];

export default function CareersPage() {


  return (
    <>
      <Header />

      {/* HERO */}
      <Box sx={{ pt: 16, pb: 10, textAlign: "center", backgroundColor: "#000000" }}>
        <Container maxWidth="md">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <Typography variant="h2" fontWeight={700} gutterBottom sx={{ color: "#ffffff" }}>
              Careers
            </Typography>

            <Typography variant="h6" color="text.secondary" sx={{ color: "#d1d5db" }}>
              Join our growing team and build your career in logistics operations. We're looking for passionate professionals who share our commitment to excellence.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* OPEN POSITIONS */}
      <Box sx={{ backgroundColor: "#f9fafb", py: 10 }}>
        <Box sx={{ backgroundColor: "#f9fafb", py: 10 }}>
  <Container maxWidth="sm">
    <Grid2 container spacing={4} justifyContent="center">
      {positions.map((position) => (
        <Grid2 size={{ xs: 12 }} key={position.id}>
          <Card
            sx={{
              p: 3,
              borderRadius: 3,
              transition: "0.3s",
              "&:hover": { transform: "scale(1.02)", boxShadow: 6 },
            }}
          >
            <CardContent>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                {position.title}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {position.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  </Container>
</Box>
      </Box>

      {/* WHY JOIN US */}
      <Box sx={{ py: 10 , backgroundColor: "#000000"}}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" fontWeight={700} mb={6} sx={{ color: "#ffffff" }}>
            Why Join Us
          </Typography>

          <Grid2 container spacing={4}>
            {[
              {
                title: "Growth Opportunities",
                desc: "Build your career with a rapidly expanding company that values professional development and internal advancement.",
              },
              {
                title: "Industry Leadership",
                desc: "Work with enterprise clients and gain experience in managing large-scale logistics operations.",
              },
              {
                title: "Collaborative Culture",
                desc: "Join a team of experienced professionals who are committed to operational excellence and mutual success.",
              },
              {
                title: "Competitive Benefits",
                desc: "Enjoy competitive compensation packages and benefits designed to support your professional and personal growth.",
              },
            ].map((item) => (
              <Grid2 size={{ xs: 12, md: 6 }} key={item.title}>
                <Typography variant="h6" fontWeight={600} gutterBottom sx={{ color: "#ffffff" }}>
                  {item.title}
                </Typography>
                <Typography color="text.secondary" sx={{ color: "#b2b2b3" }}>{item.desc}</Typography>
              </Grid2>
            ))}
          </Grid2>

          <Box textAlign="center" mt={6}>
            <Button variant="contained" size="large" component={Link} to="/contact">
              Contact HR
            </Button>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
}