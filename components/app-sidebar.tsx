"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  ChartArea,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "kaesyo_dev",
    email: "kaesyo.dev@dev.com",
    avatar: "https://github.com/KARAUJO1003.png",
  },
  navMain: [
    {
      title: "Painel Administrativo",
      url: "/",
      icon: ChartArea,
    },
    {
      title: "Gestão de Pessoas",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Colaboradores",
          url: "/colaboradores",
        },
        {
          title: "Pessoas",
          url: "/pessoas",
        },
      ],
    },
    {
      title: "Gestão de Vagas",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Organograma",
          url: "#",
        },
        {
          title: "Recrutamento",
          url: "/recrutamento",
        },
        {
          title: "Solicitações",
          url: "#",
        },
        {
          title: "Indicadores",
          url: "#",
        },
      ],
    },
    {
      title: "Cadastros",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Cargos",
          url: "#",
        },
        {
          title: "Departamentos",
          url: "#",
        },
        {
          title: "Unidades",
          url: "#",
        },
        {
          title: "Turnos",
          url: "#",
        },
        {
          title: "Jornadas",
          url: "#",
        },
      ],
    },
    {
      title: "Relatórios",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Gerador de Relatórios",
          url: "#",
        },
        {
          title: "Relatórios Prontos",
          url: "#",
        },
      ],
    },
    {
      title: "Configurações",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Gerais",
          url: "#",
        },
        {
          title: "Times",
          url: "#",
        },
        {
          title: "Permissões",
          url: "#",
        },
        {
          title: "Integrações",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-[--header-height] !h-[calc(100svh-var(--header-height))]"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              asChild
            >
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    POP Recruiter Inc
                  </span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary
          items={data.navSecondary}
          className="mt-auto"
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
