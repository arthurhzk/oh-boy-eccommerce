import { serviceData } from "@/domain/types/serviceData";

const serviceLinks: serviceData[] = [
  {
    id: 1,
    icon: "src/assets/icons/service-icons/EmailIcon.svg",
    title: "Email",
    description: "Faça contato por email",
    content: "ohboy@email.com",
  },
  {
    id: 2,
    icon: "src/assets/icons/service-icons/ChatIcon.svg",
    title: "Atendimento Online",
    description: "Atendimento online via chat",
    content: "Abrir chat",
  },
  {
    id: 3,
    icon: "src/assets/icons/service-icons/PhoneIcon.svg",
    title: "Contato",
    description: "Entre em contato por telefone",
    content: "(11) 99999-9999",
  },
  {
    id: 4,
    icon: "src/assets/icons/service-icons/OfficeIcon.svg",
    title: "Escritório",
    description: "Venha nos fazer uma visita",
    content: "Rua do Escritório, 123",
  },
];

export default serviceLinks;
