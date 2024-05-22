"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import supabase from "@/lib/subaseClient";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CountriesSelectModal = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState<any[]>([]);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      const { data, error } = await supabase.from("countries").select("*");
      if (data) {
        setCountries(data);
        console.log(data[0].id, data[0].name);
      } else {
        console.error(error);
      }
    };

    fetchCountries();
  }, []);

  const selectedCountryHandler = (value: string) => {
    setSelectedCountry(value);
    console.log(value);
  };

  // Fetch cities only if selectedCountry is not an empty string
  useEffect(() => {
    const fetchCities = async () => {
      if (selectedCountry) {
        const { data, error } = await supabase
          .from("cities")
          .select("*")
          .eq("country_id", selectedCountry);
        if (data) {
          setCities(data);
          console.log(data);
          setIsDisabled(false);
        } else {
          console.error(error);
        }
      }
    };

    fetchCities();
  }, [selectedCountry]);

  return (
    <>
      <Select onValueChange={selectedCountryHandler}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select Countries" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {countries.map((country) => (
              <SelectItem key={country.id} value={country.id}>
                {country.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select disabled={isDisabled}>
        <SelectTrigger className="w-[280px]">
          <SelectValue placeholder="Select Cities" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {cities.map((city) => (
              <SelectItem key={city.id} value={city.id}>
                {city.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default CountriesSelectModal;
