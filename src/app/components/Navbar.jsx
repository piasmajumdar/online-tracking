"use client";

import { useState } from "react";
import { Button, Dropdown, Label } from "@heroui/react";
import {
    ChevronDown,
    Xmark,
} from "@gravity-ui/icons";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        {
            label: "Track",
            href: "/",
        },
        {
            label: "Services",
            href: "/services",
        },
        {
            label: "Partner",
            href: "/partner",
        },
    ];

    return (
        <header className="relative z-50 w-full">
            <nav className="mx-auto flex h-20 w-11/12 items-center justify-between">

                {/* LEFT — Logo + Mobile Menu */}
                <div className="flex items-center">

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="flex h-10 w-10 items-center justify-center md:hidden"
                        aria-label="Toggle navigation"
                    >
                        {isMenuOpen ? (
                            <Xmark className="h-5 w-5" />
                        ) : (
                            <FiMenu className="h-5 w-5" />
                        )}
                    </button>

                    {/* Logo */}
                    <a
                        href="/"
                        className="text-xl font-semibold tracking-tight text-foreground"
                    >
                        QDelivery
                    </a>
                </div>

                {/* CENTER — Desktop Navigation */}
                <div className="hidden items-center gap-10 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                {/* RIGHT — Ship Now */}
                <Dropdown>
                    <Button
                        variant="primary"
                        className="h-11 rounded-full bg-foreground px-6 text-sm font-medium text-background"
                    >
                        <span>Ship Now</span>
                        <ChevronDown className="h-4 w-4" />
                    </Button>

                    <Dropdown.Popover
                        placement="bottom end"
                        className="min-w-[220px]"
                    >
                        <Dropdown.Menu aria-label="Ship Now options">
                            <Dropdown.Item
                                id="business"
                                textValue="Business Shipment"
                            >
                                <Label>Business Shipment</Label>
                            </Dropdown.Item>

                            <Dropdown.Item
                                id="local"
                                textValue="Local Delivery"
                            >
                                <Label>Local Delivery</Label>
                            </Dropdown.Item>

                            <Dropdown.Item
                                id="national"
                                textValue="National Courier"
                            >
                                <Label>National Courier</Label>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown.Popover>
                </Dropdown>
            </nav>

            {/* MOBILE MENU */}
            {isMenuOpen && (
                <div className="mx-auto w-11/12 border-t border-black/10 md:hidden">
                    <div className="flex flex-col py-3">

                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="border-b border-black/5 py-4 text-sm font-medium text-foreground last:border-b-0"
                            >
                                {item.label}
                            </a>
                        ))}

                    </div>
                </div>
            )}
        </header>
    );
}