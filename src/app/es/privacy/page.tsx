import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { getSite } from "@/content/i18n";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de Privacidad de JIYA Eyelid & Facial Cosmetic Surgery + Hair Restoration en Raleigh, NC.",
};

const locale = "es" as const;
const updated = "Septiembre 2025";

export default function PrivacyEs() {
  const { business } = getSite(locale);
  const sections: { heading: string; body: string[] }[] = [
    {
      heading: "Descripción general",
      body: [
        `Esta Política de Privacidad explica cómo ${business.fullName} ("JIYA", "nosotros" o "nuestro") recopila, usa y protege la información cuando visitas nuestro sitio web o te comunicas con nosotros. Al usar este sitio, aceptas las prácticas descritas aquí.`,
      ],
    },
    {
      heading: "Información que recopilamos",
      body: [
        "Recopilamos la información que decides proporcionar, como tu nombre, correo electrónico, número de teléfono y cualquier detalle que incluyas al enviar una solicitud de consulta o el formulario de contacto, o cuando nos llamas o escribes.",
        "También recopilamos información técnica estándar de forma automática, como el tipo de navegador, el dispositivo y las páginas visitadas, mediante cookies y tecnologías similares que usamos para operar y mejorar el sitio.",
      ],
    },
    {
      heading: "Cómo usamos tu información",
      body: [
        "Usamos la información que proporcionas para responder tus preguntas, agendar y gestionar consultas y citas, y comunicarnos contigo sobre nuestros servicios. Usamos la información técnica para mantener la seguridad del sitio, entender cómo se utiliza y mejorar tu experiencia.",
      ],
    },
    {
      heading: "Cómo se comparte tu información",
      body: [
        "No vendemos tu información personal. Podemos compartir información con proveedores de servicios de confianza que nos ayudan a operar el sitio y a comunicarnos con los pacientes, únicamente en la medida necesaria para prestar esos servicios, como nuestro proveedor de alojamiento web y nuestros proveedores de formularios en línea. También podemos divulgar información si la ley lo exige.",
      ],
    },
    {
      heading: "Información de salud protegida",
      body: [
        "Cualquier información de salud protegida que se comparta como parte de tu atención se maneja conforme a la ley aplicable, incluida HIPAA cuando corresponde. Los formularios de este sitio están destinados a agendar citas y consultas generales, y no deben usarse para enviar información médica detallada. Por favor, no incluyas datos de salud sensibles en un formulario web.",
      ],
    },
    {
      heading: "Cookies y análisis",
      body: [
        "Podemos usar cookies y herramientas de análisis para entender el tráfico del sitio y mejorar su rendimiento. Puedes controlar las cookies desde la configuración de tu navegador. Desactivarlas puede afectar el funcionamiento de algunas partes del sitio.",
      ],
    },
    {
      heading: "Tus opciones",
      body: [
        "Puedes darte de baja de las comunicaciones de marketing en cualquier momento siguiendo las instrucciones para cancelar la suscripción en nuestros mensajes o contactándonos. También puedes solicitar acceso, corrección o eliminación de tu información personal, según lo permita la ley aplicable.",
      ],
    },
    {
      heading: "Contáctanos",
      body: [
        `Si tienes preguntas sobre esta Política de Privacidad, contáctanos en ${business.email} o al ${business.phone}. ${business.address.line1}, ${business.address.city}, ${business.address.state} ${business.address.zip}.`,
      ],
    },
  ];

  return (
    <>
      <section className="bg-noir pt-32 lg:pt-40">
        <div className="container-site pb-12 lg:pb-16">
          <Reveal>
            <span className="eyebrow text-gold">Legal</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-display-lg font-light uppercase text-gold">
              Política de Privacidad
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 font-sans text-sm font-light text-cream/50">
              Última actualización: {updated}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-noir-deep py-16 lg:py-24">
        <div className="container-site max-w-3xl">
          {sections.map((s, i) => (
            <Reveal key={s.heading} delay={i * 0.04}>
              <div className="mb-12">
                <h2 className="font-display text-2xl font-light uppercase text-cream">
                  {s.heading}
                </h2>
                {s.body.map((para, j) => (
                  <p key={j} className="mt-4 font-sans text-[0.95rem] font-light leading-relaxed text-cream/70">
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
