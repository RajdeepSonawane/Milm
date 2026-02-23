
import {
  Box,
  Container,
  Typography,
  Card,
  Avatar,
  Grid2,
} from "@mui/material";
import { motion } from "framer-motion";
import Header from "../header";
import Footer from "../footer";

interface OperationalFocusArea {
  _id: string;
  focusAreaName: string;
  description: string;
  image?: string;
}

interface Client {
  _id: string;
  clientName: string;
  logo?: string;
  description: string;
}

export default function AboutPage() {

  /* ================= DUMMY FOCUS AREAS ================= */
  const focusAreas: OperationalFocusArea[] = [
    {
      _id: "1",
      focusAreaName: "Customer Experience Enhancement",
      description:
        "Dedicated to optimizing every touchpoint in the customer journey, from initial contact to post-purchase support, ensuring satisfaction and loyalty.",
    },
    {
      _id: "2",
      focusAreaName: "Sustainable Innovation",
      description:
        "Pioneering eco-friendly solutions and practices across all operations, from product development to supply chain management, for a greener future.",
    },
    {
      _id: "3",
      focusAreaName: "Operational Efficiency",
      description:
        "Streamlining processes, leveraging technology, and optimizing resource allocation to maximize productivity and minimize waste.",
    },
    {
      _id: "4",
      focusAreaName: "Employee Empowerment & Development",
      description:
        "Fostering a culture of growth, providing continuous learning opportunities, and empowering our team members to achieve their full potential.",
    },
    {
      _id: "5",
      focusAreaName: "Market Expansion & Growth",
      description:
        "Strategically identifying new markets, developing innovative products, and forging key partnerships to drive sustained business growth.",
    },
  ];

  /* ================= DUMMY CLIENTS ================= */
  const clients: Client[] = [
    {
      _id: "1",
      clientName: "Amazon Logistics",
      description:
        "Dedicated to optimizing every touchpoint in the customer journey, from initial contact to post-purchase support, ensuring satisfaction and loyalty.",
    },
    {
      _id: "2",
      clientName: "Flipkart Supply Chain",
      description:
        "Driving operational excellence through innovative supply chain solutions and seamless last-mile delivery execution.",
    },
    {
      _id: "3",
      clientName: "Delhivery",
      description:
        "Enhancing logistics performance with technology-driven solutions and reliable nationwide delivery networks.",
    },
  ];

  return (
    <>
      <Header />

      {/* HERO */}
      <Box sx={{ pt: 16, pb: 10, textAlign: "center", backgroundColor: "#000000" }}>
        <Container maxWidth="md">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <Typography variant="h2" fontWeight={700} gutterBottom sx={{ color: "#ffffff" }}>
              About Us
            </Typography>

            <Typography variant="h6" sx={{ color: "#d1d5db" }}>
               <strong>Move In – Link Mobility</strong> founded on 10 July 2024, is an operations-driven logistics support company specializing in last-mile and on-ground execution for large enterprise partners such as Amazon.
                     Built on the foundation of operational excellence, sustainability, and performance-driven execution, the company is committed to delivering seamless logistics solutions tailored to evolving business needs.
            </Typography>
            <Typography variant="h6" sx={{ color: "#d1d5db" }}>
               The organization embraced sustainability from the beginning. Following the “Go Green” initiative, operations commenced with a fleet of 20+ electric vehicles (EVs).
        Today, we are leading the industry with 300+ EVs actively operating in the market, positioning ourselves as a forward-thinking and environmentally responsible logistics partner.
        In a short span of time, we successfully established our brand as a trusted and integrated logistics service provider.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* ================= FOCUS AREAS ================= */}
      <Box sx={{ backgroundColor: "#f3f4f6", py: 12 }}>
        <Container maxWidth="lg">
          <Typography
            align="center"
            sx={{
              fontFamily: "serif",
              fontSize: { xs: 32, md: 48 },
              fontWeight: 500,
              mb: 8,
            }}
          >
            Our Focus Areas
          </Typography>

          <Grid2 container spacing={6} justifyContent="center">
            {focusAreas.map((area, index) => (
              <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={area._id}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      textAlign: "center",
                      px: 4,
                      py: 6,
                      borderRadius: 6,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 90,
                        height: 90,
                        mx: "auto",
                        mb: 4,
                        bgcolor: "#e5e7eb",
                      }}
                    />

                    <Typography
                      sx={{
                        fontFamily: "serif",
                        fontSize: 20,
                        fontWeight: 600,
                        mb: 2,
                      }}
                    >
                      {area.focusAreaName}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 14,
                        lineHeight: 1.8,
                        color: "#444",
                      }}
                    >
                      {area.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>

      {/* ================= CLIENTS ================= */}
      <Box sx={{ backgroundColor: "#ffffff", py: 12 }}>
        <Container maxWidth="lg">
          <Typography
            align="center"
            sx={{
              fontFamily: "serif",
              fontSize: { xs: 32, md: 48 },
              fontWeight: 500,
              mb: 8,
            }}
          >
            Our Clients
          </Typography>

          <Grid2 container spacing={6} justifyContent="center">
            {clients.map((client, index) => (
              <Grid2 size={{ xs: 12, md: 4 }} key={client._id}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      textAlign: "center",
                      px: 4,
                      py: 6,
                      borderRadius: 6,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 90,
                        height: 90,
                        mx: "auto",
                        mb: 4,
                        bgcolor: "#e5e7eb",
                      }}
                    />

                    <Typography
                      sx={{
                        fontFamily: "serif",
                        fontSize: 20,
                        fontWeight: 600,
                        mb: 2,
                      }}
                    >
                      {client.clientName}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 14,
                        lineHeight: 1.8,
                        color: "#444",
                      }}
                    >
                      {client.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Box>

      <Footer />
    </>
  );
}