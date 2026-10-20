import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old resume links (LinkedIn, earlier shares) still land on the current PDF.
  async redirects() {
    return [
      { source: "/resume.pdf", destination: "/Pranav_Thatavarti_Resume.pdf", permanent: false },
      // The old /work page is now /projects (the Graveyard and earlier shares still link to /work).
      { source: "/work", destination: "/projects", permanent: false },
    ];
  },
};

export default nextConfig;
