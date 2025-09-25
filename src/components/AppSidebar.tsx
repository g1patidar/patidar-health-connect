import { 
  Home, 
  Stethoscope, 
  Users, 
  MessageCircle, 
  Phone, 
  Calendar
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Services", url: "/services", icon: Stethoscope },
  { title: "Doctors", url: "/doctors", icon: Users },
  { title: "Testimonials", url: "/testimonials", icon: MessageCircle },
  { title: "Contact", url: "/contact", icon: Phone },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarContent>
        {/* Hospital Logo/Header */}
        <div className="p-4 border-b border-border animate-fade-in">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-elegant hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div className="group-data-[collapsible=icon]:hidden transition-all duration-300">
              <h1 className="text-lg font-bold text-foreground">Patidar Hospital</h1>
              <p className="text-xs text-muted-foreground">Excellence in Healthcare</p>
            </div>
          </div>
        </div>

        <SidebarGroup className="mt-4">
          <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">
            Navigation
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                   <SidebarMenuButton 
                    asChild 
                    isActive={isActive(item.url)}
                    tooltip={item.title}
                    className="hover:scale-105 transition-all duration-200"
                  >
                    <NavLink to={item.url} end className="group">
                      <item.icon className="group-hover:animate-pulse-gentle" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Emergency CTA */}
        <div className="mt-auto p-4 border-t border-border group-data-[collapsible=icon]:hidden animate-slide-in">
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-lg text-center shadow-elegant hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Calendar className="w-6 h-6 mx-auto mb-2 animate-pulse-gentle" />
            <p className="text-sm font-semibold mb-2">Emergency?</p>
            <p className="text-xs mb-3">24/7 Medical Care</p>
            <button className="bg-white text-red-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-red-50 transition-all duration-200 w-full hover:scale-110 active:scale-95">
              Call Now
            </button>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}