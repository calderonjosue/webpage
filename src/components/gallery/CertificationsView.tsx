"use client";

import { Flex, Heading, Text, Grid, SmartLink } from "@once-ui-system/core";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CertificationsView() {
  const { t } = useLanguage();
  
  return (
    <Flex direction="column" gap="xl">
      {/* Header Section */}
      <Flex direction="column" gap="m">
        <Heading variant="display-strong-l">{t("cert.title")}</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {t("cert.linkedin")}{" "}
          <SmartLink 
            href="https://www.linkedin.com/in/calderon-josue-qa-analyst/details/certifications/"
            target="_blank"
          >
            LinkedIn
          </SmartLink>
        </Text>
      </Flex>

      {/* Summary Section */}
      <Flex 
        direction="column" 
        gap="m" 
        padding="l" 
        background="neutral-alpha-weak" 
        radius="l"
      >
        <Heading variant="heading-strong-m">{t("cert.summary")}</Heading>
        <Grid columns="2" s={{ columns: "1" }} gap="m">
          <Flex direction="column" gap="8">
            <Text variant="label-default-s" onBackground="neutral-weak">{t("cert.ux")}</Text>
            <Text variant="heading-strong-xl">20 {t("cert.certificates")}</Text>
          </Flex>
          <Flex direction="column" gap="8">
            <Text variant="label-default-s" onBackground="neutral-weak">{t("cert.marketing")}</Text>
            <Text variant="heading-strong-xl">16 {t("cert.certificates")}</Text>
          </Flex>
          <Flex direction="column" gap="8">
            <Text variant="label-default-s" onBackground="neutral-weak">{t("cert.testing")}</Text>
            <Text variant="heading-strong-xl">16 {t("cert.certificates")}</Text>
          </Flex>
          <Flex direction="column" gap="8">
            <Text variant="label-default-s" onBackground="neutral-weak">{t("cert.programming")}</Text>
            <Text variant="heading-strong-xl">4 {t("cert.certificates")}</Text>
          </Flex>
        </Grid>
        <Text variant="heading-strong-l" align="center" marginTop="m">
          {t("cert.total")}
        </Text>
      </Flex>

      {/* Testing & QA Section */}
      <Flex direction="column" gap="m" marginTop="xl">
        <Heading variant="heading-strong-l">{t("cert.testing.title")}</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak" marginBottom="m">
          <strong>{t("cert.institutions")}:</strong> Platzi, UPEX, Postman, AICS, QAlified — 16 {t("cert.certificates")}
        </Text>
        <Flex direction="column" gap="s">
          {testingCertifications.map((cert, index) => (
            <Text key={index} variant="body-default-m">
              {index + 1}. {cert}
            </Text>
          ))}
        </Flex>
      </Flex>

      {/* Programming Section */}
      <Flex direction="column" gap="m" marginTop="xl">
        <Heading variant="heading-strong-l">{t("cert.programming.title")}</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak" marginBottom="m">
          <strong>{t("cert.institutions")}:</strong> Platzi
        </Text>
        <Flex direction="column" gap="s">
          {programmingCertifications.map((cert, index) => (
            <Text key={index} variant="body-default-m">
              {index + 1}. {cert}
            </Text>
          ))}
        </Flex>
      </Flex>

      {/* UX/UI Section */}
      <Flex direction="column" gap="m" marginTop="xl">
        <Heading variant="heading-strong-l">{t("cert.ux.title")}</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak" marginBottom="m">
          <strong>{t("cert.institutions")}:</strong> Platzi — 20 {t("cert.certificates")}
        </Text>
        <Flex direction="column" gap="s">
          {uxCertifications.map((cert, index) => (
            <Text key={index} variant="body-default-m">
              {index + 1}. {cert}
            </Text>
          ))}
        </Flex>
      </Flex>

      {/* Marketing Section */}
      <Flex direction="column" gap="m" marginTop="xl">
        <Heading variant="heading-strong-l">{t("cert.marketing.title")}</Heading>
        <Text variant="body-default-m" onBackground="neutral-weak" marginBottom="m">
          <strong>{t("cert.institutions")}:</strong> Platzi, Google Digital Garage — 16 {t("cert.certificates")}
        </Text>
        <Flex direction="column" gap="s">
          {marketingCertifications.map((cert, index) => (
            <Text key={index} variant="body-default-m">
              {index + 1}. {cert}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}

const testingCertifications = [
  "Software Testing Foundations Course – May 2023",
  "Introduction to Test Automation Course – May 2023",
  "SQL QA (UPEX) – October 2023",
  "Agile QA Analyst (UPEX) – October 2023",
  "Functional Analyst QA (UPEX) – November 2023",
  "API Testing QA (UPEX) – January 2024",
  "Postman API Fundamentals Student Expert – July 2024",
  "Accredited Software Testing Fundamentals Certification (AICS ASTFC) – July 2024",
  "Accredited Scrum Fundamentals Certification (ASFC) – July 2024",
  "Continuous Performance Testing (QAlified) – August 2024",
  "API Beginner Learning Path (Postman) – August 2024",
  "Admin Learning Path (Postman) – August 2024",
  "Engineer Learning Path (Postman) – September 2024",
  "Advanced Cypress Course – September 2024",
  "UI Test Automation with Cypress Course – September 2024",
  "Test Automation with Playwright Course – September 2024",
];

const programmingCertifications = [
  "Prework Course: Development Environment Setup on Windows – July 2021",
  "TypeScript Course – September 2024",
  "JavaScript Fundamentals Course – September 2024",
  "Python Course – September 2024",
];

const uxCertifications = [
  "Information Architecture Course with Usaria – June 2021",
  "UX Process Management Course – April 2021",
  "User-Centered Design Course – April 2021",
  "Design Thinking Course with Minds Garage – April 2021",
  "Introduction to Design Course – May 2021",
  "Usability Course: Principles, Testing, and Advanced Tools – May 2021",
  "Business Model Canvas Course – May 2021",
  "UX Design School – June 2021",
  "Idea Validation Course: Successful Prototypes and Testing – June 2021",
  "User Research Course: Techniques for Effective Research – June 2021",
  "Basic UX Writing Course – June 2021",
  "Advanced UX Writing Course – June 2021",
  "Thick Data in Business Course – June 2021",
  "Usability Testing Course – June 2021",
  "Practical Lean UX Course – June 2021",
  "UI/UX Fundamentals Course – June 2021",
  "Customer Experience Course: Practical Studies – June 2021",
  "UX Strategies for Businesses Course – June 2021",
  "Web Accessibility Course – July 2021",
  "Applied Design Sprint Course – July 2021",
];

const marketingCertifications = [
  "Customer Service & User Support Course – February 2021",
  "Sales with WhatsApp Course – March 2021",
  "Practical Sales Course: Techniques to Qualify and Convert – March 2021",
  "YouTube Marketing Course – April 2023",
  "YouTube Content Fundamentals Course – April 2023",
  "Selling on Social Media: Metrics Analysis Course – May 2023",
  "Advanced Course on Social Media Sales Strategies – May 2023",
  "E-Commerce Fundamentals Course – May 2023",
  "Marketing for Startups Course – July 2023",
  "Branding for Entrepreneurs Course – July 2023",
  "Brand Identity Design Course: Create Your Manifestos and Brandbooks – July 2023",
  "Research for Branding Course – July 2023",
  "Audio Glossary: Metrics for Digital Marketing – October 2022",
  "Fundamentals of Digital Marketing (Google Digital Garage) – July 2021",
  "Digital Campaign Planning and Measurement Course – August 2025",
  "Introduction to Growth Hacking Course – August 2025",
];