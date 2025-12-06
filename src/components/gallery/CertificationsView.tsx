"use client";

import { Flex, Heading, Text, Grid, SmartLink, Badge, Icon, Column, Row } from "@once-ui-system/core";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect, useRef } from "react";

interface Certification {
  title: string;
  date: string;
  institution: string;
  category: "testing" | "programming" | "ux" | "marketing";
  featured?: boolean;
  year: number;
  description?: string;
  skills?: string[];
}

const institutionColors: Record<string, any> = {
  "Platzi": "accent-background-strong",
  "UPEX": "brand-background-strong",
  "Postman": "accent-background-medium",
  "AICS": "brand-background-medium",
  "QAlified": "accent-background-weak",
  "Google": "brand-background-weak",
};

const categoryIcons: Record<string, string> = {
  testing: "rocket",
  programming: "typescript",
  ux: "design",
  marketing: "globe",
};

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [target]);
  
  return <Text variant="display-strong-l">{count}</Text>;
}

function ProgressBar({ value, max, label, color }: { value: number; max: number; label: string; color: string }) {
  const percentage = Math.round((value / max) * 100);
  
  return (
    <Flex direction="column" gap="8">
      <Row gap="8" horizontal="between">
        <Text variant="label-default-s" onBackground="neutral-weak">{label}</Text>
        <Text variant="label-default-s" onBackground="neutral-weak">{percentage}%</Text>
      </Row>
      <Flex 
        fillWidth 
        height="8" 
        background="neutral-alpha-weak" 
        radius="full"
        style={{ overflow: "hidden" }}
      >
        <div
          style={{
            height: "8px",
            backgroundColor: color,
            borderRadius: "999px",
            width: `${percentage}%`,
            transition: "width 1.5s ease-out",
          }}
        />
      </Flex>
      <Text variant="label-default-xs" onBackground="neutral-weak">{value} certifications</Text>
    </Flex>
  );
}

function CertificationCard({ cert, index }: { cert: Certification; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), index * 50);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => observer.disconnect();
  }, [index]);
  
  return (
    <Flex
      ref={cardRef}
      direction="column"
      gap="m"
      padding="l"
      background="surface"
      border="neutral-alpha-weak"
      radius="l"
      style={{
        transition: "all 0.3s ease",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: isHovered ? "0 8px 16px rgba(0,0,0,0.1)" : "0 2px 4px rgba(0,0,0,0.05)",
        cursor: "pointer",
        opacity: isVisible ? 1 : 0,
        animation: isVisible ? "fadeInUp 0.5s ease-out" : "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Row gap="s" wrap>
        <Badge background={institutionColors[cert.institution] || "neutral-alpha-weak"}>
          {cert.institution}
        </Badge>
        <Badge background="neutral-alpha-weak">
          <Row gap="4" vertical="center">
            <Icon name={categoryIcons[cert.category]} size="xs" />
            <Text variant="label-default-xs" style={{ textTransform: "capitalize" }}>
              {cert.category}
            </Text>
          </Row>
        </Badge>
      </Row>
      
      <Heading variant="heading-strong-s">
        {cert.title}
      </Heading>
      
      <Row gap="4" vertical="center">
        <Icon name="calendar" size="xs" onBackground="neutral-weak" />
        <Text variant="label-default-s" onBackground="neutral-weak">
          {cert.date}
        </Text>
      </Row>
      
      {isHovered && cert.description && (
        <Text 
          variant="body-default-s" 
          onBackground="neutral-weak"
          style={{
            animation: "fadeIn 0.3s ease-in",
            marginTop: "8px",
          }}
        >
          {cert.description}
        </Text>
      )}
      
      {isHovered && cert.skills && cert.skills.length > 0 && (
        <Row gap="4" wrap style={{ animation: "fadeIn 0.3s ease-in", marginTop: "4px" }}>
          {cert.skills.map((skill, idx) => (
            <Badge key={idx} background="brand-alpha-weak">
              <Text variant="label-default-xs">{skill}</Text>
            </Badge>
          ))}
        </Row>
      )}
    </Flex>
  );
}

function FeaturedCertCard({ cert, index }: { cert: Certification; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => observer.disconnect();
  }, [index]);
  
  return (
    <Flex
      ref={cardRef}
      direction="column"
      gap="m"
      padding="xl"
      background="brand-alpha-weak"
      border="brand-alpha-medium"
      radius="l"
      style={{
        transition: "all 0.3s ease",
        transform: isHovered ? "translateY(-6px)" : "translateY(0)",
        boxShadow: isHovered ? "0 12px 24px rgba(0,0,0,0.15)" : "0 4px 8px rgba(0,0,0,0.08)",
        cursor: "pointer",
        opacity: isVisible ? 1 : 0,
        animation: isVisible ? "fadeInUp 0.6s ease-out" : "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Row gap="s" wrap>
        <Badge background={institutionColors[cert.institution] || "surface"}>
          {cert.institution}
        </Badge>
        <Badge background="surface">
          <Row gap="4" vertical="center">
            <Icon name="certificate" size="s" />
            <Text variant="label-default-s">Featured</Text>
          </Row>
        </Badge>
      </Row>
      
      <Heading variant="heading-strong-m">
        {cert.title}
      </Heading>
      
      <Row gap="4" vertical="center">
        <Icon name="calendar" size="s" onBackground="neutral-weak" />
        <Text variant="label-default-m" onBackground="neutral-weak">
          {cert.date}
        </Text>
      </Row>
      
      {isHovered && cert.description && (
        <Text 
          variant="body-default-m" 
          onBackground="neutral-weak"
          style={{
            animation: "fadeIn 0.3s ease-in",
            marginTop: "8px",
          }}
        >
          {cert.description}
        </Text>
      )}
    </Flex>
  );
}

export default function CertificationsView() {
  const { t } = useLanguage();
  const [selectedYear, setSelectedYear] = useState<number | "all">("all");
  
  const allCertifications: Certification[] = [
    // Featured certifications
    { 
      title: "Test Automation with Playwright Course", 
      date: "September 2024", 
      institution: "Platzi", 
      category: "testing", 
      featured: true, 
      year: 2024,
      description: "Advanced E2E testing with Playwright framework",
      skills: ["Playwright", "E2E Testing", "Automation"]
    },
    { 
      title: "Postman API Fundamentals Student Expert", 
      date: "July 2024", 
      institution: "Postman", 
      category: "testing", 
      featured: true, 
      year: 2024,
      description: "API testing and automation with Postman",
      skills: ["API Testing", "Postman", "REST"]
    },
    { 
      title: "Accredited Software Testing Fundamentals Certification (AICS ASTFC)", 
      date: "July 2024", 
      institution: "AICS", 
      category: "testing", 
      featured: true, 
      year: 2024,
      description: "Comprehensive software testing fundamentals",
      skills: ["Testing Fundamentals", "QA", "Best Practices"]
    },
    { 
      title: "UX Design School", 
      date: "June 2021", 
      institution: "Platzi", 
      category: "ux", 
      featured: true, 
      year: 2021,
      description: "Complete UX design methodology and practices",
      skills: ["UX Design", "User Research", "Prototyping"]
    },
    
    // Testing & QA
    { title: "Software Testing Foundations Course", date: "May 2023", institution: "Platzi", category: "testing", year: 2023 },
    { title: "Introduction to Test Automation Course", date: "May 2023", institution: "Platzi", category: "testing", year: 2023 },
    { title: "SQL QA", date: "October 2023", institution: "UPEX", category: "testing", year: 2023 },
    { title: "Agile QA Analyst", date: "October 2023", institution: "UPEX", category: "testing", year: 2023 },
    { title: "Functional Analyst QA", date: "November 2023", institution: "UPEX", category: "testing", year: 2023 },
    { title: "API Testing QA", date: "January 2024", institution: "UPEX", category: "testing", year: 2024 },
    { title: "Accredited Scrum Fundamentals Certification (ASFC)", date: "July 2024", institution: "AICS", category: "testing", year: 2024 },
    { title: "Continuous Performance Testing", date: "August 2024", institution: "QAlified", category: "testing", year: 2024 },
    { title: "API Beginner Learning Path", date: "August 2024", institution: "Postman", category: "testing", year: 2024 },
    { title: "Admin Learning Path", date: "August 2024", institution: "Postman", category: "testing", year: 2024 },
    { title: "Engineer Learning Path", date: "September 2024", institution: "Postman", category: "testing", year: 2024 },
    { title: "Advanced Cypress Course", date: "September 2024", institution: "Platzi", category: "testing", year: 2024 },
    { title: "UI Test Automation with Cypress Course", date: "September 2024", institution: "Platzi", category: "testing", year: 2024 },
    
    // Programming
    { title: "Prework Course: Development Environment Setup on Windows", date: "July 2021", institution: "Platzi", category: "programming", year: 2021 },
    { title: "TypeScript Course", date: "September 2024", institution: "Platzi", category: "programming", year: 2024 },
    { title: "JavaScript Fundamentals Course", date: "September 2024", institution: "Platzi", category: "programming", year: 2024 },
    { title: "Python Course", date: "September 2024", institution: "Platzi", category: "programming", year: 2024 },
    
    // UX/UI
    { title: "Information Architecture Course with Usaria", date: "June 2021", institution: "Platzi", category: "ux", year: 2021 },
    { title: "UX Process Management Course", date: "April 2021", institution: "Platzi", category: "ux", year: 2021 },
    { title: "User-Centered Design Course", date: "April 2021", institution: "Platzi", category: "ux", year: 2021 },
    { title: "Design Thinking Course with Minds Garage", date: "April 2021", institution: "Platzi", category: "ux", year: 2021 },
    { title: "Introduction to Design Course", date: "May 2021", institution: "Platzi", category: "ux", year: 2021 },
    { title: "Usability Course: Principles, Testing, and Advanced Tools", date: "May 2021", institution: "Platzi", category: "ux", year: 2021 },
    { title: "Business Model Canvas Course", date: "May 2021", institution: "Platzi", category: "ux", year: 2021 },
    { title: "Idea Validation Course: Successful Prototypes and Testing", date: "June 2021", institution: "Platzi", category: "ux", year: 2021 },
    { title: "User Research Course: Techniques for Effective Research", date: "June 2021", institution: "Platzi", category: "ux", year: 2021 },
    { title: "Basic UX Writing Course", date: "June 2021", institution: "Platzi", category: "ux", year: 2021 },
    { title: "Advanced UX Writing Course", date: "June 2021", institution: "Platzi", category: "ux", year: 2021 },
    { title: "Thick Data in Business Course", date: "June 2021", institution: "Platzi", category: "ux", year: 2021 },
    { title: "Usability Testing Course", date: "June 2021", institution: "Platzi", category: "ux", year: 2021 },
    { title: "Practical Lean UX Course", date: "June 2021", institution: "Platzi", category: "ux", year: 2021 },
    { title: "UI/UX Fundamentals Course", date: "June 2021", institution: "Platzi", category: "ux", year: 2021 },
    { title: "Customer Experience Course: Practical Studies", date: "June 2021", institution: "Platzi", category: "ux", year: 2021 },
    { title: "UX Strategies for Businesses Course", date: "June 2021", institution: "Platzi", category: "ux", year: 2021 },
    { title: "Web Accessibility Course", date: "July 2021", institution: "Platzi", category: "ux", year: 2021 },
    { title: "Applied Design Sprint Course", date: "July 2021", institution: "Platzi", category: "ux", year: 2021 },
    
    // Marketing
    { title: "Customer Service & User Support Course", date: "February 2021", institution: "Platzi", category: "marketing", year: 2021 },
    { title: "Sales with WhatsApp Course", date: "March 2021", institution: "Platzi", category: "marketing", year: 2021 },
    { title: "Practical Sales Course: Techniques to Qualify and Convert", date: "March 2021", institution: "Platzi", category: "marketing", year: 2021 },
    { title: "YouTube Marketing Course", date: "April 2023", institution: "Platzi", category: "marketing", year: 2023 },
    { title: "YouTube Content Fundamentals Course", date: "April 2023", institution: "Platzi", category: "marketing", year: 2023 },
    { title: "Selling on Social Media: Metrics Analysis Course", date: "May 2023", institution: "Platzi", category: "marketing", year: 2023 },
    { title: "Advanced Course on Social Media Sales Strategies", date: "May 2023", institution: "Platzi", category: "marketing", year: 2023 },
    { title: "E-Commerce Fundamentals Course", date: "May 2023", institution: "Platzi", category: "marketing", year: 2023 },
    { title: "Marketing for Startups Course", date: "July 2023", institution: "Platzi", category: "marketing", year: 2023 },
    { title: "Branding for Entrepreneurs Course", date: "July 2023", institution: "Platzi", category: "marketing", year: 2023 },
    { title: "Brand Identity Design Course: Create Your Manifestos and Brandbooks", date: "July 2023", institution: "Platzi", category: "marketing", year: 2023 },
    { title: "Research for Branding Course", date: "July 2023", institution: "Platzi", category: "marketing", year: 2023 },
    { title: "Audio Glossary: Metrics for Digital Marketing", date: "October 2022", institution: "Platzi", category: "marketing", year: 2022 },
    { title: "Fundamentals of Digital Marketing", date: "July 2021", institution: "Google", category: "marketing", year: 2021 },
    { title: "Digital Campaign Planning and Measurement Course", date: "August 2025", institution: "Platzi", category: "marketing", year: 2025 },
    { title: "Introduction to Growth Hacking Course", date: "August 2025", institution: "Platzi", category: "marketing", year: 2025 },
  ];

  const filteredCertifications = selectedYear === "all" 
    ? allCertifications 
    : allCertifications.filter(cert => cert.year === selectedYear);

  const featuredCerts = filteredCertifications.filter(cert => cert.featured);
  const testingCerts = filteredCertifications.filter(cert => cert.category === "testing" && !cert.featured);
  const programmingCerts = filteredCertifications.filter(cert => cert.category === "programming");
  const uxCerts = filteredCertifications.filter(cert => cert.category === "ux" && !cert.featured);
  const marketingCerts = filteredCertifications.filter(cert => cert.category === "marketing");

  const totalCerts = allCertifications.length;
  const testingTotal = allCertifications.filter(c => c.category === "testing").length;
  const uxTotal = allCertifications.filter(c => c.category === "ux").length;
  const marketingTotal = allCertifications.filter(c => c.category === "marketing").length;
  const programmingTotal = allCertifications.filter(c => c.category === "programming").length;

  const years = Array.from(new Set(allCertifications.map(cert => cert.year))).sort((a, b) => b - a);

  return (
    <>
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
      
      <Flex direction="column" gap="xl" paddingY="l">
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

        {/* Animated Total Counter */}
        <Flex 
          direction="column" 
          gap="m" 
          padding="xl" 
          background="brand-alpha-weak" 
          radius="l"
          border="brand-alpha-medium"
          horizontal="center"
          align="center"
        >
          <AnimatedCounter target={totalCerts} />
          <Heading variant="heading-strong-m">Professional Certifications</Heading>
          <Text variant="body-default-m" onBackground="neutral-weak" align="center">
            Continuous learning in Testing, UX/UI, Marketing and Programming
          </Text>
        </Flex>

        {/* Progress Bars */}
        <Flex direction="column" gap="l" padding="l" background="surface" radius="l" border="neutral-alpha-weak">
          <Heading variant="heading-strong-m">Distribution by Category</Heading>
          <Grid columns="1" gap="l">
            <ProgressBar value={testingTotal} max={totalCerts} label="Testing & QA" color="#06b6d4" />
            <ProgressBar value={uxTotal} max={totalCerts} label="UX/UI Design" color="#8b5cf6" />
            <ProgressBar value={marketingTotal} max={totalCerts} label="Digital Marketing" color="#f59e0b" />
            <ProgressBar value={programmingTotal} max={totalCerts} label="Programming & Development" color="#10b981" />
          </Grid>
        </Flex>

        {/* Year Filter */}
        <Flex direction="column" gap="m">
          <Heading variant="heading-strong-m">Filter by Year</Heading>
          <Row gap="s" wrap>
            <Badge
              background="surface"
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedYear("all")}
            >
              All ({totalCerts})
            </Badge>
            {years.map(year => {
              const count = allCertifications.filter(c => c.year === year).length;
              return (
                <Badge
                  key={year}
                  background="surface"
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedYear(year)}
                >
                  {year} ({count})
                </Badge>
              );
            })}
          </Row>
        </Flex>

        {/* Summary Stats */}
        <Grid columns="4" s={{ columns: "2" }} gap="m">
          <Flex direction="column" gap="8" padding="m" background="surface" radius="m" border="neutral-alpha-weak">
            <Text variant="label-default-s" onBackground="neutral-weak">{t("cert.testing")}</Text>
            <Text variant="heading-strong-xl">{testingTotal}</Text>
          </Flex>
          <Flex direction="column" gap="8" padding="m" background="surface" radius="m" border="neutral-alpha-weak">
            <Text variant="label-default-s" onBackground="neutral-weak">{t("cert.ux")}</Text>
            <Text variant="heading-strong-xl">{uxTotal}</Text>
          </Flex>
          <Flex direction="column" gap="8" padding="m" background="surface" radius="m" border="neutral-alpha-weak">
            <Text variant="label-default-s" onBackground="neutral-weak">{t("cert.marketing")}</Text>
            <Text variant="heading-strong-xl">{marketingTotal}</Text>
          </Flex>
          <Flex direction="column" gap="8" padding="m" background="surface" radius="m" border="neutral-alpha-weak">
            <Text variant="label-default-s" onBackground="neutral-weak">{t("cert.programming")}</Text>
            <Text variant="heading-strong-xl">{programmingTotal}</Text>
          </Flex>
        </Grid>

        {/* Featured Certifications */}
        {featuredCerts.length > 0 && (
          <Flex direction="column" gap="l" marginTop="l">
            <Heading variant="heading-strong-l">
              <Row gap="8" vertical="center">
                <Icon name="certificate" size="m" />
                Featured Certifications
              </Row>
            </Heading>
            <Grid columns="2" s={{ columns: "1" }} gap="l">
              {featuredCerts.map((cert, index) => (
                <FeaturedCertCard key={index} cert={cert} index={index} />
              ))}
            </Grid>
          </Flex>
        )}

        {/* Testing & QA Section */}
        {testingCerts.length > 0 && (
          <Flex direction="column" gap="l" marginTop="xl">
            <Heading variant="heading-strong-l">
              <Row gap="8" vertical="center">
                <Icon name="rocket" size="m" />
                {t("cert.testing.title")}
              </Row>
            </Heading>
            <Grid columns="3" m={{ columns: "2" }} s={{ columns: "1" }} gap="m">
              {testingCerts.map((cert, index) => (
                <CertificationCard key={index} cert={cert} index={index} />
              ))}
            </Grid>
          </Flex>
        )}

        {/* Programming Section */}
        {programmingCerts.length > 0 && (
          <Flex direction="column" gap="l" marginTop="xl">
            <Heading variant="heading-strong-l">
              <Row gap="8" vertical="center">
                <Icon name="typescript" size="m" />
                {t("cert.programming.title")}
              </Row>
            </Heading>
            <Grid columns="3" m={{ columns: "2" }} s={{ columns: "1" }} gap="m">
              {programmingCerts.map((cert, index) => (
                <CertificationCard key={index} cert={cert} index={index} />
              ))}
            </Grid>
          </Flex>
        )}

        {/* UX/UI Section */}
        {uxCerts.length > 0 && (
          <Flex direction="column" gap="l" marginTop="xl">
            <Heading variant="heading-strong-l">
              <Row gap="8" vertical="center">
                <Icon name="design" size="m" />
                {t("cert.ux.title")}
              </Row>
            </Heading>
            <Grid columns="3" m={{ columns: "2" }} s={{ columns: "1" }} gap="m">
              {uxCerts.map((cert, index) => (
                <CertificationCard key={index} cert={cert} index={index} />
              ))}
            </Grid>
          </Flex>
        )}

        {/* Marketing Section */}
        {marketingCerts.length > 0 && (
          <Flex direction="column" gap="l" marginTop="xl">
            <Heading variant="heading-strong-l">
              <Row gap="8" vertical="center">
                <Icon name="globe" size="m" />
                {t("cert.marketing.title")}
              </Row>
            </Heading>
            <Grid columns="3" m={{ columns: "2" }} s={{ columns: "1" }} gap="m">
              {marketingCerts.map((cert, index) => (
                <CertificationCard key={index} cert={cert} index={index} />
              ))}
            </Grid>
          </Flex>
        )}
      </Flex>
    </>
  );
}