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
    }, 
    {
      label: "Home",
      href: "#home",
    }
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) {
      const element = document.querySelector(href);
      if (element instanceof HTMLElement) {
        const offsetTop = element.offsetTop;
        smoothScrollTo(offsetTop, 4500); 
      }
    }
  };
  
  function smoothScrollTo(target: number, duration: number) {
    const startPosition = window.pageYOffset;
    const distance = target - startPosition;
    let startTime: number | null = null;
  
    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const nextPosition = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, nextPosition);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }
  
    requestAnimationFrame(animation);
  }
  
  function easeInOutQuad(t: number, b: number, c: number, d: number) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-transparent text-primary  fixed  " >
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden text-foreground" />
        {/* <NavbarBrand >
          <p className="font-bold text-inherity text-xl text-foreground">Timothy McMasters</p>
        </NavbarBrand> */}
        <NavbarBrand >
          <Tooltip content="Timothy McMasters (To Top)" className="bg-background text-foreground">
          <Avatar src="/avatar.jpg" size="lg" isBordered name="Tim" as={Link} href="#home" isFocusable onClick={handleSmoothScroll}/>
          </Tooltip>
        </NavbarBrand>
      </NavbarContent>



      <NavbarContent className="flex gap-5" justify="center">
        <NavbarItem isActive className="hidden sm:flex">
          <Tooltip content="To Contact Section" className="bg-background text-foreground">
          <Link color="primary" href="#contact"  size="lg" onClick={handleSmoothScroll}>
            Contact
          </Link>
          </Tooltip>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-transparent ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"}
              className="w-full"
              href={item.href}
              onClick={handleSmoothScroll}
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
