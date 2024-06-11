import { getAllPackageData } from "@/data/packageData";
import { TPackage } from "@/types/types.global";
import Container from "@/utils/Container";
import React from "react";
import OurPackageCard from "./OurPackageCard";

const OurPackage = () => {
  const services = getAllPackageData();

  return (
    <div>
      <Container>
        <div className="mt-12">
          <h1 className="text-3xl hind-siliguri-bold text-center">
            আমাদের <span className="text-customSecondery">প্যাকেজ সমূহ</span>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mt-8">
            {services.map((service: TPackage) => (
              <OurPackageCard service={service} key={service.id} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurPackage;
