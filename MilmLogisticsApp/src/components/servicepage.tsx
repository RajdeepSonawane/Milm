
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid2,
} from "@mui/material";
import Header from "../header";
import Footer from "../footer";
import warehousedetails from "../assets/warehousing-Detail.png";
import lastmile from "../assets/Last-Mile-Delivery.jpg";
import employeeTransportation from "../assets/employee-transportation.jpg";

const servicesData = [
  {
    id: 1,
    title: "Warehousing & Distribution",
    image: warehousedetails,
    shortSummary:
      "Integrated storage and distribution solutions for your inventory.",
    description:
      "Optimize your supply chain with our state-of-the-art warehousing and distribution services. We offer secure storage, inventory management, pick-and-pack, and efficient distribution to your customers. Our scalable solutions ensure flexibility and operational efficiency across all stages of logistics.",
  },
  {
    id: 2,
    title: "Last Mile Delivery",
    image: lastmile,
    shortSummary:
      "Fast, reliable delivery solutions to your customers’ doorstep.",
    description:
      "Our last mile delivery services ensure timely and accurate fulfillment of orders. With real-time tracking, optimized routing, and trained delivery personnel, we enhance customer satisfaction while maintaining operational excellence. We specialize in e-commerce, retail, and high-volume distribution networks.",
  },
  {
    id: 3,
    title: "Employee Transportation Service",
    image: employeeTransportation,
    shortSummary:
      "Safe and reliable transportation solutions for your workforce.",
    description:
      "We provide structured and secure employee transportation services tailored to corporate needs. Our fleet management system ensures punctual pick-up and drop-off, route optimization, real-time tracking, and adherence to safety standards. Designed to enhance employee convenience and operational efficiency, our solutions reduce commute stress while improving workforce productivity.",
  },
];

export default function ServicesPage() {



  return (
    <>
      <Header />

      {/* ================= HERO ================= */}
      <Box
        sx={{
          pt: 18,
          pb: 12,
          textAlign: "center",
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              sx={{
                fontSize: { xs: 38, md: 64 },
                fontWeight: 700,
                mb: 4,
              }}
            >
              Our Services
            </Typography>

            <Typography sx={{ fontSize: 18, color: "#d1d5db" }}>
              Comprehensive logistics solutions designed to optimize your operations and drive sustainable growth through excellence in execution.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* ================= SERVICES GRID ================= */}
<Box sx={{ backgroundColor: "#f5f5f5", py: 14 }}>
  <Container maxWidth="lg">
    <Grid2 container spacing={6}>
      {servicesData.map((service, index) => (
        <Grid2 size={{ xs: 12, md: 6 }} key={service.id}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              sx={{
                borderRadius: 5,
                boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
                overflow: "hidden",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 25px 60px rgba(0,0,0,0.12)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="260"
                image={service.image}
                alt={service.title}
                sx={{ objectFit: "cover" }}
              />

              <CardContent sx={{ p: 5 }}>
                <Typography
                  sx={{ fontSize: 24, fontWeight: 600, mb: 2 }}
                >
                  {service.title}
                </Typography>

                <Typography sx={{ color: "#6b7280", mb: 3 }}>
                  {service.shortSummary}
                </Typography>

                <Typography sx={{ color: "#374151", lineHeight: 1.8 }}>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid2>
      ))}
    </Grid2>
  </Container>
</Box>

      {/* ================= CTA ================= */}
      <Box sx={{ py: 14, textAlign: "center", backgroundColor: "#000103" }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Typography
              sx={{
                fontSize: { xs: 30, md: 44 },
                fontWeight: 700,
                mb: 3,
                color: "#ffffff",
              }}
            >
              Let's Work Together
            </Typography>

            <Typography sx={{ color: "#b2b2b3", mb: 6 ,fontSize: 18}}>
              Ready to transform your logistics operations? Get in touch with our team to discuss how we can support your business goals.
            </Typography>

            <Button
              variant="outlined"
              size="large"
              sx={{
                px: 6,
                py: 1.8,
                borderWidth: 2,
                fontSize: 16,
                "&:hover": {
                  backgroundColor: "#000",
                  color: "#fff",
                  borderColor: "#000",
                },
              }}
              href="/contact"
            >
              Contact Us Today
            </Button>
          </motion.div>
        </Container>
      </Box>

      <Footer />
    </>
  );
}