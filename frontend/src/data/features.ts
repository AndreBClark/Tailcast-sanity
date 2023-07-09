export const featuresData: Feature = {
  title: "Unlike any tool you used before",
  subtitle: "Embrace Innovation",
  description:
    "Discover a new level of data analysis with our innovative and user-friendly platform. Transform your business needs with actionable insights.",
  content: {
    type: "list",
    list: [
      {
        text: "Real-time data visualization",
      },
      {
        text: "Advanced predictive analytics",
      },
      {
        text: "Seamless integration with APIs",
      },
    ],
  }
}

export const featuresData2: Feature = {
  title: "Issue tracking you’ll enjoy using",
  subtitle: "Make Data-Driven Decisions",
  description:
    "Monitor and track data issues with ease using our intuitive and efficient issue tracking system. Stay ahead of potential problems and improve your workflow.",
  content: {
    type: "list",
    list: [
      { text: "Collaborative environment" },
      { text: "Smart issue categorization" },
      { text: "Customizable notifications" },
    ],
  }
}

export const featuresData3: Feature = {
  title: "Build &amp; Launch without problems",
  subtitle: "Accelerate Your Success",
  description: "Our platform enables you to launch your data-driven projects with ease. Boost productivity and achieve better results. Empower your decision-making with advanced analytics",
  content: {
    type: "cta",
    text: "Get Started",
    action: ()=> {}
  }
}

export default [featuresData, featuresData2, featuresData3]
