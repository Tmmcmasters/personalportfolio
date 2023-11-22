'use client'

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Projects", "About"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
        <NavbarBrand>
          <p className="font-bold text-inherity">Timothy McMasters</p>
        </NavbarBrand>
      </NavbarContent>



        <NavbarContent className="hidden sm:flex gap-2" justify="center">
          <NavbarItem isActive>
            <Link color="foreground" href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" color="foreground">
              About
            </Link>
          </NavbarItem>
        </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"}
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
