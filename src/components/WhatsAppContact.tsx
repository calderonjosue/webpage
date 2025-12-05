"use client";

import { mailchimp, newsletter } from "@/resources";
import { Button, Heading, Input, Text, Background, Column, Row, Icon } from "@once-ui-system/core";
import { opacity, SpacingToken } from "@once-ui-system/core";
import { useState } from "react";

export const WhatsAppContact: React.FC<React.ComponentProps<typeof Column>> = ({ ...flex }) => {
  const [message, setMessage] = useState<string>("");
  const [name, setName] = useState<string>("");

  if (newsletter.display === false) return null;

  const handleWhatsAppClick = () => {
    const phoneNumber = "573172137932";
    const encodedMessage = encodeURIComponent(
      `Hola Josué, soy ${name || "un visitante"}. ${message || "Me gustaría contactarte."}`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
      {...flex}
    >
      <Background
        top="0"
        position="absolute"
        mask={{
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
          cursor: mailchimp.effects.mask.cursor,
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          opacity: mailchimp.effects.gradient.opacity as opacity,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          opacity: mailchimp.effects.dots.opacity as opacity,
          size: mailchimp.effects.dots.size as SpacingToken,
          color: mailchimp.effects.dots.color,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          opacity: mailchimp.effects.grid.opacity as opacity,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width,
          height: mailchimp.effects.grid.height,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as opacity,
          size: mailchimp.effects.lines.size as SpacingToken,
          thickness: mailchimp.effects.lines.thickness,
          angle: mailchimp.effects.lines.angle,
          color: mailchimp.effects.lines.color,
        }}
      />
      <Column maxWidth="xs" horizontal="center">
        <Heading marginBottom="s" variant="display-strong-xs">
          {newsletter.title}
        </Heading>
        <Text wrap="balance" marginBottom="l" variant="body-default-l" onBackground="neutral-weak">
          {newsletter.description}
        </Text>
      </Column>
      <Column
        fillWidth
        maxWidth={24}
        gap="8"
      >
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Tu nombre (opcional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          id="message"
          name="message"
          type="text"
          placeholder="Tu mensaje (opcional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Row height="48" vertical="center">
          <Button 
            onClick={handleWhatsAppClick}
            size="m" 
            fillWidth
            prefixIcon="whatsapp"
          >
            Contactar por WhatsApp
          </Button>
        </Row>
      </Column>
    </Column>
  );
};