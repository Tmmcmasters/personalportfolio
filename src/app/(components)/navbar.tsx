'use client'

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Avatar, Tooltip } from "@nextui-org/react";
import { ThemeSwitcher } from "./themeChanger";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      label: "Contact",
      href: "#contact",
    }
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-transparent text-primary  fixed  " >
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden text-foreground" />
        {/* <NavbarBrand >
          <p className="font-bold text-inherity text-xl text-foreground">Timothy McMasters</p>
        </NavbarBrand> */}
        <NavbarBrand >
          <Tooltip content="Timothy McMasters (To Top)" className="bg-background text-foreground">
          <Avatar src="/avatar.jpg" size="lg" isBordered name="Tim" as={Link} href="#" isFocusable/>
          </Tooltip>
        </NavbarBrand>
      </NavbarContent>



      <NavbarContent className="flex gap-5" justify="center">
        <NavbarItem isActive className="hidden sm:flex">
          <Tooltip content="To Contact Section" className="bg-background text-foreground">
          <Link color="primary" href="#contact"  size="lg">
            Contact
          </Link>
          </Tooltip>
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
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
