import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Grid2,
  Typography,
  Link,
  Stack
} from "@mui/material";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={footerStyle}>
      <Container maxWidth="xl">
        <Grid2 container spacing={8} sx={gridWrapper}>
          
          {/* Brand */}
          <Grid2  size={{ xs: 12, md: 4 }}>
            <Typography variant="h4" sx={brandTitle}>
              Move In – Link Mobility
            </Typography>

            <Typography sx={brandText}>
              End-to-end logistics support for enterprise partners with a focus
              on operational excellence and client satisfaction.
            </Typography>
          </Grid2>

          {/* Quick Links */}
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Typography variant="h4" sx={sectionTitle}>
              Quick Links
            </Typography>

            <Stack spacing={1.5}>
              {links.map((item) => (
                <Link
                  key={item.label}
                  component={RouterLink}
                  to={item.path}
                  underline="none"
                  sx={linkStyle}
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Grid2>

          {/* Contact */}
          <Grid2 size={{ xs: 12, md: 4 }}>
            <Typography variant="h4" sx={sectionTitle}>
              Contact
            </Typography>

            <Stack spacing={1.5}>
              <Link
                href="mailto:supports@moveinlinkmobility.com"
                underline="none"
                sx={linkStyle}
              >
                support@moveinlinkmobility.com
              </Link>

              <Typography sx={contactText}>
                Complex, Studio Road, inside D-Mart Lane, near Nahar Amrit Shakti, LOK Milan Colony, Chandivali, Andheri East, Mumbai, Maharashtra 400072
              </Typography>
            </Stack>
          </Grid2>
        </Grid2>

        {/* Copyright */}
        <Box sx={copyrightBox}>
          <Typography sx={copyrightText}>
            © {currentYear} Move In – Link Mobility. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
const footerStyle = {
  bgcolor: "#141a20",
  color: "#fff",
  borderTop: "1px solid rgba(255,255,255,0.08)",
  py: 10
};

const gridWrapper = {
  mb: 6
};

const brandTitle = {
  fontWeight: 600,
  mb: 2
};

const brandText = {
  color: "rgba(255,255,255,0.7)",
  lineHeight: 1.7,
  maxWidth: 380
};

const sectionTitle = {
  mb: 2
};

const linkStyle = {
  color: "rgba(255,255,255,0.7)",
  transition: "0.3s",
  "&:hover": { color: "#fff" }
};

const contactText = {
  color: "rgba(255,255,255,0.7)"
};

const copyrightBox = {
  borderTop: "1px solid rgba(255,255,255,0.08)",
  pt: 4,
  textAlign: "center"
};

const copyrightText = {
  color: "rgba(255,255,255,0.6)"
};

const links = [
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" }
];