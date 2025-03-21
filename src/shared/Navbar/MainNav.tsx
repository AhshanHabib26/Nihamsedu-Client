"use client";

import Container from "@/utils/Container";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logoImg from "@/assets/icons/logo.png";
import { Drawer } from "@mantine/core";
import { FaBars, FaCartPlus, FaRegHeart, FaRegUser } from "react-icons/fa6";

const MainNav = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="py-2 shadow">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <Link href="/">
              <div className="flex items-center">
                <Image
                  className="w-[30px] h-[30px] object-cover"
                  src={logoImg}
                  alt="Website Logo"
                />
                <h1 className="text-lg hind-siliguri-bold ml-1 text-primaryColor">
                  Nihams Academy
                </h1>
              </div>
            </Link>
          </div>
          <div className=" flex items-center justify-between">
            <div className=" hidden md:block lg:block">
              <div className="flex items-center gap-3">
                <Link
                  className="text-lg hind-siliguri-regular text-customPrimary hover:text-customSecondery"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="text-lg hind-siliguri-regular text-customPrimary hover:text-customSecondery"
                  href="/all-books"
                >
                  Books
                </Link>
                <Link
                  className="text-lg hind-siliguri-regular text-customPrimary hover:text-customSecondery"
                  href="/all-quizes"
                >
                  Quizes
                </Link>
                <Link
                  className="text-lg hind-siliguri-regular text-customPrimary hover:text-customSecondery"
                  href="/template"
                >
                  Template
                </Link>
                <Link
                  className="text-lg hind-siliguri-regular text-customPrimary hover:text-customSecondery"
                  href="/blog"
                >
                  Blog
                </Link>
                <Link
                  className="text-lg hind-siliguri-regular text-customPrimary hover:text-customSecondery"
                  href="/about"
                >
                  About
                </Link>
                <Link
                  className="text-lg hind-siliguri-regular text-customPrimary hover:text-customSecondery"
                  href="/contact"
                >
                  Contact
                </Link>
                <div className=" hidden lg:block">
                  <div className=" flex items-center gap-3">
                    <hr className=" border-customPrimary border h-[16px]" />
                    <div className=" flex items-center gap-2">
                      <Link href="/">
                        <FaRegHeart className="text-customPrimary" size={18} />
                      </Link>
                      <Link href="/">
                        {" "}
                        <FaCartPlus className="text-customPrimary" size={18} />
                      </Link>
                      <Link href="/">
                        {" "}
                        <FaRegUser className="text-customPrimary" size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" block lg:hidden md:hidden">
              <Drawer.Root
                opened={opened}
                onClose={() => setOpened(false)}
                position="right"
                size="xs"
              >
                <Drawer.Overlay backgroundOpacity={0.2} blur={2} />
                <Drawer.Content>
                  <Drawer.Header>
                    <div className=" border-b-2 w-full flex items-center pb-2 border-green-50">
                      <Drawer.Title>
                        <div className="flex items-center">
                          <Image
                            className="w-[30px] h-[30px] object-cover"
                            src={logoImg}
                            alt="Website Logo"
                          />
                          <h1 className="text-lg hind-siliguri-bold ml-1 text-primaryColor">
                           Nihams Academy
                          </h1>
                        </div>
                      </Drawer.Title>
                      <Drawer.CloseButton />
                    </div>
                  </Drawer.Header>
                  <Drawer.Body>
                    {" "}
                    <div>
                      <Link
                        className="text-lg text-primaryColor hover:text-customSecondery block"
                        href="/"
                      >
                        Home
                      </Link>
                      <Link
                        className="text-lg text-primaryColor hover:text-customSecondery block"
                        href="/all-books"
                      >
                        Books
                      </Link>
                      <Link
                        className="text-lg text-primaryColor hover:text-customSecondery block"
                        href="/all-quizes"
                      >
                        Quizes
                      </Link>
                      <Link
                        className="text-lg text-primaryColor hover:text-customSecondery block"
                        href="/template"
                      >
                        Template
                      </Link>
                      <Link
                        className="text-lg text-primaryColor hover:text-customSecondery block"
                        href="/blog"
                      >
                        Blog
                      </Link>
                      <Link
                        className="text-lg text-primaryColor hover:text-customSecondery block"
                        href="/about"
                      >
                        About
                      </Link>
                      <Link
                        className="text-lg text-primaryColor hover:text-customSecondery block"
                        href="/contact"
                      >
                        Contact
                      </Link>
                      <hr className="my-3 border border-gray-100" />
                      <div className=" flex items-center">
                        <div className=" flex items-center gap-3">
                          <Link href="/">
                            <FaRegHeart
                              className="text-customPrimary"
                              size={20}
                            />
                          </Link>
                          <Link href="/">
                            {" "}
                            <FaCartPlus
                              className="text-customPrimary"
                              size={20}
                            />
                          </Link>
                          <Link href="/">
                            {" "}
                            <FaRegUser
                              className="text-customPrimary"
                              size={20}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Drawer.Body>
                </Drawer.Content>
              </Drawer.Root>

              <button onClick={() => setOpened(true)}>
                <FaBars size={20} color="#001D25" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainNav;
