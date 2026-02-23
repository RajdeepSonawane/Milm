import { motion } from "framer-motion";
import Header from "../header";
import Footer from "../footer";

import {
  Box,
  Container,
  Typography,
  Grid2,
  TextField,
  Button,
  Paper,
  Stack
} from "@mui/material";

import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function ContactPage() {
  const handleSend = () => {
    const name = (document.getElementById("name") as HTMLInputElement)?.value;
    const email = (document.getElementById("email") as HTMLInputElement)?.value;
    const company = (document.getElementById("company") as HTMLInputElement)?.value;
    const message = (document.getElementById("message") as HTMLTextAreaElement)?.value;

    const subject = `Inquiry from ${name || "Website Visitor"}`;
    const body = `Name: ${name}
Email: ${email}
Company: ${company}

Message:
${message}`;

    window.location.href =
      `mailto:accounts@moveinlinkmobility.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Box>
      <Header />

      {/* HERO */}
      <Box sx={{ pt: 14, pb: 10, textAlign: "center" ,backgroundColor: "#000000" }}>
        <Container maxWidth="md">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ color: "#ffffff" }}>
              Contact Us
            </Typography>

            <Typography variant="h6" color="text.secondary" sx={{ color: "#d1d5db" }}>
              Get in touch with our team to discuss how we can support your logistics operations and drive your business forward.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* CONTACT SECTION */}
      <Box sx={{ bgcolor: "#f8fafc", py: 10 }}>
        <Container maxWidth="lg">
          <Grid2 container spacing={6}>
            
            {/* LEFT INFO */}
            <Grid2 size ={{ xs: 12, md: 8 }}>
              <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  Let's Connect
                </Typography>

                <Typography color="text.secondary" sx={{ mb: 4 }}>
                  Whether you're looking to optimize logistics operations or explore partnerships,
                  we’re here to help.
                </Typography>

                <Stack spacing={3}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <MailIcon color="primary" />
                    <Typography>support@moveinlinkmobility.com</Typography>
                  </Stack>

                  <Stack direction="row" spacing={2} alignItems="center">
                    <LocationOnIcon color="primary" />
                    <Typography>Complex, Studio Road, inside D-Mart Lane, near Nahar Amrit Shakti, LOK Milan Colony, Chandivali, Andheri East, Mumbai, Maharashtra 400072</Typography>
                  </Stack>
                </Stack>
              </motion.div>
            </Grid2>

            {/* RIGHT FORM */}
            <Grid2 size={{ xs: 12, md: 4 }}>
              <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}>
                <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Send Us a Message
                  </Typography>

                  <Stack spacing={3}>
                    <TextField id="name" label="Your Name" fullWidth />
                    <TextField id="email" label="Email Address" type="email" fullWidth />
                    <TextField id="company" label="Company" fullWidth />
                    <TextField
                      id="message"
                      label="Message"
                      multiline
                      rows={4}
                      fullWidth
                    />

                    <Button
                      variant="contained"
                      size="large"
                      onClick={handleSend}
                    >
                      Send Message
                    </Button>
                  </Stack>
                </Paper>
              </motion.div>
            </Grid2>
          </Grid2>
        </Container>
      </Box>

      {/* INFO SECTION */}
      <Box sx={{ py: 10 ,backgroundColor: "#000000" }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: "#ffffff" }}>
              We're Here to Help
            </Typography>

            <Typography color="text.secondary" sx={{ mb: 5, color: "#d1d5db" }}>
              Our team is committed to providing prompt and professional responses to all inquiries. We look forward to partnering with you to achieve operational excellence.
            </Typography>

            <Grid2 container spacing={3}>
              <Grid2 size={{ xs: 12, md: 6 }}>
                <Paper sx={{ p: 3, borderRadius: 3 }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    General Inquiries
                  </Typography>
                  <Typography color="text.secondary">
                    For general questions about our services, partnerships, or company information, please email us at accounts@moveinlinkmobility.com
                  </Typography>
                </Paper>
              </Grid2>

              <Grid2 size={{ xs: 12, md: 6 }}>
                <Paper sx={{ p: 3, borderRadius: 3 }}>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Career Opportunities
                  </Typography>
                  <Typography color="text.secondary">
                    Interested in joining our team? Visit our Careers page to view open positions and submit your application.
                  </Typography>
                </Paper>
              </Grid2>
            </Grid2>
          </motion.div>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}