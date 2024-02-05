'use client'

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Avatar } from "@nextui-org/react";
import { ThemeSwitcher } from "./themeChanger";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Projects", "About"];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-transparent text-primary  fixed  " >
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden text-foreground" />
        {/* <NavbarBrand >
          <p className="font-bold text-inherity text-xl text-foreground">Timothy McMasters</p>
        </NavbarBrand> */}
        <NavbarBrand >
          <Avatar src="/avatar.jpg" size="lg" isBordered name="Tim" as={Link} href="#" isFocusable/>
        </NavbarBrand>
      </NavbarContent>



      <NavbarContent className="flex gap-5" justify="center">
        <NavbarItem isActive className="hidden sm:flex">
          <Link color="primary" href="#"  size="lg">
            Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
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
